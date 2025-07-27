import '../global.css';
import React, { useEffect, useState } from 'react';
import { Stack, Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import useThemedNavigation from '@/hooks/useThemedNavigation';
import { ThemeProvider } from '@/contexts/ThemeContext';
import {
  useFonts,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

SplashScreen.preventAutoHideAsync();

function ThemedLayout() {
  const { ThemedStatusBar, screenOptions } = useThemedNavigation();
  
  return (
    <>
      <ThemedStatusBar />
      <Stack screenOptions={screenOptions} />

    </>
  );
}

export default function RootLayout() {
  const [isReady, setIsReady] = useState(false);

    const [fontsLoaded] = useFonts({
    Inter_500Medium,
    Inter_600SemiBold,
  });

  useEffect(() => {
    const prepare = async () => {
      if (fontsLoaded) {
        setIsReady(true);
        await SplashScreen.hideAsync();
      }
    };
    prepare();
  }, [fontsLoaded]);

  if (!isReady) return null; // Keep splash showing

  return (

    <GestureHandlerRootView style={{ flex: 1 }}>

      <SafeAreaProvider>

        <ThemeProvider>
            <ThemedLayout />
        </ThemeProvider>


      </SafeAreaProvider>

    </GestureHandlerRootView>

  );
}
