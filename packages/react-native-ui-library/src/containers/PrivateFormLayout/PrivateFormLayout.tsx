import { KeyboardAvoidingView, View } from 'react-native';
import { useTheme } from 'react-native-paper';

import Header from '../../components/Common/PrivateHeader';
import SegmentedProgressBar from '../../components/Common/SegmentedProgressBar';
import GeneralLayout from '../GeneralLayout';
import { styles } from './PrivateFormLayout.styles';

export interface PrivateFormLayoutProps {
  title: string;
  onBackPress?: () => void;
  GoBackLink?: (props: { children: React.ReactNode }) => React.ReactNode;
  activeStep?: number;
  steps?: number;
  children: React.ReactNode;
  progressBar?: boolean;
}

export default function FormLayout({
  children,
  steps,
  activeStep,
  progressBar = true,
  ...other
}: PrivateFormLayoutProps) {
  const theme = useTheme();
  const { colors } = theme;

  return (
    <GeneralLayout>
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Header
          {...other}
          style={{
            backgroundColor: colors.onSecondary,
            height: 60,
            width: '100%',
          }}
          colorHeader={colors.secondary}
        />
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
        >
          <View style={{ width: '100%', flex: 1 }}>{children}</View>
          {progressBar && steps && activeStep && (
            <View
              style={{
                marginBottom: 20,
                width: '100%',
                backgroundColor: colors.onSecondary,
                alignItems: 'center',
              }}
            >
              <SegmentedProgressBar
                style={{
                  width: 250,
                  backgroundColor: colors.onSecondary,
                }}
                activeBarNumber={activeStep}
                barNumber={steps}
              />
            </View>
          )}
        </View>
      </KeyboardAvoidingView>
    </GeneralLayout>
  );
}
