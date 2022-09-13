import React, {useState, Component} from 'react';
import {View, Dimensions, Pressable} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import CarouselItem from './../components/CarouselItem';
import styles from '../../Style';
import {useRef} from 'react';
import {Button, Image} from 'react-native';
import CustomPaging from './../components/CustomPaging';
import data from './../assets/Data';

const {width} = Dimensions.get('window');

const CustomSlider = ({navigation}) => {
  const settings = {
    sliderWidth: width,
    sliderHeight: width,
    itemWidth: width - 80,
    data: data,
    renderItem: CarouselItem,
    hasParallaxImages: true,
    onSnapToItem: index => setSlideIndex(index),
    navigation: navigation,
  };
  const carouselRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const handleUserSelection = () => {
    navigation.navigate('Quiz', {
      quizName: 'Selected Quiz',
    });
  };

  return (
    <View style={styles.container}>
      <Carousel {...settings} ref={carouselRef} />
      <CustomPaging data={data} activeSlide={slideIndex} />
      <Pressable onPress={() => handleUserSelection()}></Pressable>
      <View style={styles.fixToText}>
        <Button
          title="start"
          onPress={() => carouselRef.current.snapToItem(0)}
        />
        <Button
          title="End"
          onPress={() => carouselRef.current.snapToItem(data.length - 1)}
        />
      </View>
      <View style={styles.quizButton}>
        <Button
          onPress={() => navigation.navigate('Quiz')}
          title="Go To Quiz"
        />
      </View>
    </View>
  );
};

export default CustomSlider;
