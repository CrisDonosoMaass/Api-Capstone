import React, { createContext, useContext, useState } from 'react';
import { Text } from 'react-native-paper';
import { IntlProvider } from 'use-intl';

export type Locale = keyof TranslationsProviderProps['messages'];

interface TranslationsProviderProps {
  messages: {
    es: Messages;
    en: Messages;
  };
  initialLocale?: Locale;
  onChangeLocal?: ((locale: Locale) => void) | undefined;
}

const TranslationsContext = createContext<{
  locale: Locale;
  switchLocale: () => void;
}>({
  locale: 'es',
  switchLocale: () => null,
});

export function TranslationsProvider({
  messages,
  children,
  initialLocale = 'es',
  onChangeLocal,
}: React.PropsWithChildren<TranslationsProviderProps>) {
  const [locale, setLocale] = useState<Locale>(initialLocale);

  const switchLocale = () => {
    const nextLocale = locale === 'es' ? 'en' : 'es';
    setLocale(nextLocale);
    onChangeLocal?.(nextLocale);
  };

  return (
    <IntlProvider
      messages={messages[locale]}
      locale={locale}
      defaultTranslationValues={{
        important: (children) => (
          <Text allowFontScaling={false} variant="headlineMedium">
            {children}
          </Text>
        ),
        br: () => <br />,
      }}
      formats={{
        dateTime: {
          numeric: {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
          },
          fullNumeric: {
            dateStyle: 'long',
            timeStyle: 'medium',
          },
        },
        number: {
          integer: {
            roundingMode: 'ceil',
          },
        },
      }}
    >
      <TranslationsContext.Provider value={{ locale, switchLocale }}>
        {children}
      </TranslationsContext.Provider>
    </IntlProvider>
  );
}

export function useLocale() {
  return useContext(TranslationsContext);
}
