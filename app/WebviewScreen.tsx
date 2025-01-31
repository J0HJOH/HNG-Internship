import { useLocalSearchParams } from 'expo-router';
import { WebView } from 'react-native-webview';
import { View, ActivityIndicator, Text } from 'react-native';

export default function WebviewScreen() {
  const params = useLocalSearchParams();
  const url = params.url ? decodeURIComponent(params.url as string) : '';

  console.log("Params:", params);  // Debugging
  console.log("Opening URL:", url);  // Debugging

  if (!url) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 16 }}>No URL Provided</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <WebView 
        source={{ uri: url }} 
        startInLoadingState={true}
        renderLoading={() => <ActivityIndicator size="large" color="blue" style={{ flex: 1 }} />}
      />
    </View>
  );
}
