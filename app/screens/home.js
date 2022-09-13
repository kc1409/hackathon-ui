import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/title';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Title titleText="Calmify" />
      <Text style={styles.paraText}>
        Welcome to Calmify , We have curated multiple fun sessions for you to
        explore. All the personal data gatherd and the results are confidential.
      </Text>
      <View style={styles.bannerContainer}>
        <Image
          source={require('./../assets/images/Psychologist.gif')}
          style={styles.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('CourseSlider')}
        style={styles.button}>
        <Text style={styles.buttonText}>Let's Begin</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    height: 400,
    width: 400,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
  },
  button: {
    width: '100%',
    backgroundColor: '#576490',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  paraText: {
    color: '#7796CB',
    fontFamily: 'Times New Roman',
  },
});
