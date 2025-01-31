import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react';

interface ExternalLinkProps {
    onPress?: ()=> void,
    buttonTitle: string, 
    imgSource: string,
}

export default function ExternalLink({onPress, buttonTitle,imgSource} : ExternalLinkProps) {
  

  return (
    <TouchableOpacity
    style={styles.imgBtn}
    onPress={onPress}
    >

    
      <Image
      style={styles.img}
      resizeMode="contain"
      source={{uri: imgSource}}
      />
      <Text style={[styles.infoText,{fontWeight:"bold"}]}>{buttonTitle}</Text>
    
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  
imgBtn: {
  flexDirection: "row",
  justifyContent: "flex-start",
  backgroundColor:"brown", 
  padding: 10, 
  margin:6,
  borderWidth: 3,
  borderRadius: 30,
  borderColor: "#000",
  shadowColor: "#faf7f7",
  shadowOffset: { width: 4, height: 4 },
  shadowOpacity: 0.6,
  shadowRadius: 2,
},
img: {
  marginRight: 10,
  height: 50, 
  width: 50, 
},
infoText: {
  fontSize: 16,
  color: "#fff",
  marginTop: 20,
  textAlign: "center",
},
})