const INTERNAL_SERVER_ERROR = 'Server error';

const messages = {
  api: {
    TRPCProvider: {
      UNAUTHORIZED: 'Sign in required',
      NETWORK_ERROR: 'Network error',
      INTERNAL_SERVER_ERROR,
    },
  },
  auth: {
    login: {
      UNAUTHORIZED: 'Unauthorized',
      INTERNAL_SERVER_ERROR,
      SERVER_ERROR_TRY_AGAIN:
        'Server error: Please try to log in at another time',
    },
    recoverPassword: {
      dialog:
        'Are you sure you want to quit? You will need to restart the recovery process.',
      resetPasswordSuccess: 'Password updated',
    },
  },
  common: {
    closeMessage:
      'Are you sure you want to log out? To continue the registration process at a later time you will need to log in with your credentials.',
    identificationTypes: {
      dni: 'DNI',
      passport: 'Passport',
    },
  },
  error: {
    ErrorBoundary: {
      title: 'Something went wrong',
      retry: 'Retry',
      NETWORK_ERROR: 'Check your network connection',
      INTERNAL_SERVER_ERROR,
      UNKNOWN_ERROR:
        'Unknown error, contact us to resolve it as soon as possible',
    },
  },
  layout: {
    DrawerLayout: {
      editProfile: 'Edit profile',
      files: 'Files',
      subscriptions: 'Subscriptions',
      changePassword: 'Change password',
      logout: 'Sign out',
      bankAccounts: 'My bank accounts',
    },
    TabLayout: {
      home: 'Home',
      contacts: 'Contacts',
      send: 'Send',
      receive: 'Receive',
      more: 'More',
    },
  },
  profile: {
    EditProfileScreen: {
      updateProfileSucceeded: 'Your profile information has been updated',
    },
    ChangePasswordScreen: {
      changePasswordSucceeded: 'Change password succeeded',
    },
    ChangeSubscriptions: {
      updateSubscriptions: 'Subscriptions successfully updated',
    },
  },
  contact: {
    NewRecipientScreen: {
      title: 'New recipient',
      createRecipientSucceeded: 'Recipient created successfully',
      quitMessage:
        'Are you sure you want to quit? You can resume creating this contact from the "Contacts" tab.',
    },
    NewSenderScreen: {
      title: 'New sender',
      createSenderSucceeded: 'Sender created successfully',
      quitMessage:
        'Are you sure you want to quit? You can resume creating this contact from the "Contacts" tab.',
    },
    CreateSenderLayout: {
      title: 'New sender',
      createSenderSucceeded: 'Sender created successfully',
    },
  },
  transfer: {
    CreateTransferLayout: {
      title: 'New transfer',
      createTransferSucceeded: 'Transfer successfully created',
    },
    CreateIncomingTransferLayout: {
      title: 'New incoming transfer',
      createTransferSucceeded: 'Transfer successfully created',
    },
    Incomings: {
      uploadSuccess: 'File uploaded successfully',
      uploadFailed: 'Error uploadig file',
    },
    NewClientBankAccountScreen: {
      newTitle: 'New Bank Account',
      completeTitle: 'Complete Bank Account',
      createClientBankAccountSucceeded: 'Bank account created successfully',
      updatedClientBankAccountSucceeded: 'Bank account created successfully',
      quitMessage: 'Are you sure you want to quit?',
    },
  },
  notifications: {
    success: 'Notification successfully processed',
    senderUpdatedSuccessfully: 'Sender updated successfully',
    recipientUpdatedSuccessfully: 'Recipient updated successfully',
    hasAvailableRewards: {
      title: 'You have money available for donate',
      description:
        'You have money available to donate. Click here to choose the beneficiary foundation.',
    },
    companyPendingInfo: {
      title: 'We have temporarily paused your company account!',
      description: 'We need some documents and/or additional information.',
    },
    companyPendingReview: {
      title: 'Company pending validation!',
      description:
        'We are currently validating and verifying your information, but you can already create your recipients.',
    },
    isLastTermsAndConditions: {
      title: 'New terms and conditions',
      description: 'We need you to accept the new terms and conditions here.',
    },
    userPendingInfo: {
      title: 'We have temporarily paused your account!',
      description: 'We need some documents and/or additional information.',
    },
    userPendingReview: {
      title: 'Pending validation!',
      description:
        'We are currently validating and verifying your information, but you can already create your recipients.',
    },
    updateOneYear: {
      title: 'Update your personal information',
      description:
        'It has been over a year since you last updated your information. Please verify and update your data.',
    },
    idAlmostExpired: {
      title: 'Your ID is about to expire!',
      description:
        'You must have an updated ID in order to continue using Currencybird',
    },
    idExpired: {
      title: 'Your ID has expired!',
      description:
        "Even if your ID card has expired, still you can keep transferring funds with Currency Bird. In any case, if you already have a valid ID, don't forget to attach it!",
      successMessage: 'ID updated',
    },
    userMissingDocuments: {
      title: '¡Missing documents!',
      description:
        'Attention! To comply with the regulations of Law 19,913, we kindly request you to upload a document that supports the origin of the funds you have transferred with CurrencyBird. For example, it could be any of the following documents: the last three salary slips, the latest income tax return, or any other document that supports the origin of the funds you have transferred with CurrencyBird.',
    },
    companyMissingDocuments: {
      title: '¡Missing documents!',
      description:
        'Attention! To comply with the regulations of Law 19,913, we kindly request you to upload your Tax Folder to support the origin of the funds you have transferred with CurrencyBird.',
    },
    missingDeclaration: {
      title: 'Missing Declaration of funds origin (DOF)',
      description:
        'Remember that you must submit your declaration of origin of funds for payments made with CurrencyBird',
    },
    updateLocation: {
      title: 'Update recipient location information',
    },
    updateContactInformation: {
      title: 'Update recipient contact information',
    },
    updateSenderName: {
      title: 'Update sender information',
    },
    userIncompleOrIllegibleId: {
      title: 'Your ID is not visible clearly!',
      description:
        'Please upload a new photo where your ID is legible and current. Attached here.',
    },
    userExpiredIdChilean: {
      title: 'Your ID card has expired.',
      description:
        'Please, if you have a valid ID card or Chilean passport, attach it here.',
    },
    userExpiredIdForeign: {
      title: 'Your ID card has expired.',
      description:
        'Please attach your valid ID or passport here. If you attach your passport, we will also need proof of a valid permanence request, issued by the Chilean Immigration Department.',
    },
    userIncompleteAddress: {
      title: 'Your address appears to be incomplete.',
      description:
        'Please check your address to ensure it includes the following: street name, number, city, and country. In case your entered address is correct but lacks some of the mentioned data, please send an email to cumplimiento@currencybird.cl explaining the situation.',
    },
    userHighRiskEconomicActivityDd: {
      title: 'We have sent you an email.',
      description:
        'Please respond to the email from cumplimiento@currencybird.cl as soon as possible.',
    },
    userPepDd: {
      title: 'We have sent you an email.',
      description:
        'Please respond to the email from cumplimiento@currencybird.cl as soon as possible.',
    },
    userPepDeclarationConfirmation: {
      title: 'We have sent you an email.',
      description:
        'Please respond to the email from cumplimiento@currencybird.cl as soon as possible.',
    },
    userTransactionAmountDd: {
      title: '¡Missing documents!',
      description:
        'Attention! To comply with the regulations of Law 19,913, we kindly request you to upload a document that supports the origin of the funds you have transferred with CurrencyBird. For example, it could be any of the following documents: the last three salary slips, the latest income tax return, or any other document that supports the origin of the funds you have transferred with CurrencyBird.',
    },
    userIncompleteEmployerName: {
      title: 'You must update information.',
      description:
        'Please update the following information in edit profile: Full name of your employer. Make sure you enter the full name.',
    },
    userEapConfirmation: {
      title: 'We need you to confirm information.',
      description:
        'Do you work for any institution or organization dependent on the State of Chile? For example: Public universities, ministries, municipalities, etc. Please check YES or NO.',
    },
    userPartnerRequest: {
      title: 'We have sent you an email.',
      description:
        'Please respond to the email from cumplimiento@currencybird.cl as soon as possible.',
    },
    userOther: {
      title: 'We have sent you an email.',
      description:
        'Please respond to the email from cumplimiento@currencybird.cl as soon as possible.',
    },
    companyIncompleteAddress: {
      title: 'Your address appears to be incomplete.',
      description:
        'Please check your address to ensure it includes the following: street name, number, city, and country. In case your entered address is correct but lacks some of the mentioned data, please send an email to cumplimiento@currencybird.cl explaining the situation.',
    },
    companyHighRiskEconomicDd: {
      title: 'We have sent you an email.',
      description:
        'Please respond to the email from cumplimiento@currencybird.cl as soon as possible.',
    },
    companyPepPartnerDd: {
      title: 'We have sent you an email.',
      description:
        'Please respond to the email from cumplimiento@currencybird.cl as soon as possible.',
    },
    companyTransactionAmountDd: {
      title: '¡Missing documents!',
      description:
        'Attention! To comply with the regulations of Law 19,913, we kindly request you to upload your Tax Folder to support the origin of the funds you have transferred with CurrencyBird.',
    },
    companyMissingConstitutionDeed: {
      title: 'Attention!',
      description:
        " We need you to attach the company's articles of incorporation. Please attach the document here.",
    },
    companyMissingCreatorPowers: {
      title: 'Attention!',
      description:
        'We need you to attach the powers of attorney to operate with CurrencyBird.. Please attach the document here.',
    },
    companyMissingValidityCertificate: {
      title: 'Attention!',
      description:
        ' We need you to attach the Certificate of Good Standing of your company. Please attach it here',
    },
    companyLegalRepsNeedToRegisterAsPn: {
      title: 'Attention!',
      description:
        "According to your company's statutes, the administration of your company is joint, so it is necessary for another administrator to create a Natural Person profile in CurrencyBird. Once this is done, please send an email to cumplimiento@currencybird.cl informing that the profile has been created.",
    },
    companyPartnerRequest: {
      title: 'We have sent you an email.',
      description:
        'Please respond to the email from cumplimiento@currencybird.cl as soon as possible.',
    },
    companyInsufficientPowersForCbOperations: {
      title: 'We have sent you an email.',
      description:
        'Please respond to the email from cumplimiento@currencybird.cl as soon as possible.',
    },
    companyDeclaredBfShareholdersDoNotMatchDeeds: {
      title: 'Attention!',
      description:
        'The Final Beneficiaries declared in the registry do not match. Please attach the current shareholders certificate here. You can obtain it from the SII or through a private instrument signed by a legal representative.',
    },
    companyMissingTerms: {
      title: 'Attention!',
      description:
        'We are almost ready to activate your company profile. There is only one small step left: we need the signature of the Terms and Conditions of a co-administrator. This signature can be made as soon as the co-administrator completes his registration as a natural person.',
    },
    companyOther: {
      title: 'We have sent you an email.',
      description:
        'Please respond to the email from cumplimiento@currencybird.cl as soon as possible.',
    },
  },
} satisfies AppMessages;

export default messages;
