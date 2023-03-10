import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  View,
} from 'react-native';
import products from '../data/products';
import { useSelector, useDispatch } from 'react-redux';
import { productsSlice } from '../store/reducers/productsSlice';

const ProductsScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <View
          style={{
            height: 10,
          }}
        />
      )}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Pressable
            onPress={() => {
              dispatch(
                productsSlice.actions.setSelectedProduct(item.id)
              );

              navigation.navigate('Product Details');
            }}
          >
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
              resizeMode="cover"
            />
          </Pressable>
        </View>
      )}
      ListFooterComponent={() => (
        <View style={{ paddingBottom: 100 }} />
      )}
    />
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  itemContainer: {
    width: '50%',
    padding: 5,
  },
  image: {
    borderRadius: 7,
    width: '100%',
    aspectRatio: 1,
  },
});
