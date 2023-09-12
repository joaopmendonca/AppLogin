import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import Logo from '../../components/Logo/Logo';
import CustomButton from '../../components/CustomButton/CustonButton';

import configurationIcon from './../../images/icon-configuration.png';

const Home = () => {
  return (
    <ScrollView contentContainerStyle={styles.pageContainer}>
      <View style={styles.logoContainer}>
        <Logo />
        <View style={styles.createAccountContainer}>
          <Text style={styles.label}>Olá Usuário, seja bem-vindo!</Text>
        </View>
      </View>
      <CustomButton
        text="Sair"
        color="#E65A6E"
        onPress={() => {
          /* Adicione sua lógica de saída aqui */
        }}
      />
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
});

export default Home;
