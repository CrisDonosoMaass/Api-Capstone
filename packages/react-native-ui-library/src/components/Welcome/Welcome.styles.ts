import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 'auto',
    paddingBottom: 50,
  },
  titleContainer: {
    height: '25%',
  },
  title: {
    textAlign: 'center',
    color: '#ffffff',
    paddingHorizontal: 40,
  },
  title2: {
    textAlign: 'center',
    color: '#ffffff',
    marginTop: 30,
  },
  subtitle2: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 20,
  },
  modalTitleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  subTitle: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 20,
    paddingHorizontal: 60,
  },
  image: {
    width: '100%',
    height: '35%',
    marginBottom: 20,
    marginTop: 30,
  },
  fullWidthButton: {
    marginVertical: 5,
    height: 54,
    width: '85%',
  },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginLeft: '10%',
    marginRight: '10%',
    minHeight: 90,
  },
  footerText: {
    color: '#ffffff',
    marginTop: 10,
    marginBottom: 30,
    textAlign: 'center',
  },
  hyperlink: {
    color: '#ffffff',
    textDecorationLine: 'underline',
  },
  logo: {
    width: 152,
    height: 34,
    marginTop: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 16,
    marginRight: 16,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F2F6F8',
    borderRadius: 14,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
    height: '100%',
  },
});
