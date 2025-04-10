// --- Views ---

// LogIn
export { LoginComponent } from './components/Login';
export type { LoginValues } from './components/Login';

// Welcome
export { Welcome } from './components/Welcome';

// Home
export { DashboardTopBar } from './components/Home';
export type { TopBarProps } from './components/Home';

export { default as SegmentedProgressBar } from './components/Common/SegmentedProgressBar';
export { default as ActivityIndicator } from './components/ActivityIndicator';
export { default as Button } from './components/Common/Button';

export { BottomTabsModal } from './components/ModalHome';
export { GoBackDialog } from './components/Common';

// Containers
export {
  GeneralLayout,
  PrivateFormLayout,
  PrivateLayout,
  ScrollFlatList,
} from './containers';

// --- Themeing ---
export { PrivateTheme, PublicTheme } from './Theme';
export { fontFamilies } from './constants/FontConfig';
export { default as Colors } from './constants/Colors';

// --- Other ---
export { esMessages, enMessages } from './messages';

export { TranslationsProvider, useLocale } from './utils/translations';
export type { Locale } from './utils/translations';
