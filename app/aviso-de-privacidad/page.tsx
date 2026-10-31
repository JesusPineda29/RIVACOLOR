import type { Metadata } from 'next';
import TopBar from '@/components/TopBar';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Aviso de privacidad - Rivacolor',
};

const CONTACT_EMAIL = 'ventas@rivacolor.com.mx';
const ADDRESS = 'Manuel Acuña No. 6, Col. Jacarandas, Iztapalapa, C.P. 09280, Ciudad de México, México';

export default function AvisoDePrivacidadPage() {
  return (
    <main>
      <TopBar />
      <Header />
      <section className={styles.section}>
        <h1 className={styles.banner}>
          <span>AVISO DE PRIVACIDAD</span>
        </h1>

        <article className={styles.body}>
          <p className={styles.updated}>Última actualización: 30 de octubre de 2026</p>

          <h2>1. Responsable</h2>
          <p>
            <strong>Rivacolor S.A. de C.V.</strong> (en adelante, &quot;Rivacolor&quot;), con domicilio en{' '}
            {ADDRESS}, es responsable del tratamiento de los datos personales que nos proporciones, de
            conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los
            Particulares y demás normativa aplicable.
          </p>

          <h2>2. Datos personales que recabamos</h2>
          <p>
            Recabamos los datos que nos proporcionas directamente a través del formulario de cotización
            de este sitio, por correo electrónico o por teléfono:
          </p>
          <ul>
            <li>
              <strong>Identificación y contacto:</strong> nombre completo, empresa o razón social,
              teléfono, correo electrónico, y ciudad y estado.
            </li>
            <li>
              <strong>Información comercial:</strong> productos de interés, certificaciones o
              requisitos de calidad y los comentarios que decidas compartir.
            </li>
          </ul>
          <p>
            No solicitamos datos personales sensibles. Te pedimos no incluirlos en los campos de
            comentarios.
          </p>

          <h2>3. Finalidades del tratamiento</h2>
          <p>Utilizamos tus datos para las siguientes finalidades, necesarias para atender tu solicitud:</p>
          <ul>
            <li>Atender y dar respuesta a tu solicitud de cotización.</li>
            <li>Contactarte para aclarar especificaciones técnicas, precios, disponibilidad y logística.</li>
            <li>Enviarte fichas técnicas, certificados y documentación de los productos solicitados.</li>
            <li>Dar seguimiento a la relación comercial que, en su caso, se establezca.</li>
          </ul>
          <p>
            De manera adicional, y solo si no te opones, podremos usar tus datos para enviarte
            información sobre nuevos productos y servicios de Rivacolor. Si no deseas recibirla, puedes
            indicarlo en cualquier momento escribiendo a{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Tu negativa no afectará la
            atención de tu cotización.
          </p>

          <h2>4. Transferencias y remisiones</h2>
          <p>
            Rivacolor no vende ni comparte tus datos personales con terceros para fines propios de
            ellos. Tus datos pueden ser tratados por proveedores que nos prestan servicios de
            alojamiento del sitio web y de correo electrónico, únicamente por cuenta de Rivacolor y
            bajo obligaciones de confidencialidad. Solo transferiremos tus datos sin tu consentimiento
            en los casos previstos por la ley, por ejemplo, cuando lo requiera una autoridad
            competente.
          </p>

          <h2>5. Derechos ARCO</h2>
          <p>
            Tienes derecho a <strong>Acceder</strong> a tus datos personales, <strong>Rectificarlos</strong>{' '}
            si son inexactos, <strong>Cancelarlos</strong> cuando consideres que no se requieren para
            las finalidades señaladas y <strong>Oponerte</strong> a su tratamiento para fines
            específicos. Para ejercerlos, envía una solicitud a{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> que incluya:
          </p>
          <ul>
            <li>Tu nombre y un medio para comunicarte la respuesta.</li>
            <li>Una copia de tu identificación oficial o, en su caso, de la representación legal.</li>
            <li>La descripción clara de los datos y del derecho que deseas ejercer.</li>
            <li>Cualquier documento que facilite la localización de tus datos.</li>
          </ul>
          <p>
            Te responderemos en un plazo máximo de 20 días hábiles a partir de la recepción de tu
            solicitud y, si resulta procedente, la haremos efectiva dentro de los 15 días hábiles
            siguientes.
          </p>

          <h2>6. Revocación del consentimiento</h2>
          <p>
            Puedes revocar en cualquier momento el consentimiento que nos hayas otorgado para el
            tratamiento de tus datos, siguiendo el mismo procedimiento descrito para los derechos ARCO.
            Ten en cuenta que, si revocas tu consentimiento para las finalidades necesarias, es posible
            que no podamos continuar atendiendo tu solicitud.
          </p>

          <h2>7. Cookies y tecnologías similares</h2>
          <p>
            Este sitio no utiliza cookies propias para identificarte. El mapa de ubicación es un
            servicio de Google Maps, que puede usar sus propias cookies conforme a las políticas de
            privacidad de Google. Puedes bloquearlas o eliminarlas desde la configuración de tu
            navegador.
          </p>

          <h2>8. Conservación y seguridad</h2>
          <p>
            Conservamos tus datos solo durante el tiempo necesario para cumplir con las finalidades
            descritas y con las obligaciones legales aplicables, y aplicamos medidas de seguridad
            administrativas, técnicas y físicas para protegerlos contra daño, pérdida, alteración o
            uso no autorizado.
          </p>

          <h2>9. Cambios a este aviso</h2>
          <p>
            Este aviso puede modificarse por cambios legales, en nuestros servicios o en nuestras
            prácticas de privacidad. Cualquier cambio se publicará en esta misma página con su fecha
            de actualización.
          </p>

          <h2>10. Autoridad</h2>
          <p>
            Si consideras que tu derecho a la protección de datos personales ha sido vulnerado, puedes
            acudir ante la autoridad competente en materia de protección de datos personales.
          </p>
        </article>
      </section>
      <Footer />
    </main>
  );
}
