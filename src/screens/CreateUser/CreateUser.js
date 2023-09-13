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

const CreateUser = () => {
  const navigation = useNavigation();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleCreateAccount = () => {
    if (!login || !password || !confirmPassword || !email || !phone) {
      Alert.alert('Por favor, preencha todos os campos');
    } else if (password !== confirmPassword) {
      Alert.alert('As senhas não coincidem');
    } else {
      // Aqui você pode chamar a API para criar a conta
      navigation.navigate('Home');
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
        <Text style={styles.label}>Login</Text>
        <TextInput
          placeholder="Digite seu login"
          style={styles.inputField}
          value={login}
          onChangeText={setLogin}
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
          placeholder="Digite seu email"
          style={styles.inputField}
          value={email}
          onChangeText={setEmail}
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
