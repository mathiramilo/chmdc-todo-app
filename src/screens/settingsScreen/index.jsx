import React from 'react'
import { View } from 'react-native'
import { Header } from '../../components'
import { styles } from './styles'

const SettingsScreen = () => {
  return (
    <View style={styles.container}>
      <Header title="CHMDC Settings" subtitle="Change the app settings" />
    </View>
  )
}

export default SettingsScreen
