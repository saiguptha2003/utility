import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    textAlign: 'center',

    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    fontColor: 'black',
  },
  Header: {
    marginTop: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 34,
    fontWeight: 'bold',
    color: '#000000',
    padding: 10,
  },

  InputText: {
    borderColor: '#000000',
    borderWidth: 2,
    borderRadius: 4,
    width: '90%',
    padding: 20,
    paddingStart: 30,
    margin: 10,
    paddingVertical: 12,
  },
  button: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    width: '90%',
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  walletbutton: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    width: '90%',
    elevation: 3,
    height: 50,
    color: 'white',
    textDecorationColor: 'white',
    backgroundColor: 'black',
  },
});
export default styles;
