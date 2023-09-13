import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Logo from '../../components/Logo/Logo';
import CustomButton from '../../components/CustomButton/CustonButton';

import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState(''); // Alterado de login para email
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Por favor, preencha todos os campos');
    } else {
      try {
        const jsonValue = await AsyncStorage.getItem('@user_data');
        const userData = jsonValue != null ? JSON.parse(jsonValue) : null;
  
        if (userData && userData.email === email && userData.password === password) {
          setPassword(''); // Limpa o campo da senha
          navigation.navigate('Home');
        } else {
          Alert.alert('Email ou senha incorretos');
        }
      } catch (e) {
        console.log(e);
      }
    }
  };
  

  const handleCreateUser = () => {
    navigation.navigate('CreateUser');
  };

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            placeholder="Digite seu email cadastrado" // Alterado de e-mail para email
            style={styles.inputField}
            value={email} // Alterado de login para email
            onChangeText={text => setEmail(text)} // Alterado de setLogin para setEmail
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha"
            style={styles.inputField}
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>Esqueci Minha Senha</Text>
        </TouchableOpacity>
        <CustomButton text="Entrar" color="#1289D5" onPress={handleLogin} />
      </View>
      <View style={styles.createAccountContainer}>
        <Text style={styles.label}>Ainda não tem conta?</Text>
        <TouchableOpacity onPress={handleCreateUser}>
          <Text style={styles.createAccountLink}>Criar Conta</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
  },
  label: {
    fontWeight: '600',
    fontSize: 17,
    color: '#363B45',
  },
  inputField: {
    borderWidth: 2,
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  input: {
    width: '100%',
  },
  forgotPasswordContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginBottom: 15,
  },
  forgotPassword: {
    color: '#1289D5',
  },
  createAccountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Adicione uma margem superior para separar os links
  },
  createAccountLink: {
    color: '#1289D5',
    fontSize: 17,
    marginVertical: 10,
    fontWeight: 'bold',
  },
});

export default Login;
