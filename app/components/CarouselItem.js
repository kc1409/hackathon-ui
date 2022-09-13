import React from 'react';
import {ParallaxImage} from 'react-native-snap-carousel';
import {View, Text, SafeAreaView} from 'react-native';
import styles from '../../Style';

const CarouselItem = ({item, index}, parallaxProps, navigation) => {
  return (
    <View style={styles.item}>
      <ParallaxImage
        source={{uri: item.source}} /* the source of the image */
        containerStyle={styles.imageContainer}
        style={styles.image}
        {...parallaxProps} /* pass in the necessary props */
      />
      <Text style={styles.title} numberOfLines={2}>
        {item.title}
      </Text>
    </View>
  );
};

export default CarouselItem;
