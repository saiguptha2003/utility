import React, {useState} from 'react';
import { Text, TextInput, Pressable, View, ToastAndroid } from 'react-native';
import styles from './styles';

const Signin = ({navigation}) => {
  const [userExists, setUserExists] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const checkUser = () => {
    const data = {
      email: email,
      password: password,
    };
    return fetch('http://10.1.89.155:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => {
        if (response.ok) {
          setUserExists(true);
        } else {
          setUserExists(false);
        }
      })
      .catch(error => {
        console.error(error);
        setUserExists(false);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Sign in</Text>
      <TextInput
        style={styles.InputText}
        placeholder="Email"
        value={email}
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        style={styles.InputText}
        placeholder="Password"
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Pressable
        style={styles.button}
        onPress={() => {
          checkUser().then(() => {
            if (userExists) {
              ToastAndroid.show('Login Success', ToastAndroid.SHORT);
              navigation.navigate('Dashboard');
            } else {
              ToastAndroid.show('Login Failed', ToastAndroid.SHORT);
              // Handle failed login here (e.g., show error message)
            }
          });
        }}>
        <Text style={styles.text}>Signin</Text>
      </Pressable>
    </View>
  );
};

export default Signin;
