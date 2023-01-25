import React from 'react'
import { Image, Text, View } from 'react-native'
import { Header } from '../../components'
import { styles } from './styles'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="Settings" subtitle="Change the app settings" />

      <View style={styles.contentContainer}>
        <Image style={styles.image} source={require('../../assets/settings.png')} />
        <Text style={styles.text}>Coming Soon...</Text>
      </View>
    </View>
  )
}

export default SettingsScreen
