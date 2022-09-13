import {Dimensions, StyleSheet, Platform} from 'react-native';

const {width: screenWidth} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    paddingHorizontal: 20,
    height: '100%',
  },
  title: {
    fontSize: 20,
  },
  item: {
    width: '100%',
    height: screenWidth - 20,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 5,
    backgroundColor: 'lightblue',
    marginBottom: Platform.select({ios: 0, android: 1}),
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    resizeMode: 'contain',
  },
  dotContainer: {},
  dotStyle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'black',
  },
  inactiveDotStyle: {
    backgroundColor: 'grey',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  quizButton: {
    marginBottom: 50,
  },
});
export default styles;
