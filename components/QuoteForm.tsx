'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import {
  quoteCertifications,
  quoteUrgencies,
  quoteVolumes,
  type QuoteCategory,
  type QuoteOption,
} from '@/lib/quote';
import styles from './QuoteForm.module.css';

/** Acepta `amarillo_5` además de `amarillo-5`, por si el enlace viene con guion bajo. */
const normalize = (value?: string) => value?.trim().toLowerCase().replace(/_/g, '-') ?? '';

/**
 * Deja solo dígitos y quita la lada de país (+52) si viene incluida; un número que
 * sigue teniendo más de 10 dígitos se conserva para que la validación lo rechace
 * en lugar de recortarlo a un número equivocado.
 */
const normalizePhone = (value: string) => {
  const digits = value.replace(/\D/g, '');
  return digits.length > 10 && digits.startsWith('52') ? digits.slice(2) : digits;
};

type QuoteFormProps = {
  categories: QuoteCategory[];
  industries: QuoteOption[];
  /** Valores de `?categoria=`, `?producto=` e `?industria=` para preseleccionar las listas. */
  initialCategory?: string;
  initialProduct?: string;
  initialIndustry?: string;
};

export default function QuoteForm({
  categories,
  industries,
  initialCategory,
  initialProduct,
  initialIndustry,
}: QuoteFormProps) {
  const findPreset = (params: { initialCategory?: string; initialProduct?: string; initialIndustry?: string }) => {
    const c = categories.find((item) => item.slug === normalize(params.initialCategory));
    const slug = normalize(params.initialProduct);
    const i = industries.find((item) => item.slug === normalize(params.initialIndustry));
    const preset = { category: c?.slug ?? '', product: '', otherText: '', comments: '', industry: i?.slug ?? '' };

    if (c && slug) {
      const match = c.products?.find((item) => item.slug === slug || item.aliases?.includes(slug));
      // Producto de la página que no está en la lista de la guía: se anota su nombre en
      // "Otro" o, si la categoría no tiene lista, en los comentarios.
      const fromPage = c.catalog?.find((item) => item.slug === slug)?.name;
      if (match) {
        preset.product = match.slug;
      } else if (fromPage) {
        const otherOption = c.products?.find((item) => item.isOther);
        if (otherOption) {
          preset.product = otherOption.slug;
          preset.otherText = fromPage;
        } else if (!c.products) {
          preset.comments = `Producto de interés: ${fromPage}`;
        }
      }
    }
    return preset;
  };

  const params = { initialCategory, initialProduct, initialIndustry };
  const [initialPreset] = useState(() => findPreset(params));
  const [categorySlug, setCategorySlug] = useState(initialPreset.category);
  const [productSlug, setProductSlug] = useState(initialPreset.product);
  const [otherText, setOtherText] = useState(initialPreset.otherText);
  const [comments, setComments] = useState(initialPreset.comments);
  const [industrySlug, setIndustrySlug] = useState(initialPreset.industry);
  const [presetParams, setPresetParams] = useState(params);

  // Al llegar desde otro botón "Cotizar" o "Información" sin salir de /cotizar, solo cambian las
  // listas; los datos ya capturados se conservan. Un enlace sin parámetros (como el del menú) no borra nada.
  if (
    presetParams.initialCategory !== initialCategory ||
    presetParams.initialProduct !== initialProduct ||
    presetParams.initialIndustry !== initialIndustry
  ) {
    setPresetParams(params);
    const preset = findPreset(params);
    if (preset.category) {
      setCategorySlug(preset.category);
      setProductSlug(preset.product);
      setOtherText(preset.otherText);
      if (preset.comments) setComments(preset.comments);
    }
    if (preset.industry) setIndustrySlug(preset.industry);
  }
  const [phone, setPhone] = useState('');
  const [specialNeed, setSpecialNeed] = useState<'' | 'no' | 'si'>('');
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const category = categories.find((c) => c.slug === categorySlug);
  const product = category?.products?.find((p) => p.slug === productSlug);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);

    // Netlify recibe nombres legibles en lugar de slugs y las certificaciones en un solo campo.
    const body = new URLSearchParams({
      'form-name': 'cotizacion',
      'bot-field': String(data.get('bot-field') ?? ''),
      nombre: String(data.get('nombre')),
      empresa: String(data.get('empresa')),
      telefono: phone,
      email: String(data.get('email')),
      ubicacion: String(data.get('ubicacion') ?? ''),
      industria: industries.find((i) => i.slug === industrySlug)?.name ?? '',
      categoria: category?.name ?? '',
      producto: product?.name ?? '',
      producto_otro: product?.isOther ? otherText : '',
      volumen: String(data.get('volumen')),
      urgencia: String(data.get('urgencia')),
      certificaciones: data.getAll('certificaciones').join(', '),
      necesidad_especial: specialNeed === 'si' ? 'Sí' : 'No',
      necesidad_especial_detalle: String(data.get('necesidad_especial_detalle') ?? ''),
      comentarios: comments,
      acepta_privacidad: data.get('acepta_privacidad') ? 'Sí, aviso de privacidad del 30/10/2026' : 'No',
    });

    setStatus('sending');
    try {
      const res = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      setStatus(res.ok ? 'sent' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div className={styles.thanks} role="status">
        <h2>¡Gracias por tu solicitud!</h2>
        <p>Recibimos tu cotización. Un asesor de Rivacolor se pondrá en contacto contigo a la brevedad.</p>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      {/* Campo trampa para bots; las personas no lo ven. */}
      <p className={styles.honeypot} aria-hidden="true">
        <label>
          No llenar: <input name="bot-field" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <fieldset className={styles.block}>
        <legend className={styles.legend}>Datos de contacto y empresa</legend>
        <div className={styles.grid}>
          <label className={styles.field}>
            <span>Nombre completo *</span>
            <input name="nombre" required autoComplete="name" />
          </label>
          <label className={styles.field}>
            <span>Empresa / Razón social *</span>
            <input name="empresa" required autoComplete="organization" />
          </label>
          <label className={styles.field}>
            <span>Teléfono con LADA (10 dígitos) *</span>
            <input
              name="telefono"
              type="tel"
              inputMode="numeric"
              required
              autoComplete="tel-national"
              pattern="\d{10}"
              title="Escribe los 10 dígitos de tu teléfono con LADA, sin el +52."
              value={phone}
              onChange={(e) => setPhone(normalizePhone(e.target.value))}
            />
          </label>
          <label className={styles.field}>
            <span>Correo electrónico *</span>
            <input name="email" type="email" required autoComplete="email" />
          </label>
          <label className={styles.field}>
            <span>Ciudad y estado</span>
            <input name="ubicacion" autoComplete="address-level2" />
          </label>
          <label className={styles.field}>
            <span>Industria</span>
            <select name="industria" value={industrySlug} onChange={(e) => setIndustrySlug(e.target.value)}>
              <option value="">Selecciona una opción</option>
              {industries.map((i) => (
                <option key={i.slug} value={i.slug}>
                  {i.name}
                </option>
              ))}
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset className={styles.block}>
        <legend className={styles.legend}>Selección de producto y necesidad</legend>
        <div className={styles.grid}>
          <label className={styles.field}>
            <span>Línea de producto *</span>
            <select
              name="categoria"
              required
              value={categorySlug}
              onChange={(e) => {
                setCategorySlug(e.target.value);
                setProductSlug('');
              }}
            >
              <option value="" disabled>
                Selecciona una opción
              </option>
              {categories.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.name}
                </option>
              ))}
            </select>
          </label>

          {category?.products && (
            <label className={styles.field}>
              <span>{category.productLabel ?? category.name} *</span>
              <select
                name="producto"
                required
                value={productSlug}
                onChange={(e) => setProductSlug(e.target.value)}
              >
                <option value="" disabled>
                  Selecciona un producto
                </option>
                {category.products.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>
          )}

          {product?.isOther && (
            <label className={`${styles.field} ${styles.wide}`}>
              <span>¿Qué producto buscas? *</span>
              <input
                name="producto_otro"
                required
                maxLength={100}
                value={otherText}
                onChange={(e) => setOtherText(e.target.value)}
              />
            </label>
          )}
        </div>
      </fieldset>

      <fieldset className={styles.block}>
        <legend className={styles.legend}>Necesidad y perfil comercial</legend>
        <div className={styles.grid}>
          <label className={styles.field}>
            <span>Volumen o cantidad estimada *</span>
            <select name="volumen" required defaultValue="">
              <option value="" disabled>
                Selecciona una opción
              </option>
              {quoteVolumes.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </label>
          <label className={styles.field}>
            <span>Urgencia / Tiempo de compra *</span>
            <select name="urgencia" required defaultValue="">
              <option value="" disabled>
                Selecciona una opción
              </option>
              {quoteUrgencies.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </label>
        </div>

        <p className={styles.hint}>Requerimiento de certificación / calidad (opcional)</p>
        <div className={styles.checks}>
          {quoteCertifications.map((c) => (
            <label key={c} className={styles.check}>
              <input type="checkbox" name="certificaciones" value={c} />
              <span>{c}</span>
            </label>
          ))}
        </div>

        <div role="radiogroup" aria-labelledby="special-need-label" aria-required="true">
          <p id="special-need-label" className={styles.hint}>
            ¿Tiene alguna necesidad o requerimiento especial que no se encuentre en la lista? *
          </p>
          <div className={styles.radios}>
            <label className={styles.check}>
              <input
                type="radio"
                name="necesidad_especial"
                value="no"
                required
                checked={specialNeed === 'no'}
                onChange={() => setSpecialNeed('no')}
              />
              <span>No</span>
            </label>
            <label className={styles.check}>
              <input
                type="radio"
                name="necesidad_especial"
                value="si"
                checked={specialNeed === 'si'}
                onChange={() => setSpecialNeed('si')}
              />
              <span>Sí</span>
            </label>
          </div>
        </div>

        {specialNeed === 'si' && (
          <label className={styles.field}>
            <span>Describe tu necesidad o requerimiento especial *</span>
            <input name="necesidad_especial_detalle" required maxLength={100} />
          </label>
        )}

        <label className={styles.field}>
          <span>Comentarios adicionales / Especificaciones</span>
          <textarea
            name="comentarios"
            rows={5}
            maxLength={300}
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />
        </label>
      </fieldset>

      <label className={styles.check}>
        <input type="checkbox" name="acepta_privacidad" required />
        <span>
          He leído el{' '}
          {/* Se abre en otra pestaña para no perder lo capturado en el formulario. */}
          <Link href="/aviso-de-privacidad" target="_blank" className={styles.link}>
            aviso de privacidad
          </Link>{' '}
          y acepto que Rivacolor use mis datos para dar seguimiento a esta cotización. *
        </span>
      </label>

      {status === 'error' && (
        <p className={styles.error} role="alert">
          No pudimos enviar tu solicitud. Inténtalo de nuevo o escríbenos a ventas@rivacolor.com.mx.
        </p>
      )}

      <button type="submit" className="quote-button" disabled={status === 'sending'}>
        {status === 'sending' ? 'Enviando…' : 'Enviar cotización'}
      </button>
    </form>
  );
}
