import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from 'react-native';
import React from 'react';
import products from '../data/products';
import { Ionicons } from '@expo/vector-icons';

const ProductDetailsScreen = ({ route, navigation }) => {
  // const product = products[1];
  const { product } = route.params;

  const { width } = useWindowDimensions();

  const addToCard = () => {
    console.warn('add to cart');
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Image Carousel */}
        <FlatList
          data={product.images}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          renderItem={({ item }) => (
            <Image
              source={{ uri: item }}
              style={{ width, aspectRatio: 1 }}
            />
          )}
          ListFooterComponent={() => (
            <View style={{ marginBottom: 20 }}></View>
          )}
        />

        <View style={{ padding: 20 }}>
          {/* Title */}
          <Text style={styles.title}>{product.name}</Text>

          {/* Price */}
          <Text style={styles.price}>${product.price}</Text>

          {/* Description */}
          <Text style={styles.description}>
            {product.description}
          </Text>
        </View>
      </ScrollView>

      {/* Add to cart button */}
      <Pressable style={styles.button} onPress={addToCard}>
        <Text style={styles.buttonText}>${product.price}</Text>
      </Pressable>

      {/* Navigation icon */}
      <Pressable
        style={styles.icon}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="close" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {},
  title: {
    fontSize: 34,
    fontWeight: '500',
    marginVertical: 10,
  },
  price: {
    fontWeight: '500',
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 18,
    lineHeight: 30,
    fontWeight: '300',
  },
  button: {
    backgroundColor: 'black',
    position: 'absolute',
    bottom: 30,
    width: '90%',
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
  icon: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: '#000000AA',
    borderRadius: 50,
    padding: 5,
  },
});
