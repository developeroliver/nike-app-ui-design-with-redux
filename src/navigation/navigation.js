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

const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    backgroundColor: 'white',
  },
};

const Navigation = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{ contentStyle: { backgroundColor: 'white' } }}
      >
        <Stack.Screen
          name="Products"
          component={ProductsScreen}
          options={({ navigation }) => ({
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
                    1
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
