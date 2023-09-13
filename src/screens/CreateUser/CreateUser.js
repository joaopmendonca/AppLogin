// Arquivo de criação de usuário

import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import Logo from '../../components/Logo/Logo';
import CustomButton from '../../components/CustomButton/CustonButton';

import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateUser = () => {
  const navigation = useNavigation();
  const [name, setName] = useState(''); // Alterado de login para name
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState(''); // Alterado de login para email
  const [phone, setPhone] = useState('');

  const handleCreateAccount = async () => {
    if (!name || !password || !confirmPassword || !email || !phone) { // Alterado de login para name e email
      Alert.alert('Por favor, preencha todos os campos');
    } else if (password !== confirmPassword) {
      Alert.alert('As senhas não coincidem');
    } else {
      // Aqui você pode chamar a API para criar a conta
      try {
        const userData = {
          name: name, // Alterado de login para name
          password: password,
          email: email, // Alterado de login para email
          phone: phone,
        };
        await AsyncStorage.setItem('@user_data', JSON.stringify(userData));
        console.log(userData); // Imprime os dados do usuário no console
      } catch (e) {
        // saving error
        console.log(e);
      }
      navigation.navigate('Login', {userName: name}); // Alterado de email para name
    }
  };

  const handleCancel = () => {
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.logoContainer}>
        <Logo />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          placeholder="Digite seu nome" // Alterado de login para nome
          style={styles.inputField}
          value={name} // Alterado de login para name
          onChangeText={setName} // Alterado de setLogin para setName
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          style={styles.inputField}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Text style={styles.label}>Confirmar Senha</Text>
        <TextInput
          placeholder="Confirme sua senha"
          style={styles.inputField}
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          placeholder="Digite seu email" // Alterado de login para email
          style={styles.inputField}
          value={email} // Alterado de login para email
          onChangeText={setEmail} // Alterado de setLogin para setEmail
        />
        <Text style={styles.label}>Telefone</Text>
        <TextInput
          placeholder="Digite seu telefone"
          style={styles.inputField}
          value={phone}
          onChangeText={setPhone}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          text="Criar Conta"
          color="#1289D5"
          onPress={handleCreateAccount}
          style={styles.button}
        />
        <CustomButton
          text="Cancelar"
          color="#E65A6E"
          onPress={handleCancel}
          style={styles.button}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  button: {
    flex: 1,
    marginHorizontal: 10, // Ajuste este valor para aumentar ou diminuir o espaço entre os botões
  },
});

export default CreateUser;
