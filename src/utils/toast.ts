import { Platform, StatusBar } from 'react-native';
import Toast from 'react-native-root-toast';
import type { ToastOptions } from 'react-native-root-toast';

const defaultToastOptions = {
  duration: 10000,
  position: Toast.positions.TOP,
  backgroundColor: '#5cb85c',
  opacity: 0.9,
  paddingHorizontal: 20,
  shadow: false,
  containerStyle: { marginTop: StatusBar.currentHeight },
};

const CustomToast = {
  success(message: string, options?: ToastOptions) {
    if (Platform.OS === 'web') {
      // alert(message);
      return;
    }
    return Toast.show(message, {
      ...defaultToastOptions,
      ...options,
    });
  },
  error(message: string, options?: ToastOptions) {
    if (Platform.OS === 'web') {
      // alert(message);
      return;
    }
    return Toast.show(message, {
      ...defaultToastOptions,
      backgroundColor: 'rgb(253, 237, 237)',
      textColor: 'rgb(95, 33, 32)',
      shadow: false,
      ...options,
    });
  },
};

export default CustomToast;
