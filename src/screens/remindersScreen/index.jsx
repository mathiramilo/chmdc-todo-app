import React, { useState, useRef } from 'react'
import { View } from 'react-native'
import uuid from 'react-native-uuid'
import { Header } from '../../components'
import { styles } from './styles'

const RemindersScreen = () => {
  const [reminders, setReminders] = useState([])
  const [reminder, setReminder] = useState({
    id: '',
    title: '',
    description: '',
    time: ''
  })

  return (
    <View style={styles.container}>
      <Header title="CHMDC Reminders" subtitle="Add or delete Reminders" />
    </View>
  )
}

export default RemindersScreen
