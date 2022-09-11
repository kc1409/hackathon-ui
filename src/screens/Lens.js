import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import { Card } from '@rneui/themed';
import Logo from "../assets/session_logo.jpg";

const Lens = () => {
  return (
    <SafeAreaView style={styles.root}>
        <ScrollView style={styles.scrollContainer}>
            <Card>
                <Card.Title> Session 1</Card.Title>
                <Card.Divider />
                <Card.Image 
                    source={Logo}
                />
            </Card>
            <Card>
                <Card.Title> Session 2</Card.Title>
                <Card.Divider />
                <Card.Image 
                    source={Logo}
                />
            </Card>
            <Card>
                <Card.Title> Session 3</Card.Title>
                <Card.Divider />
                <Card.Image 
                    source={Logo}
                />
            </Card>
            <Card>
                <Card.Title> Session 4</Card.Title>
                <Card.Divider />
                <Card.Image 
                    source={Logo}
                />
            </Card>
        </ScrollView>
    </SafeAreaView>
  )
}

export default Lens;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        padding: 20
    },
    scrollContainer: {
        flex: 1
    }
});