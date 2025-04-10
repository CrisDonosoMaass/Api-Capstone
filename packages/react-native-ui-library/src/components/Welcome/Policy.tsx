import React from 'react';
import {
  Linking,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Text, useTheme } from 'react-native-paper';
import { useTranslations } from 'use-intl';

const Policy = () => {
  const theme = useTheme();
  const { colors } = theme;
  const t = useTranslations('Welcome');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text
          allowFontScaling={false}
          variant="titleMedium"
          style={{ color: colors.onSecondary }}
        >
          CURRENCYBIRD SPA
        </Text>
        <Text
          variant="headlineMedium"
          style={{ color: colors.onSecondary, marginTop: 30 }}
        >
          Política de Privacidad y Protección de Datos
        </Text>
        <Text
          variant="headlineMedium"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          1. Introducción
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          CURRENCY BIRD SpA (“CURRENCYBIRD”) es una sociedad por acciones
          constituida por escritura pública de fecha 15 de mayo de 2015,
          otorgada en el Registro de Empresas y Sociedades. Como parte de su
          objeto social, CURRENCYBIRD, entre otras materias, administra y opera
          directamente, o a través de terceros, plataformas informáticas,
          software, redes y conexiones a través de las cuales ofrece a sus
          Clientes la posibilidad de instruir transferencia de divisas al
          exterior (“Transferencia”), como también la compra y venta de monedas
          extranjeras (“Divisas”). Entenderemos por cliente (“Cliente”) a una
          persona natural o jurídica que requiere comprar y/o transferir divisas
          al exterior. El Cliente declara conocer y aceptar que CURRENCYBIRD no
          es una entidad regulada por la Comisión para el Mercado Financiero
          (“CMF”) y que el servicio que presta no es ni debe ser considerado
          como de carácter bancario o de intermediación de bienes y servicios.
          Por medio del presente documento, queremos dar a conocer las políticas
          de privacidad ("Políticas de Privacidad y protección de Datos") del
          sitio web www.currencybird.cl, www.currencybird.com o cualquier
          dominio o subdominio asociados a la empresa, así como de nuestra
          aplicación móvil “CurrencyBird” desarrollada y gestionada por
          CurrencyBird SpA, las cuales entrarán en vigencia una vez que el
          Cliente decida aceptarlas. En caso de que el Cliente no esté de
          acuerdo con la política detallada a continuación, se le recomienda no
          seguir adelante con el registro. Toda persona, al registrarse como
          Cliente en el sitio, presta su consentimiento para que se utilice su
          información personal. De igual forma, CURRENCYBIRD debe tomar todas
          las medidas necesarias para resguardar dicha información de acuerdo a
          la presente Política.
        </Text>
        <Text
          variant="headlineMedium"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          2. Propósito de la Política
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          Como se mencionó anteriormente, a través de CURRENCYBIRD nuestros
          clientes pueden comprar/vender divisas e instruir transferencias de
          divisas al extranjero. En ese sentido, recopilar información de los
          Clientes tiene los siguientes propósitos
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, lineHeight: 20 }}
        >
          a.Confirmar la identidad de nuestros clientes y asegurarnos de que
          estén autorizados para utilizar nuestros servicios.
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, lineHeight: 20 }}
        >
          b. Cumplir con los requisitos legales y regulatorios, incluidas las
          leyes contra el lavado de dinero y el financiamiento del terrorismo.
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, lineHeight: 20 }}
        >
          c. Procesar sus transacciones con precisión y eficiencia.
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, lineHeight: 20 }}
        >
          d. Comunicarnos con nuestros clientes, ya sea para informarles sobre
          sus transacciones o solicitar información de la cuenta.
        </Text>
        <Text
          variant="headlineMedium"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          3. Información que se solicita a los Clientes
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          Para poder llevar a cabo las instrucciones de transferencia, es
          necesario que nuestros clientes nos entreguen cierta información de
          carácter personal, de contacto y bancaria. Del mismo modo, se les
          solicita que entreguen información de los beneficiarios de las
          transferencias.
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10, marginBottom: 10 }}
        >
          CURRENCYBIRD podrá solicitar, recabar y almacenar la siguiente
          información:
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          A- Información del Cliente a. Información personal, que incluye
          principalmente el nombre, apellido, RUT, nacionalidad, fecha de
          nacimiento, y una copia de la Cédula de Identidad o pasaporte chileno.
          b. Información de contacto, como el correo electrónico, número de
          teléfono y dirección. c. Información bancaria, como lo son el banco y
          el número de cuenta. Esta información es necesaria para poder procesar
          de manera correcta las operaciones de nuestros clientes. d.
          Información laboral, como el empleador y la ocupación. e. Cualquier
          otra información que nos ayude a conocer a nuestros clientes y así
          poder prestar un mejor servicio y cumplir a cabalidad con la
          legislación que nos resulta aplicable.
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10 }}
        >
          B - Información del Beneficiario a. Al momento de registrar al
          Beneficiario de la operación, se le solicitará información de este.
          Esta incluye principalmente el nombre completo, información de
          contacto, domicilio y la información de la cuenta bancaria, para
          garantizar la precisión y seguridad de las transferencias.
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10 }}
        >
          Ahora bien, cualquier información entregada a CURRENCYBIRD es
          utilizada únicamente para llevar a cabo las transferencias
          internacionales de divisas y cumplir con la normativa que nos resulte
          aplicable. Nos tomamos muy en serio la protección de la información de
          nuestros Clientes y sus Beneficiarios.
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10 }}
        >
          Para garantizar a nuestros clientes la seguridad y transparencia en el
          uso y manejo de su información, CURRENCYBIRD permite a los Clientes
          acceder en cualquier momento a toda la información de su cuenta.
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10 }}
        >
          Además, en caso de que el Cliente detecte algún error o se percate de
          que alguna información se encuentre desactualizada, este puede llevar
          a cabo la corrección o actualización de acuerdo a lo indicado en el
          capítulo VII de la presente Política.
        </Text>

        <Text
          variant="headlineMedium"
          style={{ color: colors.onSecondary, marginTop: 30, marginBottom: 20 }}
        >
          4. Cómo se maneja la información entregada
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          La información que recopilamos solo tiene por objeto poder ofrecer a
          nuestros Clientes una solución que se adapte a sus necesidades y hacer
          que la transferencia de divisas al extranjero sea una buena
          experiencia. Es por lo anterior que al recopilar información personal
          del Cliente, CURRENCYBIRD se asegura de que se solicite sólo la
          información necesaria para llevar a cabo las transferencias y para
          cumplir con la normativa que nos resulta aplicable. La información
          personal del cliente se utiliza solo para los fines para los que fue
          recopilada y sólo se compartirá con las entidades a través de las
          cuales se materialicen sus transferencias, así como con cualquier
          autoridad gubernamental o judicial chilena o de los países a los
          cuales se realizan dichas transferencias, previa solicitud presentada
          por dichas entidades. La información que recopilamos, tiene las
          siguientes finalidades:
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          1. Verificar la identidad del Cliente: nos interesa que la persona que
          se registra en nuestro sitio web, sea realmente quien dice ser. 2.
          Llevar a cabo la instrucción de transferencia: al tratarse de
          transferencias de divisas, necesitamos conocer la información bancaria
          de la persona que nos transfiere y del destinatario a quién le debemos
          transferir. 3. Conocer mejor a nuestros Clientes: parte de nuestro
          negocio implica conocer a nuestros clientes, por lo que nos esforzamos
          en saber cuáles son sus intereses, necesidades, capacidad económica,
          entre otras cosas, para poder ofrecerles una mejor solución. 4.
          Mejorar nuestras campañas de marketing: nos interesa estar
          continuamente mejorando nuestras iniciativas comerciales y
          promocionales, para eso analizamos las páginas visitadas y/o las
          búsquedas realizadas por nuestros Clientes en nuestro sitio web y así
          poder mejorar en las ofertas de nuestros servicios. 5. La comunicación
          con nuestros Clientes: queremos poder enviarle a nuestros Clientes
          información, ya sea vía correo electrónico, mensaje de texto o por
          medio de nuestras distintas redes sociales, sobre nuevos servicios,
          noticias relacionadas con la empresa o el rubro. Siempre que el
          Cliente así lo prefiera, podrá solicitar que se le excluya de las
          listas de contacto para el envío de información promocional o
          publicitaria. 6. Lograr que los fondos transferidos lleguen a destino:
          Para poder llevar a cabo las transferencias de fondos internacionales,
          CURRENCYBIRD cuenta con aliados estratégicos en distintos puntos del
          mundo. Ellos, al igual que nosotros, deben cumplir con la normativa
          que les resulta aplicable en su jurisdicción y deben contar con la
          información necesaria para poder depositar los fondos en la cuenta de
          destino. Es por lo anterior que, en CURRENCYBIRD debemos compartir
          cierta información con estos proveedores, como lo son (sin que el
          texto sea taxativo) el nombre, información de contacto, domicilio e
          información bancaria del destinatario de los fondos y de la
          instrucción de transferencia. Por supuesto que en CURRENCYBIRD nos
          preocupamos siempre por la confidencialidad de la información de
          nuestros Clientes, es por esto que con cada uno de nuestros aliados se
          firman acuerdos o contratos que conllevan dicha confidencialidad de la
          5 información. Por otro lado, en caso de que se decida dentro de la
          empresa revelar la información de los Clientes a terceros que no sean
          proveedores del servicio, empresas afiliadas o relacionadas a
          CURRENCYBIRD no procederemos a dicha revelación sin el consentimiento
          expresa de nuestros Clientes, con la excepción de que la revelación se
          deba al cumplimiento de la normativa vigente o a alguna solicitud de
          la autoridad, en estos casos resulta imperativo cumplir.
        </Text>

        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          5. Protección y Confidencialidad de la Información
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          En CURRENCYBIRD utilizamos sistemas apropiados para proteger la
          información personal que recopilamos de nuestros Clientes. Esto
          incluye medidas de seguridad físicas, tecnológicas y administrativas,
          diseñadas para proteger la información contra el acceso no autorizado
          o el uso indebido. Además, nuestros empleados y contratistas reciben
          capacitación regular sobre la importancia de proteger y mantener la
          confidencialidad de la información personal del Cliente y se les exige
          que cumplan con todas las políticas y procedimientos relevantes
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          Una vez que el Cliente se registra en nuestro sitio web, CURRENCYBIRD
          no utilizará la Información entregada por el Cliente para otro fin
          distinto de los regulados en la presente Política. Sin embargo, el
          Cliente consiente expresamente en que su Información Personal puede
          ser compartida con sociedades controladas, controladoras y/o
          vinculadas a CURRENCYBIRD, a cualquier título y en el momento, forma y
          condiciones que la empresa estime pertinente. Ahora bien, en
          CURRENCYBIRD siempre haremos todo lo posible por velar por la
          confidencialidad de la Información Personal de nuestros Clientes
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          El Cliente consiente expresamente en este acto que, en caso de que
          CURRENCYBIRD cambie de controlador o sea adquirido por una tercera
          persona, toda su Información Personal sea entregada como un activo de
          la empresa. Sin perjuicio de lo anterior, CURRENCYBIRD hará todos sus
          esfuerzos para que la Información entregada mantenga su calidad de
          confidencial.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          Es importante entender que la seguridad perfecta en internet no
          existe, pero eso no nos desanima a tener un sistema de seguridad
          robusto. En caso de una violación de datos, CURRENCYBIRD tomará todas
          las medidas necesarias para mitigar cualquier daño potencial y
          notificará a los Clientes afectados de acuerdo a la normativa que
          resulte aplicable.
        </Text>

        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          6. Entrega de información a autoridades
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          Uno de los objetivos principales en CURRENCYBIRD es el cumplimiento de
          la ley. Por lo anterior, como empresa podremos vernos en la obligación
          de compartir la información de un Cliente con Instituciones de Orden
          Público, como lo son Carabineros de Chile, la Policía de
          Investigaciones; servicios Públicos como la Unidad de Análisis
          Financiero, la Comisión para el Mercado Financiero o SII; con agentes
          gubernamentales u otras autoridades, cuando se cumpla alguno de los
          siguientes requisitos (listado no taxativo):
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          1. Cuando estemos obligados a ello por la ley o normativa vigente que
          nos resulte aplicable. 2. Cuando existe una orden judicial que nos
          obliga a ello. 3. Cuando exista alguna necesidad imperativa de
          prevenir algún daño físico o económico para la empresa. 4. Cuando
          tengamos sospechas fundadas de que existe la comisión de algún delito
          o comportamiento ilegal por parte de nuestros Clientes. 5. Cuando
          existan sospechas fundadas de que el comportamiento de alguno de
          nuestros Clientes constituye una violación
        </Text>

        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          7. Derechos de acceso, cancelación y rectificación
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          Nuestros Clientes siempre podrán ejercer su derecho de acceder,
          rectificar y cancelar la Información Personal que nos han compartido.
          El acceso a dicha información se puede realizar a través de nuestro
          sitio web, donde el Cliente deberá ingresar utilizando su nombre de
          usuario y su contraseña. Del mismo modo, los Clientes garantizan y
          responden, en cualquier caso, de la veracidad, exactitud, vigencia y
          autenticidad de la Información Personal entregada a la empresa y se
          comprometen a mantenerla debidamente actualizada.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          Si bien el cliente puede rectificar o actualizar Información Personal
          a través de nuestro sitio web, se debe tener en cuenta de que cierta
          información, como el número de identificación del cliente, no puede
          ser modificada a través de nuestras aplicaciones en línea. En estos
          casos, el cliente debe enviarnos un correo electrónico a
          cumplimiento@currencybird.cl para solicitar la modificación
          correspondiente. Sin perjuicio de los cambios que se ejecuten en el
          perfil del Cliente, CURRENCYBIRD conservará la Información Personal
          anterior por motivos legales, de seguridad y control de fraude
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          Los Clientes también pueden solicitar la cancelación de su cuenta
          enviando un correo electrónico a cumplimiento@currencybird.cl Una vez
          que se ha recibido la solicitud, la Información Personal del Cliente
          no será inmediatamente eliminada y retirada de nuestros archivos por
          motivos regulatorios, legales, de soporte y técnicos. Por lo tanto, el
          Cliente acepta que no toda la Información sea eliminada
          definitivamente de las bases de datos de la empresa.
        </Text>

        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          8. Seguridad de la información
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          En CURRENCYBIRD estamos comprometidos con la seguridad de la
          información de nuestros Clientes y, por lo tanto, hemos implementado
          medidas técnicas, organizativas y administrativas apropiadas para
          garantizar la confidencialidad, integridad y disponibilidad de la
          Información Personal recopilada y procesada en nuestros sistemas.
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10 }}
        >
          Entre las medidas de seguridad que hemos implementado se incluyen: -
          Cortafuegos (firewalls). - Secure Socket Layers (SSL). - Acceso
          restringido a la información personal de nuestros clientes solo a
          aquellos empleados, contratistas y proveedores de servicios que
          necesiten conocer dicha información para cumplir con sus funciones
          laborales. - Encriptación de los datos personales de nuestros clientes
          durante su transmisión. - Implementación de controles de acceso físico
          y lógico en nuestras instalaciones y sistemas informáticos. -
          Actualización y mantenimiento periódico de nuestros sistemas y
          software para garantizar su seguridad y estabilidad. - Monitoreo
          constante de nuestras redes y sistemas para detectar y prevenir
          posibles amenazas de seguridad. - Capacitación regular de nuestros
          empleados y contratistas sobre las mejores prácticas de seguridad de
          la información y su importancia.
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10 }}
        >
          A pesar de que hemos implementado estas medidas de seguridad, es
          importante tener en cuenta que ninguna medida de seguridad en Internet
          es completamente infalible. Es por eso que, en caso de detectar algún
          problema de seguridad o sospecha de una posible violación de la
          seguridad de la información, CURRENCYBIRD actuará de inmediato para
          tomar las medidas necesarias para mitigar los riesgos y notificar a
          los Clientes y autoridades competentes si fuera necesario. Sin
          perjuicio de lo anterior, CURRENCYBIRD no se hace responsable de las
          interceptaciones ilegales o violaciones de nuestros sistemas o bases
          de datos por parte de personas no autorizadas. Tampoco nos hacemos
          responsables por el uso indebido de la información obtenida por estos
          medios.
        </Text>

        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          9. Protección del sitio web
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          En CURRENCYBIRD nos preocupamos por la seguridad de nuestro sitio web
          y la protección de la información de nuestros Clientes. A
          continuación, detallamos las medidas que hemos implementado para
          garantizar la seguridad de nuestra plataforma en línea:
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10 }}
        >
          Encriptación de datos: Todos los datos transmitidos entre el navegador
          del Cliente y nuestro servidor están protegidos mediante una capa de
          encriptación SSL (Secure Sockets Layer). Esto garantiza que la
          información confidencial de nuestros Clientes, como sus datos
          personales y financieros, estén seguros durante la transferencia
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10 }}
        >
          Monitoreo continuo: Nuestro sitio web es monitoreado las 24 horas del
          día, los 7 días de la semana, por sistemas de detección de intrusiones
          y de prevención de ataques. De esta manera, podemos detectar cualquier
          intento de ataque o acceso no autorizado y tomar las medidas
          necesarias para proteger nuestros sistemas y datos. La empresa se
          reserva el derecho de bloquear todo acceso de carácter sospechoso y/o
          malicioso que pueda afectar la seguridad y continuidad del servicio.
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10 }}
        >
          Actualizaciones de seguridad: Mantenemos nuestros sistemas
          actualizados,para garantizar que nuestras medidas de seguridad sean
          efectivas contra las últimas amenazas.
        </Text>

        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10 }}
        >
          Protección contra virus y malware: Utilizamos software de protección
          contra virus y malware para prevenir la infección de nuestros sistemas
          y la propagación de amenazas a nuestros Usuarios
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10 }}
        >
          Monitoreo de Direcciones IP: Realizamos un constante monitoreo de las
          Direcciones IP que ingresan a nuestros sistemas, bloqueado todas
          aquellas que presenten un potencial riesgo para este.
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10 }}
        >
          Contraseñas seguras: Nuestros sistemas requieren que nuestros Clientes
          utilicen contraseñas seguras, con requisitos mínimos de longitud y
          complejidad, y recomendamos cambiar las contraseñas regularmente.
        </Text>
        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          10. Política sobre el uso de Cookies y Web Beacons
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          En CURRENCYBIRD utilizamos cookies en el sitio web para mejorar la
          experiencia del Usuario y ofrecer soluciones personalizadas. Las
          cookies son pequeños archivos que se almacenan en el ordenador o
          dispositivo móvil del Cliente cuando visita nuestro sitio web. Las
          cookies nos permiten reconocer dispositivos, recordar sus
          preferencias, conocer los intereses de nuestros Clientes y su
          comportamiento. Esto nos ayuda a mejorar el sitio web y ofrecer un
          servicio más eficiente y personalizado. Las cookies utilizadas en
          nuestro sitio web se pueden clasificar de la siguiente manera:
        </Text>
        <Text
          variant="bodySmall"
          style={{ color: colors.onSecondary, marginTop: 10 }}
        >
          - Cookies esenciales: Estas cookies son necesarias para el
          funcionamiento del sitio web y le permiten navegar y utilizar sus
          funciones, como acceder a áreas seguras del sitio. - Cookies de
          rendimiento: Estas cookies recopilan información sobre cómo los
          Clientes utilizan nuestro sitio web y nos ayudan a mejorarlo. Por
          ejemplo, nos permiten saber qué páginas son las más populares, qué
          enlaces son más utilizados y si hay problemas técnicos en el sitio.
        </Text>

        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          Al utilizar nuestro sitio web, el Cliente acepta el uso de cookies. La
          instalación, permanencia y existencia de las Cookies en el computador
          de nuestros Clientes depende de su exclusiva voluntad y puede ser
          eliminada del computador cuando el Cliente así lo desee. Se aclara
          expresamente que estas políticas cubren la utilización de Cookies por
          nuestro sitio y no la utilización de Cookies por parte de anunciantes.
          Nosotros no controlamos el uso de Cookies por terceros. En
          CURRENCYBIRD también utilizamos Web Beacon, esto es una imagen
          electrónica, también llamada single-pixel (1 x 1) o pixel
          transparente, que es colocada en código de una página Web. Un Web
          beacon tiene finalidades similares a las Cookies. Adicionalmente un
          Web beacon es utilizado para medir patrones de tráfico de los Clientes
          de una página a otra con el objeto de maximizar como fluye el tráfico
          a través de la Web. El Cliente del sitio 9 Web de CURRENCYBIRD acepta
          que se podrá utilizar un sistema de seguimiento mediante la
          utilización de Web beacons.
        </Text>
        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          11. Política sobre manejo de SPAM
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          En CURRENCYBIRD se define Spam como cualquier correo electrónico no
          solicitado, enviado a un destinatario que no ha solicitado el mensaje
          o no ha dado su consentimiento previo para recibirlo. Es importante
          distinguir que en CURRENCYBIRD tenemos dos categorías de correo: Los
          correos que son indispensables para instruir las transferencias y los
          correos que son de novedades, marketing o de noticias. Los correos que
          son considerados indispensables, son aquellos mediante los cuales nos
          ponemos en contacto con nuestros Clientes para:
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          Informarles acerca del estado en el que se encuentra su operación o
          proceso de registro. - Solicitar información adicional de la
          operación. - Dar cumplimiento a la normativa y políticas internas de
          la empresa en materia de cumplimiento.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          Una vez que se conoce esta diferencia, se informa que cualquier
          Cliente que no desee recibir correos electrónicos no considerados
          indispensables para el servicio, puede solicitar cancelar la
          suscripción a través del link que aparece al final de cada correo
          electrónico. NOTA: Los clientes no podrán solicitar cancelar la
          suscripción de los correos considerados indispensables para la
          correcta ejecución de la transferencia.
        </Text>
        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          12. Información de Contacto
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          Si luego de haber leído esta Política de Privacidad y Protección de
          Datos el Cliente todavía tiene alguna duda o quisiera hacer un
          comentario o reclamo, puede escribir directamente al correo
          contacto@currencybird.cl.
        </Text>

        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          13. Actualización de la Política
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          CURRENCYBIRD podrá modificar en cualquier momento la presente Política
          de Privacidad y Protección de Datos. Si decidimos llevar a cabo dicha
          modificación, notificaremos sobre esta al Cliente mediante el envío de
          un correo electrónico o informando de ello en la página principal u
          otras secciones del sitio. En el caso de que la actualización implique
          un cambio material en la forma que la Información Personal de nuestros
          Clientes es administrada, notificaremos de ello vía correo
          electrónico, para que el Cliente pueda tomar una decisión informada
          respecto si 10 acepta o no que su Información Personal sea utilizada
          de esa nueva forma tras la modificación.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          Si el Cliente no está de acuerdo con estos nuevos términos (para
          cuando exista una actualización de la Política que implique lo
          mencionado en el párrafo anterior) se pondrá término al contrato. En
          estos casos, la información del Cliente será utilizada solo en la
          forma en que originalmente estaba expresada en la Política, antes de
          la actualización. Cabe recordar que el Cliente había aceptado lo
          indicado en la Política antes de cualquier cambio. Esto último sólo
          será válido cuando la modificación en el tratamiento de la Información
          Privada se haya debido a una decisión de la empresa y no al
          cumplimiento de alguna ley que nos resulte aplicable y que nos obligue
          a compartir determinada información de nuestros clientes
        </Text>
        <TouchableOpacity
          onPress={() =>
            Linking.openURL('https://www.currencybird.cl/privacypolicy')
          }
        >
          <Text
            style={{
              color: colors.onSecondary,
              textDecorationLine: 'underline',
              textAlign: 'center',
              marginTop: 20,
              marginBottom: 20,
            }}
          >
            {t('privacyLink')}
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  content: {
    flexGrow: 1,
  },
  heading: {
    fontSize: 18,
    marginTop: 20,
    marginBottom: 10,
  },
});

export default Policy;
