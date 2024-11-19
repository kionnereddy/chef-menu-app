import React, { useState } from 'react'; 
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import AddMenuItemScreen from './AddMenuItemScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const initialMenuItems = [
    {
      id: '1',
      dishName: 'Buffalo Wings',
      description: '6 Buffalo Wings dunked in BBQ sauce and served with a creamy dip',
      course: 'Starters',
      price: 90,
    },
    {
      id: '2',
      dishName: 'Ribeye Steak',
      description: '300g Ribeye Steak, cooked to your preference, served with side chips',
      course: 'Mains',
      price: 210,
    },
    {
      id: '3',
      dishName: 'Malva Pudding',
      description: 'Fresh Malva Pudding served with ice-cream or cream',
      course: 'Desserts',
      price: 70,
    },
    {
      id: '4',
      dishName: 'Chicken Livers',
      description: 'Creamy Chicken Livers served with 2 slices of toast',
      course: 'Starters',
      price: 110,
    },
    {
      id: '5',
      dishName: 'Prawn Alfredo Pasta',
      description: 'Perfectly cooked pasta served with mini prawns',
      course: 'Mains',
      price: 150,
    },
    {
      id: '6',
      dishName: 'Chocolate Brownie',
      description: 'Lava Chocolate Brownie served with ice-cream or cream',
      course: 'Desserts',
      price: 90,
    },
  ];

  const [menuItems, setMenuItems] = useState(initialMenuItems);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} menuItems={menuItems} setMenuItems={setMenuItems} />}
        </Stack.Screen>
        <Stack.Screen name="Add Menu Item">
          {props => <AddMenuItemScreen {...props} setMenuItems={setMenuItems} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


