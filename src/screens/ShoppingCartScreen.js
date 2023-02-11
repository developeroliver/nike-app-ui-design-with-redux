import {
  FlatList,
  Pressable, StyleSheet,
  Text,
  View
} from 'react-native';
import { useSelector } from 'react-redux';
import CartListItem from '../components/CartListItem';
import ShoppingCartTotals from '../components/ShoppingCartTotals';

const ShoppingCartScreen = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
     
      <FlatList
        data={cartItems}
        renderItem={({ item }) => <CartListItem cartItem={item} />}
        ListFooterComponent={ShoppingCartTotals}
      />
      <View style={styles.footer}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Checkout</Text>
        </Pressable>
      </View>
    </>
  );
};

export default ShoppingCartScreen;

const styles = StyleSheet.create({
  footer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'gainsboro',
    borderTopWidth: 1,
    padding: 20,
  },
  button: {
    width: '100%',
    backgroundColor: 'black',
    alignSelf: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 100,
  },
  buttonText: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
});
