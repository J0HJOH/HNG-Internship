import { Image, TouchableOpacity, ImageBackground, StyleSheet, Text, View, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import ExternalLink from "./components/ExternalLink";

export default function Index() {
  const navigation = useNavigation();

  return (
    <View style={styles.background}>
      <Text style={styles.textStyle}>Click the Buttons below to view the pages</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>

        <ExternalLink
        buttonTitle="GITHUB"
        onPress={()=>router.push(`/WebviewScreen?url=${encodeURIComponent('https://github.com/J0HJOH/HNG-Internship')}`)}
        imgSource="https://img.icons8.com/?size=100&id=12599&format=png&color=000000"
        />

<Text style={styles.textStyle}>Find and Hire Elite Skills From HNG Here</Text>

        <ExternalLink
        buttonTitle="FLUTTER DEVELOPERS"
        onPress={()=>router.push(`/WebviewScreen?url=${encodeURIComponent('http://hng.tech/hire/flutter-developers')}`)}
        imgSource="https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png&color=000000"
        />
       
        <ExternalLink
        buttonTitle="ANDROID DEVELOPERS"
        onPress={()=>router.push(`/WebviewScreen?url=${encodeURIComponent('http://hng.tech/hire/android-developers')}`)}
        imgSource="https://img.icons8.com/?size=100&id=17836&format=png&color=000000"
        />
       
        <ExternalLink
        buttonTitle="IOS DEVELOPERS"
        onPress={()=>router.push(`/WebviewScreen?url=${encodeURIComponent('https://hng.tech/hire/ios-developers')}`)}
        imgSource="https://img.icons8.com/?size=100&id=30840&format=png&color=000000"
        />
       
        <ExternalLink
        buttonTitle="REACT NATIVE DEVELOPERS"
        onPress={()=>router.push(`/WebviewScreen?url=${encodeURIComponent('http://hng.tech/hire/react-native-developers')}`)}
        imgSource="https://img.icons8.com/?size=100&id=35989&format=png&color=000000"
        />
       
        <ExternalLink
        buttonTitle="MOBILE DEVELOPERS"
        onPress={()=>router.push(`/WebviewScreen?url=${encodeURIComponent('https://hng.tech/hire/mobile-ui-ux-developers')}`)}
        imgSource="https://img.icons8.com/?size=100&id=yCeoujsiNAwK&format=png&color=000000"
        />
       
        <ExternalLink
        buttonTitle="KOTLIN DEVELOPERS"
        onPress={()=>router.push(`/WebviewScreen?url=${encodeURIComponent('https://hng.tech/hire/kotlin-developers')}`)}
        imgSource="https://img.icons8.com/?size=100&id=bORMlYYhamPG&format=png&color=000000"
        />
       
        <ExternalLink
        buttonTitle="TELEX"
        onPress={()=>router.push(`/WebviewScreen?url=${encodeURIComponent('https://telex.im/')}`)}
        imgSource="https://telex.im/_next/image?url=%2FlogoBlack.png&w=128&q=75"
        />
       
        <ExternalLink
        buttonTitle="DELVE"
        onPress={()=>router.push(`/WebviewScreen?url=${encodeURIComponent('https://delve.fun/')}`)}
        imgSource="https://delve.fun/_next/image?url=%2Fnavbar%2Fdelve-darknav-gif.gif&w=128&q=75"
        />
       

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    padding: 30,
    backgroundColor: "grey",
  },
  textStyle: {
    color: "black",
    marginTop: 20,
    fontSize: 20,
  },
  scrollContainer: {
    paddingBottom: 50, 
    paddingVertical: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#fff",
    marginTop: 20,
    textAlign: "center",
  },
});
