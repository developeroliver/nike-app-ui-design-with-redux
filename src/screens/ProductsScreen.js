import { FlatList, Image, StyleSheet, View } from 'react-native';
import products from '../data/products';

const ProductsScreen = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => (
        <View
          style={{
            height: 100,
          }}
        />
      )}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Image
            source={{
              uri: item.image,
            }}
            style={styles.image}
            resizeMode="cover"
          />
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
    padding: 1,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
