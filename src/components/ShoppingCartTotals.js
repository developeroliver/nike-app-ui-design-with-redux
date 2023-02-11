import { View, Text, StyleSheet, Dimensions } from 'react-native';
import React from 'react';
import {
  selectSubtotal,
  selectDeliveryPrice,
  selectTotal,
} from '../store/reducers/cartSlice';
import { useSelector } from 'react-redux';

const ShoppingCartTotals = () => {
  const subtotal = useSelector(selectSubtotal);
  const deliveryFee = useSelector(selectDeliveryPrice);
  const total = useSelector(selectTotal);

  return (
    <View style={styles.totalsContainer}>
      <View style={styles.row}>
        <Text>SubTotal</Text>
        <Text>{subtotal} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Delivery</Text>
        <Text style={styles.text}>{deliveryFee} US$</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.textBold}>Total</Text>
        <Text style={styles.textBold}>{total} US$</Text>
      </View>
    </View>
  );
};

export default ShoppingCartTotals;

const styles = StyleSheet.create({
  totalsContainer: {
    margin: Dimensions.get('window').width > 350 ? 20 : 16,
    paddingTop: Dimensions.get('window').width > 350 ? 10 : 8,
    borderColor: 'gainsboro',
    borderTopWidth: 1,
    marginBottom: 150,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  text: {
    fontSize: Dimensions.get('window').width > 350 ? 16 : 14,
    color: 'gray',
  },
  textBold: {
    fontSize: Dimensions.get('window').width > 350 ? 16 : 14,
    fontWeight: '500',
  },
});
