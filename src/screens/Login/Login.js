import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../components/Logo/Logo';
import CustomButton from '../../components/CustomButton/CustonButton';

const Login = () => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = () => {
    // Lógica de login aqui
  };

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text style={styles.label}>Login</Text>
          <TextInput
            placeholder="Digite seu login"
            style={styles.inputField}
            value={login}
            onChangeText={text => setLogin(text)}
          />
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            placeholder="Digite sua senha"
            style={styles.inputField}
            secureTextEntry
            value={senha}
            onChangeText={text => setSenha(text)}
          />
        </View>
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>Esqueci Minha Senha</Text>
        </TouchableOpacity>
        <CustomButton text="Entrar" color="#1289D5" onPress={handleLogin} />
      </View>
      <View style={styles.createAccountContainer}>
        <Text style={styles.label}>Ainda não tem conta?</Text>
        <TouchableOpacity
          onPress={() => {
            /* Adicione sua lógica de criar conta aqui */
          }}>
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
