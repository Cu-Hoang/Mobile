import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack, router } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";
import * as Font from "expo-font";

import { useColorScheme } from "@/components/useColorScheme";
SplashScreen.hideAsync();
export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          alice: require("../assets/fonts/Alice-Regular.ttf"),
          alfa: require("../assets/fonts/AlfaSlabOne-Regular.ttf"),
        });

        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  useEffect(() => {
    router.push("/(modals)/login-or-signup");
  }, []);
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="(modals)/login-or-signup"
        options={{ presentation: "modal", headerShown: false }}
      />

      <Stack.Screen
        name="(modals)/login"
        options={{ presentation: "modal", headerShown: false }}
      />

      <Stack.Screen
        name="(modals)/signup"
        options={{ presentation: "modal", headerShown: false }}
      />

      <Stack.Screen
        name="(modals)/forgot-password"
        options={{ presentation: "modal", headerShown: false }}
      />

      <Stack.Screen
        name="(modals)/input-OTP"
        options={{ presentation: "modal", headerShown: false }}
      />

      <Stack.Screen
        name="(modals)/change-password"
        options={{ presentation: "modal", headerShown: false }}
      />

      <Stack.Screen
        name="message/[message]"
        options={{ presentation: "modal", headerShown: false }}
      />

      <Stack.Screen
        name="(modals)/splash-screen"
        options={{ presentation: "modal", headerShown: false }}
      />

      <Stack.Screen
        name="(modals)/SearchPage"
        options={{ presentation: "modal", headerShown: false }}
      />

      <Stack.Screen
        name="(modals)/PromoProducts"
        options={{ presentation: "modal", headerShown: false }}
      />

      <Stack.Screen
        name="(modals)/BestSeller"
        options={{ presentation: "modal", headerShown: false }}
      />

      <Stack.Screen
        name="(modals)/Review"
        options={{ presentation: "modal", headerShown: false }}
      />
    </Stack>

    
  );
}
