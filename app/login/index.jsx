import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect } from "react";
import Colors from "../../constants/Colors";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";
import * as Linking from "expo-linking";

export const useWarmUpBrowser = () => {
  useEffect(() => {
    // Warm up the android browser to improve UX
    // https://docs.expo.dev/guides/authentication/#improving-user-experience
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

const LoginScreen = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow({
          redirectUrl: Linking.createURL("/home", { scheme: "myapp" }),
        });
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

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
          onPress={onPress}
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
