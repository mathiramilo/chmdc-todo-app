import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import React, { useState } from 'react'
import { View, ActivityIndicator, StyleSheet } from 'react-native'
import { RemindersScreen, SettingsScreen, TodoScreen } from './screens'
import { AppBar } from './components'
import { colors } from './theme'

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

  const [screen, setScreen] = useState('todos')

  const Screen = () => {
    switch (screen) {
      case 'todos':
        return <TodoScreen />
      case 'reminders':
        return <RemindersScreen />
      case 'settings':
        return <SettingsScreen />
      default:
        return <TodoScreen />
    }
  }

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

      <Screen />
      <AppBar screen={screen} setScreen={setScreen} />
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
