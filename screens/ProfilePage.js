import React, { useState } from 'react';
import { Text, StyleSheet, View, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Button } from 'react-native-web';
import { AntDesign } from '@expo/vector-icons'; // Импортируем иконку крестика
import { useNavigation } from '@react-navigation/native'; // Импортируем useNavigation

const ProfilePage = () => {
  const userName = "Губанов Михаил Сергеевич";
  const userEmail = "22201003@live.preco.ru";
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation(); // Получаем объект навигации

  function exitBtnClick() {
    setModalVisible(true);
  }

  function confirmExit() {
    setModalVisible(false);
    // Переход на страницу авторизации
    navigation.navigate('Auth');
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.name}>{userName}</Text>
        <Text style={styles.email}>{userEmail}</Text>
      </View>
      <Button
        title="Выйти из аккаунта"
        onPress={exitBtnClick}
        color='#f66'
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.closeButton}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <AntDesign name="close" size={24} color="black" />
            </Pressable>
            <Text style={styles.modalText}>Вы уверены, что хотите выйти из аккаунта?</Text>
            <Pressable
              style={[styles.button, styles.buttonConfirm]}
              onPress={confirmExit}
            >
              <Text style={styles.textStyle}>Подтвердить</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 20,
    color: "black",
    marginBottom: 20,
  },
  email: {
    fontSize: 16,
    color: "#0078ff",
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    padding: 10,
    paddingTop: 40,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'relative', // Добавляем position relative для правильного позиционирования кнопки закрытия
    borderRadius: 0, // Убираем скругление углов
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  button: {
    padding: 10,
    paddingHorizontal: 20,
    elevation: 2,
    borderRadius: 0, // Убираем скругление углов у кнопки
  },
  buttonConfirm: {
    backgroundColor: "#f66",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ProfilePage;
