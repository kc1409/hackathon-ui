import {
  StyleSheet,
  Image,
  View,
  Dimensions,
  Text,
  FlatList,
} from 'react-native';
import React, {useEffect, useState, useRef} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Slider from '@react-native-community/slider';
import AudioFiles from '../assets/AudioFilesData';
const AudioPlayer = () => {
  const {width} = Dimensions.get('window');
  const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#D1D2F9',
    },
    container: {
      flex: 12,
    },
    secondaryContainer: {
      borderTopWidth: 2,
      width: width,
      alignItems: 'center',
      paddingVertical: 32,
      borderTopColor: '#576490',
      borderBottomWidth: 2,
      marginBottom: 15,
    },
    playerContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    playerImage: {
      height: '100%',
      width: '100%',
      marginBottom: 25,
    },
    playerWrapper: {
      width: 300,
      height: 340,
      marginBottom: 25,
      shadowColor: '#576490',
      shadowOffset: {
        width: 55,
        height: 5,
      },
    },
    title: {
      fontSize: 22,
      fontWeight: '600',
      textAlign: 'center',
      color: '#576490',
    },
    description: {
      paddingTop: 12,
      fontSize: 18,
      fontWeight: '200',
      textAlign: 'center',
      color: '#576490',
    },
    progreddSlider: {
      width: 350,
      height: 50,
      flexDirection: 'row',
      marginTop: 50,
    },
    progreddSliderContainer: {
      width: 350,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    progressLabelText: {
      color: 'white',
    },
    controls: {
      flexDirection: 'row',
      width: '60%',
      justifyContent: 'space-between',
      marginTop: 15,
    },
  });
  const renderAudioFiles = ({index, item}) => {
    return (
      <View
        style={{width: width, justifyContent: 'center', alignItems: 'center'}}>
        <View style={styles.playerWrapper}>
          <Image source={item.image} style={styles.playerImage}></Image>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <FlatList
          renderItem={renderAudioFiles}
          data={AudioFiles}
          keyExtractor={item => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
        />
        <View>
          <Text style={styles.title}>Course Title</Text>
          <Text style={styles.description}>
            When sample random text is required, most people just press the
            random keys in quick succession to type illegible text. This however
            is not the smartest way to do the job. Let’s look at some better
            ways!
          </Text>
        </View>
        <View>
          <Slider
            style={styles.progreddSlider}
            value={10}
            minimumValue={0}
            maximumValue={100}
            thumbTintColor="#576490"
            minimumTrackTintColor='="#576490'
            maximumTrackImage="white"
            onSlidingComplete={() => {}}
          />
          <View style={styles.progreddSliderContainer}>
            <Text style={styles.progressLabelText}> 0:00</Text>
            <Text style={styles.progressLabelText}> 5:00</Text>
          </View>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons
              name="play-skip-back-outline"
              size={35}
              style={{marginTop: 15}}></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="ios-pause-circle" size={60}></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons
              name="play-skip-forward-outline"
              size={35}
              style={{marginTop: 15}}></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.secondaryContainer}>
        <View style={styles.playerContainer}>
          <TouchableOpacity>
            <Ionicons name="arrow-back-circle-sharp"></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="heart-outline"></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="repeat"></Ionicons>
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="arrow-forward-circle-sharp"></Ionicons>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AudioPlayer;
