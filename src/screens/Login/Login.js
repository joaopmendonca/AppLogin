import React from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Logo from '../../components/Logo/Logo';

const Login = () => {
  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <Text style={styles.label}>Login</Text>
          <TextInput placeholder="Digite seu login" style={styles.inputField} />
        </View>
        <View style={styles.input}>
          <Text style={styles.label}>Senha</Text>
          <TextInput placeholder="Digite sua senha" style={styles.inputField} />
        </View>
        <TouchableOpacity style={styles.forgotPasswordContainer}>
          <Text style={styles.forgotPassword}>Esqueci Minha Senha</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.createAccountContainer}>
        <Text style={styles.label}>Ainda não tem conta?</Text>
        <TouchableOpacity>
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
  loginButton: {
    paddingVertical: 8,
    backgroundColor: '#1289D5',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginBottom: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
  createAccountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountLink: {
    color: '#1289D5',
    fontSize: 17,
  },
});

export default Login;
