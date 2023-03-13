import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import React from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'

import { init } from './db'

import { Provider } from 'react-redux'
import store from './store'

import AppNavigator from './navigation'
import { colors } from './theme'

init()
  .then(() => {
    console.log('Initialized database')
  })
  .catch(err => {
    console.log('Initializing db failed.')
    console.log(err)
  })

const App = () => {
  const [loaded] = useFonts({
    'Raleway-Black': require('../assets/fonts/Raleway-Black.ttf'),
    'Raleway-ExtraBold': require('../assets/fonts/Raleway-ExtraBold.ttf'),
    'Raleway-Bold': require('../assets/fonts/Raleway-Bold.ttf'),
    'Raleway-SemiBold': require('../assets/fonts/Raleway-SemiBold.ttf'),
    'Raleway-Medium': require('../assets/fonts/Raleway-Medium.ttf'),
    'Raleway-Regular': require('../assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Light': require('../assets/fonts/Raleway-Light.ttf'),
    'Raleway-ExtraLight': require('../assets/fonts/Raleway-ExtraLight.ttf'),
    'Raleway-Thin': require('../assets/fonts/Raleway-Thin.ttf')
  })

  if (!loaded) {
    return (
      <>
        <StatusBar style="dark" />
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      </>
    )
  }

  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    </>
  )
}

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    backgroundColor: colors.backgroundLight,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default App
