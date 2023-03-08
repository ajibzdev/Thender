import { FontAwesome } from "@expo/vector-icons";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  // Load any resources or data that we need prior to rendering the app
  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...FontAwesome.font,
          "space-mono": require("../assets/fonts/SpaceMono-Regular.ttf"),
          "inter-black": require("../assets/fonts/Inter/Inter-Black.ttf"),
          "inter-bold": require("../assets/fonts/Inter/Inter-Bold.ttf"),
          "inter-extraBold": require("../assets/fonts/Inter/Inter-ExtraBold.ttf"),
          "inter-extraLight": require("../assets/fonts/Inter/Inter-ExtraLight.ttf"),
          "inter-regular": require("../assets/fonts/Inter/Inter-Regular.ttf"),
          "inter-semiBold": require("../assets/fonts/Inter/Inter-SemiBold.ttf"),
          "inter-medium": require("../assets/fonts/Inter/Inter-Medium.ttf"),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
