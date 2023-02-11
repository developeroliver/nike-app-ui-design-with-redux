import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
} from '@react-navigation/native';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import ProductsScreen from '../screens/ProductsScreen';
import ShoppingCartScreen from '../screens/ShoppingCartScreen';
import { Pressable, Text, View } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from 'react-redux';
import { selectNumberOfItems } from '../store/reducers/cartSlice';

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: 'white',
  },
};

const Navigation = () => {
  const cart = useSelector((state) => state.cart.items);
  const numberOfItems = useSelector(selectNumberOfItems);

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: 'white' } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
            headerTitle: 'Nikee',
            headerLeft: () => (
              <Pressable
                style={{ flexDirection: 'row' }}
                onPress={() => navigation.navigate('Products')}
              >
                <FontAwesome5 name="bars" size={18} color="gray" />
              </Pressable>
            ),
            headerRight: () => (
              <Pressable
                style={{ flexDirection: 'row' }}
                onPress={() => navigation.navigate('Cart')}
              >
                <FontAwesome5
                  name="shopping-cart"
                  size={18}
                  color="gray"
                />
                <View
                  style={{
                    width: 15,
                    height: 15,
                    borderRadius: 50,
                    backgroundColor: 'red',
                    position: 'absolute',
                    top: -5,
                    right: -5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Text
                    style={{
                      color: 'white',
                      position: 'absolute',
                    }}
                  >
                    {numberOfItems}
                  </Text>
                </View>
              </Pressable>
            ),
          })}
        />
        <Stack.Screen
          name="Product Details"
          component={ProductDetailsScreen}
          options={{ presentation: 'modal' }}
        />
        <Stack.Screen name="Cart" component={ShoppingCartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
