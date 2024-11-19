import React from 'react';
import { StyleSheet, View, Text, Button, FlatList, Image } from 'react-native';

const HomeScreen = ({ navigation, menuItems, setMenuItems }) => {
  const calculateAveragePrice = (course) => {
    const filteredItems = menuItems.filter(item => item.course === course);
    const total = filteredItems.reduce((sum, item) => sum + item.price, 0);
    return filteredItems.length > 0 ? `R${(total / filteredItems.length).toFixed(2)}` : 'N/A';
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/chefchristoffel.png')} 
        style={styles.image} 
        resizeMode="contain" 
      />
      <Text style={styles.title}>Chef's Menu</Text>
      <Button title="Add Menu Item" onPress={() => navigation.navigate('Add Menu Item')} color="#007BFF" />

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.dishName}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.course}>Course: {item.course}</Text>
            <Text style={styles.price}>Price: R{item.price.toFixed(2)}</Text>
          </View>
        )}
      />

      <Text style={styles.averagePrice}>Average Price of Starters: {calculateAveragePrice('Starters')}</Text>
      <Text style={styles.averagePrice}>Average Price of Mains: {calculateAveragePrice('Mains')}</Text>
      <Text style={styles.averagePrice}>Average Price of Desserts: {calculateAveragePrice('Desserts')}</Text>

      <Text style={styles.totalItems}>Total Items Added: {menuItems.length}</Text>
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
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#343a40',
  },
  menuItem: {
    borderBottomColor: '#dee2e6',
    borderBottomWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 1,
  },
  dishName: {
    fontSize: 20,
    fontWeight: '600',
    color: '#007BFF',
  },
  description: {
    fontSize: 14,
    color: '#6c757d',
  },
  course: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#28a745',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dc3545',
  },
  averagePrice: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
    color: '#343a40',
  },
  totalItems: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#343a40',
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
  },
  
});

export default HomeScreen;
