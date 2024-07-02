import WebView from "react-native-webview";
import { useNavigation } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
export default Momo = () => {
  const navigation = useNavigation();
  const { uri } = useLocalSearchParams();
  return <WebView source={{ uri: uri }} />;
};
