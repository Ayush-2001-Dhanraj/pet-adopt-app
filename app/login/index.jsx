import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Colors from "../../constants/Colors";
import { TouchableOpacity } from "react-native";

const LoginScreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: Colors.WHITE }}>
      <Image
        source={require("../../assets/images/login.png")}
        style={{ width: "100%", height: 600 }}
      />
      <View style={{ padding: 8 }}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 30,
            textAlign: "center",
          }}
        >
          Ready to make a new friend?
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontFamily: "outfit",
            fontSize: 18,
            color: Colors.GREY,
          }}
        >
          Let's adopt the pet which you like and make there life happy again.
        </Text>
      </View>
      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 8 }}>
        <TouchableOpacity
          style={{
            backgroundColor: Colors.PRIMARY,
            margin: 8,
            padding: 8,
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-medium",
              fontSize: 20,
            }}
          >
            Get Started!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
