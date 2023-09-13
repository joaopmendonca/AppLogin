import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Logo from '../../components/Logo/Logo';
import CustomButton from '../../components/CustomButton/CustonButton';

import configurationIcon from './../../images/icon-configuration.png';

import {useNavigation} from '@react-navigation/native';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [userData, setUserData] = useState(null);

  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate('Login');
  };

  const handleEdit = () => {
    navigation.navigate('EditUser');
  };

  const fetchUserData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@user_data');
      const data = jsonValue != null ? JSON.parse(jsonValue) : null;
      setUserData(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchUserData);

    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.logoContainer}>
        <Logo />
        <View style={styles.createAccountContainer}>
          <Text style={styles.label}>Olá, seja bem-vindo!</Text>
        </View>
        {userData && (
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardHeaderText}>{userData.name}</Text>
            </View>
            <View style={styles.cardBody}>
              <Text style={styles.cardText}>Email: {userData.email}</Text>
              <Text style={styles.cardText}>Telefone: {userData.phone}</Text>
              <TouchableOpacity onPress={handleEdit}>
                <Text style={styles.editUserData}>Editar Dados</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
      <CustomButton text="Sair" color="#E65A6E" onPress={handleLogout} />
      <TouchableOpacity style={styles.configurationButton}>
        <Image source={configurationIcon} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    justifyContent: 'space-between', // Alterado para 'space-between' para separar o botão de saída e o botão de configuração
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'column', // Alterado para 'column' para alinhar os itens verticalmente
  },

  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  label: {
    fontWeight: '600',
    fontSize: 17,
    color: '#363B45',
  },
  createAccountContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  createAccountLink: {
    color: '#1289D5',
    fontSize: 17,
  },
  configurationButton: {
    bottom: 20, // Ajuste esta propriedade para controlar a posição vertical
    alignSelf: 'flex-end', // Alinha o botão de configuração à direita
    marginRight: 20,
  },
  editUserData: {
    flexDirection: 'row',
    textAlign: 'center',
    color: '#1289D5',
    marginTop: 15,
    fontSize: 17,
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    width: '100%',
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardHeader: {
    backgroundColor: '#1289D5',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  cardHeaderText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cardBody: {
    padding: 20,
  },
  cardText: {
    fontSize: 16,
  },
});

export default Home;
