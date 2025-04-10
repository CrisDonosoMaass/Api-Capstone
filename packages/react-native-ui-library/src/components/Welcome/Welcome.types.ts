export type WelcomeProps = {
  LogInLink: (props: { children: React.ReactNode }) => React.ReactNode;
  TermsAndConditionsLink: (props: {
    children: React.ReactNode;
  }) => React.ReactNode;
  PolicyPrivacyLink: (props: { children: React.ReactNode }) => React.ReactNode;
  children?: React.ReactNode;
};
export type WelcomeViewProps = {
  LogInLink: (props: { children: React.ReactNode }) => React.ReactNode;
  TermsAndConditionsLink: (props: {
    children: React.ReactNode;
  }) => React.ReactNode;
  PolicyPrivacyLink: (props: { children: React.ReactNode }) => React.ReactNode;
  children?: React.ReactNode;
};
