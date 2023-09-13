import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import CustomButton from '../../components/CustomButton/CustonButton';

import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const EditUser = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem('@user_data');
        const data = jsonValue != null ? JSON.parse(jsonValue) : null;
        setName(data.name);
        setPassword(data.password);
        setEmail(data.email);
        setPhone(data.phone);
      } catch (e) {
        console.log(e);
      }
    };

    fetchUserData();
  }, []);

  const handleSaveChanges = async () => {
    try {
      const userData = {
        name: name,
        password: password,
        email: email,
        phone: phone,
      };
      await AsyncStorage.setItem('@user_data', JSON.stringify(userData));
      Alert.alert('Dados salvos com sucesso!', '', [
        {
          text: 'OK',
          onPress: () => navigation.navigate('Home'),
        },
      ]);
    } catch (e) {
      console.log(e);
    }
  };

  const handleDeleteAccount = async () => {
    Alert.alert(
      'Deletar Conta',
      'Você tem certeza que deseja deletar sua conta?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: async () => {
            await AsyncStorage.removeItem('@user_data');
            navigation.navigate('Login');
          },
        },
      ],
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Alterações Cadastrais</Text>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          placeholder="Digite seu nome"
          style={styles.inputField}
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput
          placeholder="Digite sua senha"
          style={styles.inputField}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
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
          text="Salvar Alterações"
          color="#1289D5"
          onPress={handleSaveChanges}
          style={styles.button}
        />
        <CustomButton
          text="Cancelar"
          color="#E65A6E"
          onPress={() => navigation.goBack()}
          style={styles.button}
        />
      </View>
      <TouchableOpacity onPress={handleDeleteAccount}>
        <Text style={styles.deleteAccountLink}>Deletar Conta</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },

  title: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    fontWeight: 'bold',
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
    marginTop: 20,
  },
  button: {
    flex: 1,
    marginHorizontal: 10, // Ajuste este valor para aumentar ou diminuir o espaço entre os botões
  },
  deleteAccountLink: {
    color: '#E65A6E',
    fontSize: 17,
    textAlign: 'center',
    marginTop: 20,
    textDecorationLine: 'underline',
  },
});

export default EditUser;
