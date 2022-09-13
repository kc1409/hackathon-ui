import {StyleSheet, Image, View, Dimensions} from 'react-native';
import React from 'react';

const Background = () => {
  const {width, height} = Dimensions.get('window');

  return (
    <View>
      {/* Background Image */}
      <Image
        source={require('./../assets/images/DottedBG.png')}
        style={{
          width: width,
          height: 130,
          zIndex: -1,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          opacity: 0.8,
        }}
        resizeMode={'contain'}
      />
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({});
