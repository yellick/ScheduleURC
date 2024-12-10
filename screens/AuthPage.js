import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const AuthPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Auth Page</Text>
      <Button title="Login" onPress={() => navigation.navigate('Drawer')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AuthPage;
