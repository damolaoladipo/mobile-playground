import '../global.css';
import React, { useEffect, useState } from 'react';
import { Stack, Slot } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import useThemedNavigation from '@/hooks/useThemedNavigation';
import { ThemeProvider } from '@/contexts/ThemeContext';


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

   useEffect(() => {
    const prepare = async () => {
      // You can load fonts, run async setup here
      await new Promise(resolve => setTimeout(resolve, 500)); // Simulate loading
      setIsReady(true);
      await SplashScreen.hideAsync();
    };

    prepare();
  }, []);

  if (!isReady) return null; // Keep splash showing

  return (

        <ThemeProvider>
            <ThemedLayout />
        </ThemeProvider>

  );
}
