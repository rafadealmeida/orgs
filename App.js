import { useCallback, useEffect } from 'react';
import { StyleSheet,StatusBar,SafeAreaView, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import Cesta from './src/telas/cesta/cesta';
import {CestaContext,cesta} from './src/mocks/cesta'
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    
    <CestaContext.Provider value={cesta} >
      
    <SafeAreaView onLayout={onLayoutRootView} style={{flex: 1}}>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
    </CestaContext.Provider>
  );
}

