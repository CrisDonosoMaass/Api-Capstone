const INTERNAL_SERVER_ERROR = 'Error de servidor';

const messages = {
  api: {
    TRPCProvider: {
      UNAUTHORIZED: 'Requiere iniciar sesión',
      NETWORK_ERROR: 'Error de conexión',
      INTERNAL_SERVER_ERROR,
    },
  },
  auth: {
    login: {
      UNAUTHORIZED: 'Correo electrónico o contraseña no válidos',
      INTERNAL_SERVER_ERROR,
      SERVER_ERROR_TRY_AGAIN:
        'Error de servidor: intenta iniciar sesión en otro momento',
    },
    recoverPassword: {
      dialog:
        '¿Seguro que quieres salir? Deberás volver a iniciar el proceso de recuperación.',
      resetPasswordSuccess: 'Contraseña actualizada',
    },
  },
  common: {
    closeMessage: '¿Seguro que deseas cerrar sesión?',
    identificationTypes: {
      dni: 'DNI',
      passport: 'Pasaporte',
    },
  },
  error: {
    ErrorBoundary: {
      title: 'Algo salió mal',
      retry: 'Reintentar',
      NETWORK_ERROR: 'Comprueba tu conexion de internet',
      INTERNAL_SERVER_ERROR,
      UNKNOWN_ERROR:
        'Error desconocido, contactanos para solucionarlo a la brevedad',
    },
  },
  layout: {
    DrawerLayout: {
      editProfile: 'Editar perfil',
      files: 'Archivos',
      subscriptions: 'Suscripción correos',
      changePassword: 'Cambiar contraseña',
      logout: 'Cerrar sesión',
      bankAccounts: 'Mis cuentas bancarias',
    },
    TabLayout: {
      home: 'Inicio',
      contacts: 'Contactos',
      send: 'Enviar',
      receive: 'Recibir',
      more: 'Más',
    },
  },
  profile: {
    EditProfileScreen: {
      updateProfileSucceeded: 'Tu información de perfil ha sido actualizada',
    },
    ChangePasswordScreen: {
      changePasswordSucceeded: 'Cambio de contraseña exitoso',
    },
    ChangeSubscriptions: {
      updateSubscriptions: 'Suscripciones actualizadas correctamente',
    },
  },
  contact: {
    NewRecipientScreen: {
      title: 'Nuevo destinatario',
      createRecipientSucceeded: 'Destinatario creado exitosamente',
      quitMessage:
        '¿Seguro que quieres salir? Puedes retomar la creación de este contacto desde la pestaña "Contactos".',
    },
    NewSenderScreen: {
      title: 'Nuevo remitente',
      createSenderSucceeded: 'Remitente creado exitosamente',
      quitMessage:
        '¿Seguro que quieres salir? Puedes retomar la creación de este contacto desde la pestaña "Contactos".',
    },
    CreateSenderLayout: {
      title: 'Nuevo remitente',
      createSenderSucceeded: 'Remitente creado exitosamente',
    },
  },
  transfer: {
    CreateTransferLayout: {
      title: 'Nuevo envío',
      createTransferSucceeded: 'Transferencia creada exitosamente',
    },
    CreateIncomingTransferLayout: {
      title: 'Nuevo recibo',
      createTransferSucceeded: 'Transferencia creada exitosamente',
    },
    Incomings: {
      uploadSuccess: 'Archivo subido exitosamente',
      uploadFailed: 'Error al subir el archivo',
    },
    NewClientBankAccountScreen: {
      newTitle: 'Nueva cuenta bancaria',
      completeTitle: 'Completar cuenta bancaria',
      createClientBankAccountSucceeded: 'Cuenta bancaria creada exitosamente',
      updatedClientBankAccountSucceeded:
        'Cuenta bancaria actualizada exitosamente',
      quitMessage: '¿Seguro que quieres salir?',
    },
  },
  notifications: {
    success: 'Notificación resuelta con éxito',
    senderUpdatedSuccessfully: 'Remitente actualizado exitosamente',
    recipientUpdatedSuccessfully: 'Destinatario actualizado exitosamente',
    hasAvailableRewards: {
      title: '¡Tienes premios disponibles!',
      description:
        'Tienes premios disponibles para donar. Ingresa aquí para elegir la fundación beneficiaria.',
    },
    companyPendingInfo: {
      title: '¡Pausamos tu cuenta empresa!',
      description: 'Necesitamos algunos documentos y/o información adicional',
    },
    companyPendingReview: {
      title: '¡Empresa pendiente de validación!',
      description:
        'En estos momentos estamos validando y verificando tu información, pero ya puedes crear tus destinatarios',
    },
    isLastTermsAndConditions: {
      title: 'Nuevos términos y condiciones',
      description:
        'Necesitamos que aceptes los nuevos términos y condiciones aquí.',
    },
    userPendingInfo: {
      title: '¡Pausamos tu cuenta!',
      description: 'Necesitamos algunos documentos y/o información adicional',
    },
    userPendingReview: {
      title: '¡Pendiente de validación!',
      description:
        'En estos momentos estamos validando y verificando tu información, pero ya puedes crear tus destinatarios',
    },
    updateOneYear: {
      title: 'Actualiza tu información personal',
      description:
        'Hace más de un año que no actualizas tu información, por favor verifica y actualiza tus datos',
    },
    idAlmostExpired: {
      title: '¡Tu cédula está próxima a vencer!',
      description:
        'Adjunta tu cédula de identidad, debe estar vigente para seguir operando con nosotros',
    },
    idExpired: {
      title: '¡Tu cédula ha vencido!',
      description:
        'Aunque tu cédula de identidad esté vencida, puedes seguir realizando transferencias con CurrencyBird. De todos modos, si ya cuentas con una cédula vigente, ¡no olvides adjuntarla!',
      successMessage: 'Cédula actualizada exitosamente',
    },
    userMissingDocuments: {
      title: '¡Documentos faltantes!',
      description:
        '¡Atención! Para cumplir con las regulaciones de la Ley 19.913, necesitamos que nos adjuntes algún documento que respalde el origen de los fondos que has transferido con CurrencyBird.   Como ejemplo puede ser alguno de los siguientes documentos: 3 últimas liquidaciones de sueldo, última declaración de renta o cualquier otro documento que respalde el origen de los fondos que has transferido con CurrencyBird.',
    },
    companyMissingDocuments: {
      title: '¡Documentos faltantes!',
      description:
        '¡Atención! Para cumplir con las regulaciones de la Ley 19.913, necesitamos que nos adjuntes tu Carpeta tributaria para  así respaldar  el origen de los fondos que has transferido con CurrencyBird.',
    },
    missingDeclaration: {
      title: 'Declaración de origen de fondos (DOF) pendiente',
      description:
        'Recuerda que debes entregar tu declaración de origen de fondos por los pagos realizados con CurrencyBird',
    },
    updateLocation: {
      title: 'Actualización datos de localidad del destinatario',
    },
    updateContactInformation: {
      title: 'Actualización de los datos del destinatario',
    },
    updateSenderName: {
      title: 'Actualización datos del remitente',
    },
    userIncompleOrIllegibleId: {
      title: '¡Tu cédula no se ve claramente!',
      description:
        ' Por favor, sube una nueva foto donde tu cédula sea legible y esté vigente. Adjunta aquí.',
    },
    userExpiredIdChilean: {
      title: 'Tu cédula de identidad ha vencido.',
      description:
        'Por favor, si tienes una cédula vigente o pasaporte chileno vigente, adjuntalo aquí.',
    },
    userExpiredIdForeign: {
      title: 'Tu cédula de identidad ha vencido.',
      description:
        'Por favor, adjunta aquí tu cédula vigente o tu pasaporte vigente. Si adjuntas tu pasaporte también necesitaremos el comprobante de solicitud de permanencia vigente, emitido por el Departamento de Extranjería de Chile',
    },
    userIncompleteAddress: {
      title: 'Tu dirección parece estar incompleta.',
      description:
        'Por favor revisa tu dirección para que incluya lo siguiente: nombre de calle, número, ciudad y país. En caso que tu dirección ingresada sea la correcta pero falta algunos de datos mencionados, por favor envía un correo a cumplimiento@currencybird.cl explicando el caso.',
    },
    userHighRiskEconomicActivityDd: {
      title: 'Te hemos enviado un correo.',
      description:
        'Por favor, responde el correo de parte de cumplimiento@currencybird.cl a la brevedad.',
    },
    userPepDd: {
      title: 'Te hemos enviado un correo.',
      description:
        'Por favor, responde el correo de parte de cumplimiento@currencybird.cl a la brevedad.',
    },
    userPepDeclarationConfirmation: {
      title: 'Te hemos enviado un correo.',
      description:
        'Por favor, responde el correo de parte de cumplimiento@currencybird.cl a la brevedad.',
    },
    userTransactionAmountDd: {
      title: '¡Documentos faltantes!',
      description:
        '¡Atención! Para cumplir con las regulaciones de la Ley 19.913, necesitamos que nos adjuntes algún documento que respalde el origen de los fondos que has transferido con CurrencyBird.   Como ejemplo puede ser alguno de los siguientes documentos: 3 últimas liquidaciones de sueldo, última declaración de renta o cualquier otro documento que respalde el origen de los fondos que has transferido con CurrencyBird.',
    },
    userIncompleteEmployerName: {
      title: 'Debes actualizar información.',
      description:
        'Por favor, actualiza la siguiente información en editar perfil: Nombre completo de tu empleador. Asegúrate de ingresar el nombre completo.',
    },
    userEapConfirmation: {
      title: 'Necesitamos que nos confirmes información.',
      description:
        '¿Trabajas para alguna institución u organismo dependiente del Estado de Chile? Por ejemplo: Universidades públicas, ministerios, municipalidades, etc. Por favor, marcar SÍ o NO.',
    },
    userPartnerRequest: {
      title: 'Te hemos enviado un correo.',
      description:
        'Por favor, responde el correo de parte de cumplimiento@currencybird.cl a la brevedad.',
    },
    userOther: {
      title: 'Te hemos enviado un correo.',
      description:
        'Por favor, responde el correo de parte de cumplimiento@currencybird.cl a la brevedad.',
    },
    companyIncompleteAddress: {
      title: 'Tu dirección parece estar incompleta.',
      description:
        'Por favor revisa tu dirección para que incluya lo siguiente: nombre de calle, número, ciudad y país. En caso que tu dirección ingresada sea la correcta pero falta algunos de datos mencionados, por favor envía un correo a cumplimiento@currencybird.cl explicando el caso.',
    },
    companyHighRiskEconomicDd: {
      title: 'Te hemos enviado un correo.',
      description:
        'Por favor, responde el correo de parte de cumplimiento@currencybird.cl a la brevedad.',
    },
    companyPepPartnerDd: {
      title: 'Te hemos enviado un correo.',
      description:
        'Por favor, responde el correo de parte de cumplimiento@currencybird.cl a la brevedad.',
    },
    companyTransactionAmountDd: {
      title: '¡Documentos faltantes!',
      description:
        '¡Atención! Para cumplir con las regulaciones de la Ley 19.913, necesitamos que nos adjuntes tu Carpeta tributaria para  así respaldar  el origen de los fondos que has transferido con CurrencyBird.',
    },
    companyMissingConstitutionDeed: {
      title: '¡Atención!',
      description:
        'Necesitamos que adjuntes la escritura de constitución de la empresa. Por favor, adjunta aquí el documento.',
    },
    companyMissingCreatorPowers: {
      title: '¡Atención!',
      description:
        'Necesitamos que adjuntes los poderes para operar con CurrencyBird. Por favor, adjunta aquí el documento.',
    },
    companyMissingValidityCertificate: {
      title: '¡Atención!',
      description:
        'Necesitamos que adjuntes el certificado de vigencia de tu empresa. Por favor, adjúntalo aquí.',
    },
    companyLegalRepsNeedToRegisterAsPn: {
      title: '¡Atención!',
      description:
        'De acuerdo a los estatutos de tu empresa, la administración de tu empresa es conjunta, por lo que es necesario que otro administrador cree un perfil de Persona Natural en CurrencyBird. Una vez hecho esto, por favor enviar un correo a cumplimiento@currencybird.cl informando que el perfil fue creado.',
    },
    companyPartnerRequest: {
      title: 'Te hemos enviado un correo.',
      description:
        'Por favor, responde el correo de parte de cumplimiento@currencybird.cl a la brevedad.',
    },
    companyInsufficientPowersForCbOperations: {
      title: 'Te hemos enviado un correo.',
      description:
        'Por favor, responde el correo de parte de cumplimiento@currencybird.cl a la brevedad.',
    },
    companyDeclaredBfShareholdersDoNotMatchDeeds: {
      title: '¡Atención!',
      description:
        'Los Beneficiarios finales declarados en el registro no coinciden. Por favor, adjunta aquí el certificado de accionistas vigentes. Puedes obtenerlo del SII o mediante un instrumento privado firmado por representante legal. ',
    },
    companyMissingTerms: {
      title: '¡Atención!',
      description:
        'Estamos casi listos para activar su perfil de empresa. Solo falta un pequeño paso: necesitamos la firma de los Términos y Condiciones de un coadministrador. Esta firma podrá realizarse tan pronto como el coadministrador complete su registro como persona natural.',
    },
    companyOther: {
      title: 'Te hemos enviado un correo.',
      description:
        'Por favor, responde el correo de parte de cumplimiento@currencybird.cl a la brevedad.',
    },
  },
};

export default messages;
