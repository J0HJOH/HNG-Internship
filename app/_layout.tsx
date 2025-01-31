import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack 
  screenOptions={{
    headerTitle: "HNG App",
    headerTitleStyle:{
      color:"white",
      fontSize: 25,
      fontWeight:"bold"
    },
    headerStyle:{
      backgroundColor:"grey"
    }
  }}/>;
}
