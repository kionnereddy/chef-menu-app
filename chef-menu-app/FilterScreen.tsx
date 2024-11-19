import React, { useState } from 'react';
import { StyleSheet, View, Text, Button, FlatList, TouchableOpacity } from 'react-native';

const FilterScreen = ({ menuItems, navigation }) => {
  const [filteredItems, setFilteredItems] = useState(menuItems);

  const filterByCourse = (course) => {
    const filtered = menuItems.filter(item => item.course === course);
    setFilteredItems(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu by Course</Text>
      <View style={styles.filterButtons}>
        <Button title="Starters" onPress={() => filterByCourse('Starters')} color="#007BFF" />
        <Button title="Mains" onPress={() => filterByCourse('Mains')} color="#28a745" />
        <Button title="Desserts" onPress={() => filterByCourse('Desserts')} color="#dc3545" />
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.dishName}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.price}>Price: R{item.price.toFixed(2)}</Text>
          </View>
        )}
      />

      <Button title="Go Back to Home" onPress={() => navigation.goBack()} color="#ff5e00" />
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
  filterButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
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
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#dc3545',
  },
});

export default FilterScreen;
