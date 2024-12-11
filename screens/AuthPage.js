import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Animated } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const AuthPage = ({ navigation }) => {
  // хуки для получения и обновления значений
  const [userLogin, onChangeLogin] = useState('');
  const [userPass, onChangePass] = useState('');

  // компонент анимации
  const backgroundColor = useRef(new Animated.Value(0)).current;

  // анимация
  useEffect(() => {
    Animated.timing(backgroundColor, {
      // выбор цвета исходя из пустоты
      toValue: userLogin.trim() !== '' && userPass.trim() !== '' ? 1 : 0,
      // время анимации
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [userLogin, userPass]);

  // цвета
  const buttonBackgroundColor = backgroundColor.interpolate({
    // inactive/active
    inputRange: [0, 1],
    outputRange: ['#99b6ff', '#5786ff'],
  });

  // функция авторизации
  function login() {
    alert(`Login: ${userLogin}\nPassword: ${userPass}`);
    navigation.navigate('Drawer');
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <Text style={styles.title}>Вход</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder='Логин'
            value={userLogin}
            onChangeText={onChangeLogin}
          />
          <TextInput
            style={styles.input}
            placeholder='Пароль'
            value={userPass}
            onChangeText={onChangePass}
            secureTextEntry
          />
        </View>

        <Animated.View 
          style={[styles.button, 
          { backgroundColor: buttonBackgroundColor }]}
        >
          <TouchableOpacity 
            onPress={login} 
            disabled={userLogin.trim() === '' || userPass.trim() === ''}
          >
            <Text style={styles.buttonText}>Войти</Text>
          </TouchableOpacity>
        </Animated.View>

      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 50,
  },
  form: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 8,
  },
  button: {
    padding: 10, // Внутренний отступ
    paddingHorizontal: 30,
  },
  buttonText: {
    color: '#fff', // Цвет текста
    fontSize: 16, // Размер текста
    textAlign: 'center', // Выравнивание текста по центру
  },
});

export default AuthPage;
