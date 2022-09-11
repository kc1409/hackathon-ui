import { SafeAreaView, StyleSheet, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native';
import { Button } from "@rneui/themed";
import Gif from "../assets/app_logo.gif"
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Login = () => {
  const {height} = useWindowDimensions();

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.logoContainer}>
        <Image source={Gif} style={{height: height*0.4}} resizeMode="contain" />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Sign in with Google"
          icon={
            <Icon 
              name="google"
              size={20}

            />
          }
          buttonStyle={{ backgroundColor: 'rgba(219, 68, 55, 1)' }}
          titleStyle={{ color: 'white', marginHorizontal: 20 }} >
        </Button>
        <Button
          title="Sign in with Apple"
          containerStyle={{
            marginVertical: 20,
          }}
          icon={
            <Icon 
              name="apple"
              size={20}

            />
          }
          buttonStyle={{ backgroundColor: 'rgba(85, 85, 85, 1)' }}
          titleStyle={{ color: 'white', marginHorizontal: 20 }} >
        </Button>
      </View>
    </SafeAreaView>
  )
}

export default Login;

const styles = StyleSheet.create({
    root: {
        alignItems: "center",
        flex: 1,
        padding: 20
      },
      logoContainer: {
        flex: 1
      },
      buttonContainer: {
        flex: 1,
        width: "100%"
      }
});