import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-paper';

const Terms = () => {
  const theme = useTheme();
  const { colors } = theme;

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
          allowFontScaling={false}
          variant="headlineMedium"
          style={{ color: colors.onSecondary }}
        >
          CONTRATO TÉRMINOS Y CONDICIONES PARA LA TRANSFERENCIA DE DIVISAS AL
          EXTERIOR
        </Text>
        <Text
          variant="headlineMedium"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          1. ANTECEDENTES
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          1.1. CURRENCY BIRD SpA (“CURRENCYBIRD”) es una sociedad por acciones
          constituida por escritura pública de fecha 15 de mayo de 2015,
          otorgada en el Registro de Empresas y Sociedades.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          1.2. Como parte de su objeto social, CURRENCYBIRD, entre otras
          materias, administra y opera directamente, o a través de terceros,
          plataformas informáticas, software, redes y conexiones a través de las
          cuales ofrece a sus Usuarios la posibilidad de instruir transferencia
          de divisas al exterior (“Transferencia”), como también la compra y
          venta de monedas extranjeras (“Divisas”).
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          1.3. El cliente es una persona natural o jurídica que requiere
          transferir divisas al exterior (“Usuario” o “el cliente”).
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          1.4. El cliente declara conocer y aceptar que CURRENCYBIRD no es una
          entidad regulada por la Superintendencia de Bancos e Instituciones
          Financieras ni la Superintendencia de Valores y Seguros, y que el
          servicio que presta no es ni debe ser considerado como de carácter
          bancario o de intermediación de bienes y servicios.
        </Text>
        <Text
          variant="headlineMedium"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          2. OBJETO DEL CONTRATO
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          2.1. El presente contrato (“Contrato”) tiene por objeto definir y
          establecer los términos y condiciones que regularan las relaciones
          entre CURRENCYBIRD y el cliente en relación con las instrucciones de
          Trasferencia impartidas por el Usuario a CURRENCYBIRD.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          2.2. Para estos efectos, el Usuario declara conocer y aceptar que
          CURRENCYBIRD, a través de su plataforma web, actuará como un
          mandatario del Usuario para efectos de la Transferencia. Así, en cada
          instrucción de Transferencia el Usuario mandata a CURRENCYBIRD para
          transferir el monto y a quien el Usuario determine, en los términos
          establecidos en el presente Contrato y conforme a las disposiciones de
          los artículos 2.116 y siguientes del Código Civil.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          2.3. Conforme a lo anterior, el Usuario confiere en este acto un
          mandato especial a CURRENCYBIRD, para que, actuando a nombre propio
          por cuenta del Usuario o a nombre del Usuario, a través de sus
          representantes, durante toda la vigencia del presente Contrato, y de
          acuerdo con las instrucciones específicas de éste, convierta a la
          moneda extranjera seleccionada los fondos depositados a CURRENCYBIRD
          en pesos moneda nacional (CLP) y los transfiera de acuerdo a las
          instrucciones específicas que le imparta para tales efectos.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          2.4. El mandato especial indicado en la sección precedente se
          entenderá que el Usuario lo otorga en cada oportunidad que solicite
          una Transferencia a CURRENCYBIRD.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          2.5. Para que el Usuario pueda instruir la Transferencia deberá
          previamente registrarse como Usuario en la página web de CURRENCYBIRD
          (www.currencybird.cl), completando la información mínima exigida,
          conforme al procedimiento que se indica en la cláusula 3 siguiente. En
          su calidad de Usuario, éste podrá, entre otros, acceder a su cuenta en
          CURRENCYBIRD, instruir Transferencias, modificar sus datos de
          identificación, revisar el historial de transferencias y a las
          facturas relacionadas a la compra y venta de divisas.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          2.6. Para los efectos del registro como Usuario en la página web de
          CURRENCYBIRD el Usuario declara en este acto, y cada vez que instruye
          la Transferencia, que está instruyendo dicha Transferencia por si
          mismo, y no actuando en representación o por cuenta de un tercero.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          2.7. En relación con la información sobre la identificación del
          Usuario, el Usuario declara a CURRENCYBIRD que todos los antecedentes
          entregados son correctos, reales y fidedignos, y comunicará a
          CURRENCYBIRD cualquier cambio que produzca en ellos en el tiempo.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          2.8. Asimismo, el Usuario declara y reconoce que utilizará la
          plataforma de transferencias de CURRENCYBIRD sólo para efectuar
          Transferencias de origen y finalidad lícita.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          2.9. Una vez completados los antecedentes en la referida página web,
          el Usuario deberá crear una clave única de identificación para el
          acceso a su cuenta en la plataforma de CURRENCYBIRD (“Clave Usuario”).
        </Text>

        <Text
          variant="headlineMedium"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          3. REGISTRO EN LA PÁGINA WEB DE CURRENCYBIRD
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          3.1. Para que el Usuario esté en condiciones de instruir la
          Transferencia deberá acceder a la página web de CURRENCYBIRD,
          www.currencybird.cl.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          3.2. En dicha página deberá acceder a la pestaña/botón REGISTRO o
          REGÍSTRATE y completar el formulario de creación de cuenta
          (“Formulario de Creación de Cuenta”) con los antecedentes obligatorios
          y fidedignos indicados en el mismo.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          3.3. Completado el Formulario de Creación de Cuenta, el Usuario
          recibirá un correo electrónico de CURRENCYBIRD para validar la
          creación de dicha cuenta así como los antecedentes entregados. Para
          validar la creación de la cuenta, el Usuario deberá pinchar el enlace
          enviado o copiarlo en una nueva página en el navegador y continuar con
          el proceso de registro.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          3.4. Una vez que el Usuario valide la creación de la cuenta en
          CURRENCYBIRD, podrá acceder a la página web www.currencybird.cl
          identificándose con su email y Clave de Usuario.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          3.5. El Usuario declara conocer y aceptar que el uso de la Clave de
          Usuario obtenida en la plataforma de CURRENCYBIRD es de única y
          exclusiva responsabilidad del Usuario, obligándose por tanto a usarla
          con la debida confidencialidad y a no entregarla a terceros. Para
          estos efectos, CURRENCYBIRD siempre asumirá que las instrucciones para
          la transferencia de divisas al exterior realizadas usando la Clave de
          Usuario corresponde a una instrucción válida y legítima impartida por
          dicho Usuario.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          3.6. En su calidad de titular de la Clave de Usuario, el Usuario podrá
          en cualquier momento solicitar el cambio o recuperación de la misma a
          través del sitio web de CURRENCYBIRD. Para estos efectos, el Usuario
          deberá seguir el procedimiento de cambio o recuperación de la Clave de
          Usuario indicado en la página web www.currencybird.cl.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          3.7. En caso de pérdida, sustracción o robo de la Clave de Usuario así
          como cualquier riesgo de acceso a la misma por un tercero, el Usuario
          estará obligado a cambiarla través del sitio web de CURRENCYBIRD.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          3.8. CURRENCYBIRD estará facultado para, en cualquier momento y sin
          aviso previo, suspender o revocar la Clave de Usuario y a denegarle el
          acceso a su cuenta en la página web, sea por motivos de mal uso del
          sitio web de Servicio, por existir sospechas fundadas de indebida
          utilización, compromiso de la seguridad tecnológica, o por otras
          circunstancias que involucren un riesgo o impedimento para la debida
          ejecución de las instrucciones de Transferencia. Para estos efectos,
          se entenderá, por ejemplo, que se ha hecho una indebida utilización
          del sitio web de CURRENCYBIRD o de la Clave de Usuario, cuando el
          Usuario ilegítimamente desconozca una Transferencia; o cuando instruya
          Transferencias para efectuar operaciones prohibidas por la ley,
          especialmente la ley número 19.913, tales como de lavado de dinero,
          narcotráfico, entre otras circunstancias análogas o de similar
          naturaleza.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          3.9. El Usuario acepta y se hace responsable de los daños y perjuicios
          provenientes de uso que éste realice del sitio web de CURRENCYBIRD
          para fines contrarios a las leyes, las buenas costumbres, el orden
          público y la legislación vigente, liberando de cualquier
          responsabilidad a CURRENCYBIRD, a sus directores, empleados y
          representantes.
        </Text>

        <Text
          variant="headlineMedium"
          style={{ color: colors.onSecondary, marginTop: 30, marginBottom: 20 }}
        >
          4. PROCEDIMIENTO PARA LA TRANSFERENCIA DE DIVISAS AL EXTERIOR
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.1. Para realizar una Transferencia, el Usuario declara conocer y
          aceptar el procedimiento que se indica a continuación. Sin perjuicio
          de lo anterior, el Usuario declara conocer y aceptar que CURRENCYBIRD
          podrá en cualquier momento, y sin expresión de causa, modificar el
          referido procedimiento de Transferencia. Para estos efectos,
          CURRENCYBIRD comunicará oportunamente el cambio de procedimiento de
          Transferencias y se requerirá la aprobación de la modificación al
          Usuario al solicitar cualquier nueva Transferencia.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.2. Una vez que el Usuario acceda con su email y Clave de Usuario a
          su cuenta en la página web de CURRENCYBIRD, el Usuario deberá ingresar
          en el botón Nueva Transferencia.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.3. El Usuario deberá crear un beneficiario de la Transferencia
          (“Beneficiario”) o bien seleccionar uno previamente creado. Para crear
          un Beneficiario, el Usuario deberá completar la información requerida
          para tales efectos, la que en todos los casos debe ser real y
          fidedigna.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.4. El Usuario declara conocer y aceptar que es de su exclusiva
          responsabilidad contar y proveer a CURRENCYBIRD de los antecedentes
          completos y correctos del Beneficiario de la Transferencia, liberando
          a CURRENCYBIRD de cualquier responsabilidad derivada de Transferencias
          realizadas a terceros con los datos proporcionados por el Usuario.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.5. Seleccionado el Beneficiario de la Transferencia, el Usuario
          deberá completar el monto a transferir (“Monto a Transferir”).
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.6. El Monto a Transferir podrá estar expresado en pesos moneda
          nacional (“Pesos”) o en Divisas.
        </Text>
        <Text
          variant="headlineMedium"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          4.7. Si el Usuario selecciona la opción de completar el Monto a
          Transferir en Divisas, deberá seguir el procedimiento que se indica a
          continuación:
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.7.1. Una vez completada la cantidad de Divisas que el Usuario desea
          transferir a un Beneficiario, CURRENCYBIRD le indicará el monto
          referencial en Pesos (“Monto Esperado”) que deberá transferir a la
          cuenta corriente bancaria informada por CURRENCYBIRD para poder
          completar la Transferencia en la Divisa seleccionada. Para estos
          efectos, el Monto Esperado se calculará considerando el tipo de cambio
          esperado (“Tipo de Cambio Esperado”) ofrecido por CURRENCYBIRD al
          Usuario para que éste compre las Divisas.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.7.2. En relación con el Tipo de Cambio Esperado, el Usuario declara
          conocer y aceptar que CURRENCYBIRD informará dicho precio en su página
          web al momento de instruir la Transferencia y que corresponderá al
          tipo de cambio ofrecido por bancos comerciales y/o intermediarios de
          valores más un diferencial, que dependerá del monto a transferir y
          otras variables.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.7.3. Considerando las variaciones que puede sufrir el Tipo de Cambio
          Esperado en el tiempo que media entre la instrucción de la
          Transferencia y la transferencia electrónica a la cuenta corriente
          bancaria de CURRENCYBIRD, el Tipo de Cambio Esperado se incrementará
          en un 3% (tres por ciento), pasando a denominarse Provisión de Tipo de
          Cambio. La Provisión de Tipo de Cambio corresponderá al tipo de cambio
          máximo hasta el cual el Usuario está dispuesto a comprar las Divisas
          para realizar una Transferencia.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.7.4. Conforme a lo anterior, al momento de solicitar una
          Transferencia CURRENCYBIRD informará al Usuario el Monto Esperado, el
          Tipo de Cambio Esperado, la Provisión de Tipo de Cambio, y el Monto a
          Transferir. Este último corresponderá al a Provisión de Tipo de Cambio
          multiplicado por la cantidad de Divisas.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.7.5. El Usuario declara conocer y aceptar que CURRENCYBIRD no
          procederá a realizar la Transferencia instruida por el Usuario sino
          hasta acreditar que se encuentran disponibles en su cuenta corriente
          una suma igual al Monto a Transferir.Si transcurridos tres (3) días
          corridos no se han recibido los fondos en la cuenta bancaria de
          CURRENCYBIRD, el Usuario autoriza a CURRENCYBIRD a cancelar la
          instrucción de transferencia. Si el Usuario desea realizar esa
          transferencia, deberá ingresar una nueva instrucción.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.7.6. Para estos efectos, se entenderá que se encuentra disponible el
          Monto a Transferir en la cuenta corriente de CURRENCYBIRD, en la
          medida que los fondos se hubieren recibido desde la cuenta informada
          por el Usuario en el Formulario de Creación de Cuenta u otra cuenta
          bancaria de titularidad del Usuario y que el monto depositado es igual
          al Monto a Transferir.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.7.7. El Usuario declara conocer y aceptar que CURRENCYBIRD no
          procederá a la venta de Divisas al Usuario, y por ende no realizará la
          Transferencia, en la medida que el tipo de cambio al cual pueda
          acceder sea superior a la Provisión de Tipo de Cambio.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.7.8. Una vez confirmado por CURRENCYBIRD el depósito del Monto a
          Transferir y la venta al Usuario de las Divisas instruidas transferir,
          CURRENCYBIRD informará al Usuario el tipo de cambio final al cual
          adquirió las Divisas (“Tipo de Cambio Final”) y el correspondiente
          monto en pesos necesarios para ello (“Costo Total CLP”).
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.7.9. Luego, y en la medida que el Monto a Transferir sea superior al
          Costo Total CLP, CURRENCYBIRD realizará la Transferencia de Divisas en
          los plazos y horarios informados en la página web de CURRENCYBIRD
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.7.10. Si el Monto a Transferir resultare ser superior al Costo Total
          CLP, CURRENCYBIRD procederá a devolver el exceso al Usuario,
          depositándolo en la cuenta bancaria desde la cual transfirió
          inicialmente los fondos.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.8. Si el Usuario selecciona la opción de completar el Monto a
          Transferir en Pesos, deberá seguir el procedimiento que se indica a
          continuación:
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.8.1. Una vez indicada la cantidad de Pesos que el Usuario desea
          transferir en Divisas a un Beneficiario, CURRENCYBIRD le indicará el
          monto referencial en Divisas (“Monto a Recibir”) que se podrá
          transferir a dicho Beneficiario considerando el tipo de cambio
          referencial (“Tipo de Cambio Esperado”). El Usuario deberá transferir
          los Pesos indicados para transferir el Monto a Recibir a la cuenta
          corriente bancaria informada por CURRENCYBIRD para poder completar la
          Transferencia.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.8.2. En relación con el Tipo de Cambio Esperado, el Usuario declara
          conocer y aceptar que CURRENCYBIRD informará dicho precio en su página
          web al momento de instruir la Transferencia y que corresponderá al
          tipo de cambio ofrecido por bancos comerciales y/o intermediarios de
          valores más un diferencial, que dependerá del monto a transferir y
          otras variables.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.8.3. Conforme a lo anterior, al momento de solicitar una
          Transferencia CURRENCYBIRD informará al Usuario el Monto a Recibir, el
          Tipo de Cambio Esperado y el Monto a Transferir. Si transcurridos tres
          (3) días corridos sin haberse recibido los fondos en la cuenta
          bancaria de CURRENCYBIRD, el Usuario autoriza a CURRENCYBIRD a
          cancelar la instrucción de transferencia. Si el Usuario desea realizar
          esa transferencia, deberá ingresar una nueva instrucción.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.8.4. El Usuario declara conocer y aceptar que CURRENCYBIRD no
          procederá a realizar la Transferencia instruida por el Usuario sino
          hasta acreditar que se encuentran disponibles en su cuenta corriente
          los Pesos ingresados como Monto a Transferir.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.8.5. Para estos efectos, se entenderá que se encuentra disponible el
          Monto a Transferir en la cuenta corriente de CURRENCYBIRD, en la
          medida que los fondos se hubieren recibido desde la cuenta informada
          por el Usuario en el Formulario de Creación de Cuenta u otra cuenta
          bancaria de titularidad del Usuario y que el monto depositado es igual
          al Monto a Transferir.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.8.6. Una vez confirmado por CURRENCYBIRD el depósito del Monto a
          Transferir y la venta al Usuario de las Divisas instruidas transferir,
          CURRENCYBIRD informará al Usuario el tipo de cambio final al cual
          adquirió las Divisas (“Tipo de Cambio Final”) y el correspondiente
          monto en Divisas disponibles para transferir (“Monto a Recibir”).
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.9. El Usuario declara conocer y aceptar que CURRENCYBIRD está
          facultado para rechazar cualquier solicitud de Transferencia cuando
          los datos proporcionados en la solicitud de Transferencia sean
          insuficientes o incorrectos, siendo de responsabilidad exclusiva del
          Usuario comprobar su exactitud antes de instruir la Transferencia.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.10. En el evento que la Transferencia sea rechazada por la entidad
          que recibe las Divisas a nombre del Beneficiario, CURRENCYBIRD estará
          facultada para aplicarle al Usuario a título de multa la suma
          equivalente a 60 USD (Dólares Americanos), que serán automáticamente
          descontadas de los Pesos depositados por el Usuario en la cuenta
          corriente bancaria de CURRENCYBIRD.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          4.11. Una vez descontada la multa indicada precedentemente, el Usuario
          deberá indicar a CURRENCYBIRD si con el saldo en Pesos desea instruir
          una nueva Transferencia o bien que se le deposite en la cuenta
          corriente bancaria desde la cual los transfirió inicialmente.
        </Text>

        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          5. MODIFICACIONES AL CONTRATO
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          5.1. CURRENCYBIRD podrá en cualquier momento modificar y/o actualizar
          el presente Contrato. CURRENCYBIRD deberá notificar el contenido de
          dicha propuesta de modificación al Usuario, mediante comunicación
          dirigida a éste en la manera descrita en la cláusula 9 siguiente.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          5.2. Para hacer efectiva la modificación, el Usuario deberá manifestar
          su conformidad y acuerdo con la misma, conforme se indique en el sitio
          web de CURRENCYBIRD.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          5.3. En caso de que el Usuario no esté de acuerdo con las
          modificaciones propuestas por CURRENCYBIRD, éste podrá poner término
          al presente Contrato sin ulterior responsabilidad, conforme a lo
          indicado en la cláusula 10 siguiente.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          5.4. Sin perjuicio de lo anterior, si el Usuario declara conocer y
          aceptar que para instruir una nueva Transferencia una vez notificada
          la modificación del Contrato, requerirá necesariamente aceptar o
          rechazar dichas modificaciones. En el evento que el Usuario acepte las
          modificaciones, se encontrará habilitado para poder seguir con el
          proceso de Transferencia.
        </Text>

        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          6. DISPONIBILIDAD DE LA PÁGINA WEB
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          6.1. CURRENCYBIRD hará todos los esfuerzos para que la página web
          www.currencybird.cl esté disponible las 24 horas del día los 7 días de
          la semana, sin perjuicio de los horarios habilitados para hacer
          Transferencias, los cuales serán informados a través de la referida
          página web. Dada complejidad de los sistemas y redes utilizados por
          CURRENCYBIRD es imposible garantizar un funcionamiento libre de fallas
          o interrupciones, sin perjuicio de lo cual, CURRENCYBIRD se
          compromete, en caso de fallas, a realizar todos los esfuerzos
          necesarios para restablecer la continuidad del servicio en el menor
          tiempo posible.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          6.2. Conforme a lo anterior, CURRENCYBIRD y el Usuario acuerdan
          expresamente que CURRENCYBIRD podrá por motivos de fallas, mantención
          de los sistemas, problemas técnicos, corte operacional y, en general,
          por cualquier caso fortuito o fuerza mayor, modificar, suspender y/o
          suprimir, temporal o definitivamente las Transferencias, liberando en
          este acto el Usuario a CURRENCYBIRD de toda responsabilidad en que
          pudiere incurrir como consecuencia de dichas situaciones.
        </Text>

        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          7. RESPONSABILIDAD
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          7.1. El Usuario declara conocer y aceptar que CURRENCYBIRD no será
          responsable por la imposibilidad de materializar la Transferencia o
          por los daños que resulten de pérdidas de datos, daño emergente, lucro
          cesante, u otra pérdida o perjuicio originados por negligencia o
          infracción del Usuario a los términos de este Contrato, o cuando ello
          sea consecuencia de circunstancias imprevistas más allá del control de
          CURRENCYBIRD, o de hechos constitutivos de caso fortuito o fuerza
          mayor, tales como cortes eléctricos, indisponibilidad de redes,
          catástrofes ambientales, atentados terroristas, u otros
          acontecimientos de similar naturaleza.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          7.2. Por su parte, CURRENCYBIRD tampoco será responsable por la
          imposibilidad de materializar la Transferencia debido a errores o
          inexactitudes en los datos de la misma o bien la imposibilidad del
          Beneficiario, o de la entidad a través de la cual recibe la
          Transferencia, de recibirla.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          7.3. En caso de fallas del sistema o bien de que la entidad receptora
          de la Transferencia no acepte recibir el monto transferido,
          CURRENCYBIRD comunicará dicha situación al Usuario y se procederá con
          la reposición de los fondos deducidos los costos asociados a dicho
          proceso.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          7.4. Asimismo, el Usuario declara conocer y aceptar que CURRENCYBIRD
          y/o las entidades a través de las cuales CURRENCYBIRD materialice las
          Transferencias de Divisas podrán requerir información adicional en
          relación con el Usuario, con la Transferencia o con el Beneficiario de
          la misma, obligándose el Usuario a proporcionarla a CURRENCYBIRD en
          tiempo y forma. CURRENCYBIRD no será responsable por la no
          materialización de la Transferencia en la medida que el Usuario no
          entregue la información solicitada.
        </Text>

        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          8. CONFIDENCIALIDAD DE LA INFORMACIÓN
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          8.1. CURRENCYBIRD tratará los datos de carácter personal que sean
          proporcionados por el Usuario con la debida confidencialidad y de
          acuerdo con las normas vigentes, particularmente la Ley N° 19.628
          sobre Protección a la Vida Privada.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          8.2. De acuerdo a la legislación vigente, el Usuario queda informado y
          acepta que, al registrarse, los datos personales que entregue durante
          el proceso de registro en la página web de CURRENCYBIRD, así como
          aquellos que se entreguen, obtengan y/o generen durante la vigencia
          del Contrato (datos tales como, número de RUT, dirección de correo
          electrónico, número de teléfono celular, entre otros) serán
          incorporados en una base de datos automatizada de propiedad de
          CURRENCYBIRD. El Usuario expresamente autoriza y acepta que dichos
          datos personales podrán ser utilizados por CURRENCYBIRD, o
          transferidos por ésta a empresas relacionadas y a sus prestadores de
          servicio, dando siempre cumplimiento a lo dispuesto en la Ley N°
          19.628 sobre Protección a la Vida Privada, en la medida en que fuese
          necesario o conveniente para agregar nuevos atributos o beneficios a
          los Usuarios o mejorar la calidad de la prestación de servicios y
          productos de CURRENCYBIRD y sus filiales. En ese sentido, el Usuario
          autoriza expresamente a CURRENCY BIRD para (a) compartir su
          información con su proveedor de servicios de divisas y / o pagos y (b)
          celebrar acuerdos de reparto de ingresos con su proveedor de servicios
          de pagos y / o Foreign employerPosition (“FX”), para los efectos de
          llevar a cabo sus servicios de transferencia de divisas al exterior y
          la compra y venta de monedas extranjeras.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          8.3. El Usuario registrado podrá solicitar a CURRENCYBIRD, la
          rectificación, modificación, eliminación y/o cancelación de sus datos
          cuando lo estime conveniente, en conformidad a la Ley sobre Protección
          de la Vida Privada. Lo anterior es sin perjuicio del cumplimiento de
          las obligaciones legales y normativas de CURRENCYBIRD en relación con
          la información que debe conservar de sus Usuarios.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          8.4. En Caso que el Usuario quisiera solicitar la rectificación,
          modificación, eliminación y/o cancelación de sus datos, podrá
          solicitarlo al siguiente correo electrónico registro@currencybird.cl.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          8.5. El Usuario autoriza expresamente a CURRENCYBIRD a entregar a las
          entidades a través de las cuales materialice las Transferencias, así
          como a cualquier autoridad gubernamental o judicial chilena o de los
          países a los cuales se realizan dichas Transferencias, previa
          solicitud presentada por dichas entidades, cualquier información
          relacionada con el Usuario o las Transferencias que instruya.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          8.6. En relación con lo anterior, el Usuario declara conocer y aceptar
          que, conforme a lo establecido en la Ley N° 19.913, CURRENCYBIRD tiene
          la obligación de informar a la Unidad de Análisis Financiero (“UAF”)
          las operaciones que cumplan con las condiciones para calificarlas como
          sospechosas y a entregar la información del Usuario, de las
          Transferencias y de los Beneficiarios de acuerdo con los
          requerimientos específicos que dicha entidad formule.
        </Text>

        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          9. COMUNICACIONES
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          9.1. El Usuario declara conocer y aceptar que CURRENCYBIRD podrá
          entregar al Usuario cualquier aviso, información o comunicación por
          cualquiera de los siguientes medios: (i) mediante avisos desplegados
          en la página web de CURRENCYBIRD; (ii) mediante el envío de un correo
          electrónico a la dirección de correo registrada por el Usuario en el
          Formulario de Creación de Cuenta, o cualquiera de sus modificaciones;
          (iii) mediante el envío de un mensaje de texto al teléfono celular
          registrado por el Usuario en el Formulario de Creación de Cuenta, o
          cualquiera de sus modificaciones; (iv) mediante el envío de una carta
          dirigida a la dirección registrada por el Usuario en el Formulario de
          Creación de Cuenta, o cualquiera de sus modificaciones; y (v) mediante
          otros medios que razonablemente determine CURRENCYBIRD y que sean
          debidamente informados al Usuario.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          9.2. Por su parte, el Usuario podrá comunicarse con CURRENCYBIRD a
          través de chats en el sitio web www.currencybird.cl, correo
          electrónico o vía telefónica, conforme a los datos informados por la
          referida página web.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          9.3. Cualquier comunicación enviada por CURRENCYBIRD al Usuario o por
          el Usuario a CURRENCYBIRD, se entenderá recibida por el receptor a las
          72 horas después de enviada, si se trata de una carta, o el mismo día
          del envío, si se trata de un correo electrónico o mensaje de texto.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          9.4. El Usuario se obliga a comunicar a CURRENCYBIRD de cualquier
          cambio que se produzca en los antecedentes solicitados en el
          Formulario de Creación de Cuenta, liberando a CURRENCYBIRD de
          cualquier responsabilidad derivada de la no entrega oportuna de los
          nuevos datos de identificación o de contacto.
        </Text>

        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          10. VIGENCIA DEL CONTRATO
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          10.1. CURRENCYBIRD y el Usuario acuerdan que el presente Contrato
          tendrá una duración indefinida, sin perjuicio que cualquier de las
          partes podrá ponerle término, sin expresión de causa y sin generar
          responsabilidad alguna, mediante una comunicación escrita vía correo
          electrónico dirigida a la otra parte en tal sentido.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          10.2. Lo anterior es sin perjuicio de la responsabilidad de
          CURRENCYBIRD o del Usuario del cumplimiento de las obligaciones
          pendientes al momento de solicitar la terminación del Contrato.
        </Text>

        <Text
          variant="headlineSmall"
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          11. CESIÓN DEL CONTRATO
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          11.1. El Usuario declara conocer y aceptar que no podrá ceder total o
          parcialmente el presente Contrato y/o cualquier de los derechos u
          obligaciones derivados del mismo, sin previa autorización escrita de
          CURRENCYBIRD.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          11.2. El Usuario autoriza expresamente a CURRENCYBIRD para ceder,
          total o parcialmente el presente Contrato, y los derechos u
          obligaciones derivados del mismo, a su matriz o cualquiera de sus
          filiales o empresas relacionadas. La cesión a cualquier tercero
          distinto de los indicados precedentemente, requerirán de la
          autorización previa y escrita del Usuario.
        </Text>
        <Text
          variant="headlineSmall"
          allowFontScaling={false}
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          12. ACUERDO ÚNICO Y FORMALIZACIÓN POR ESCRITO
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          12.1. El presente Contrato prefiere y reemplaza cualquier acuerdo
          previo, escrito o verbal, entre el Usuario y CURRENCYBIRD con respecto
          a las materias sujetas a este Contrato y se considerará para todos los
          efectos como el único acuerdo vigente entre ambos.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          12.2. Para efectos de dar cumplimiento a la Ley N° 19.496 sobre
          Protección de los Derechos de los Consumidores, una vez aceptados por
          el Usuario, por medios electrónicos, el presente Contrato,
          CURRENCYBIRD se obliga a enviar al Usuario una confirmación escrita
          del hecho de haber quedado perfeccionado el Contrato. La referida
          confirmación podrá ser enviada por vía electrónica o por cualquier
          otro medio que CURRENCYBIRD estime adecuado, y deberá contener una
          copia íntegra, clara y legible del Contrato.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          12.3. El Usuario podrá imprimir el presente Contrato a fin de
          conservar una copia escrita del mismo en sus archivos, renunciando al
          principio de que la existencia de los términos y condiciones aquí
          contenidas se demuestre mediante un documento escrito.
        </Text>

        <Text
          variant="headlineSmall"
          allowFontScaling={false}
          style={{ ...styles.heading, color: colors.onSecondary }}
        >
          13. DOMICILIO Y RESOLUCIÓN DE CONFLICTOS
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          13.1. Se deja expresa constancia que, para todos los efectos del
          presente contrato, las partes fijan domicilio especial en la comuna y
          ciudad de Santiago.
        </Text>
        <Text
          allowFontScaling={false}
          variant="bodySmall"
          style={{ color: colors.onSecondary }}
        >
          13.2. Toda controversia referida a la interpretación, ejecución o
          validez de este Contrato será resuelta en única instancia por un
          árbitro arbitrador, nombrado de común acuerdo por los interesados,
          quien conocerá la cuestión suscitada sin forma de juicio. El fallo de
          dicho árbitro será sin ulterior recurso, sustanciarán el proceso sin
          forma de juicio, su sentencia quedará ejecutoriada por el hecho de
          dictarse ante un ministro de fe y contra ella no procederá recurso
          alguno. A falta de acuerdo entre los interesados, el árbitro será
          designado por la Justicia Ordinaria.
        </Text>
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
  // Agregar más estilos según sea necesario para el resto del contenido
});

export default Terms;
