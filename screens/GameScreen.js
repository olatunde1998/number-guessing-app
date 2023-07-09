import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Title > Opponent's Guess</Title>
      <View>
        <Text>Higher or Lower?</Text>
      </View>
      {/* <View>LOG ROUNDS</View> */}
      <StatusBar style="light" />
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});
