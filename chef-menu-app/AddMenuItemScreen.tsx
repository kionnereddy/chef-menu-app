import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert, Image } from 'react-native';

const AddMenuItemScreen = ({ navigation, setMenuItems }) => {
  const [dishName, setDishName] = useState('');
  const [description, setDescription] = useState('');
  const [course, setCourse] = useState('Starters');
  const [price, setPrice] = useState('');

  const addMenuItem = () => {
    if (!dishName || !description || !price) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }

    const newItem = {
      id: Math.random().toString(),
      dishName,
      description,
      course,
      price: parseFloat(price),
    };

    setMenuItems(prevItems => [...prevItems, newItem]);
    setDishName('');
    setDescription('');
    setCourse('Starters');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/chefchristoffel.png')} 
        style={styles.image} 
        resizeMode="contain" 
      />
      <Text style={styles.title}>Add Menu Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={dishName}
        onChangeText={setDishName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <View style={styles.coursePicker}>
        <Text>Select Course:</Text>
        {['Starters', 'Mains', 'Desserts'].map((item) => (
          <Button key={item} title={item} onPress={() => setCourse(item)} color="#007BFF" />
        ))}
      </View>

      <Button title="Add Menu Item" onPress={addMenuItem} color="#28a745" />
      <Button title="Save and Go Back" onPress={() => navigation.goBack()} color="#dc3545" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    textAlign: 'center',
    color: '#343a40',
  },
  input: {
    height: 50,
    borderColor: '#ced4da',
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#ffffff',
  },
  coursePicker: {
    marginBottom: 15,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
});

export default AddMenuItemScreen;
