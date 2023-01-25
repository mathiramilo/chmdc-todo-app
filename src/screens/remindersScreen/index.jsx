import React, { useState, useRef } from 'react'
import { View } from 'react-native'
import uuid from 'react-native-uuid'
import { Header, AddItemButton, AddReminderModal, RemindersList } from '../../components'
import { styles } from './styles'

const RemindersScreen = () => {
  const [reminders, setReminders] = useState([])
  const [reminder, setReminder] = useState({
    id: '',
    title: '',
    description: '',
    time: '',
    notifications: true
  })
  const [error, setError] = useState(null)

  const [modalVisible, setModalVisible] = useState(false)

  const handleChangeTitle = value => setReminder({ ...reminder, title: value })
  const handleChangeDesc = value => setReminder({ ...reminder, description: value })
  const handleChangeTime = value => setReminder({ ...reminder, time: value })

  const handleCancel = () => {
    setModalVisible(!modalVisible)
    setReminder({
      id: '',
      title: '',
      description: '',
      time: ''
    })
  }
  const handleAddReminder = () => {
    if (reminder.title === '' || reminder.description === '') {
      setError('Please fill all fields')
      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }

    setReminders([...reminders, { ...reminder, notifications: true, id: uuid.v4() }])
    setModalVisible(!modalVisible)
    setReminder({
      id: '',
      title: '',
      description: '',
      time: '',
      notifications: true
    })
    setError(null)

    if (reminder.length > 1) flatListRef.current.scrollToEnd()
  }

  const handleNotifications = id => {
    const newReminders = reminders.map(reminder => {
      if (reminder.id === id) {
        reminder.notifications = !reminder.notifications
      }
      return reminder
    })
    setReminders(newReminders)
  }
  const handleEdit = (id, data) => {
    console.warn(id, data)
    return
    const newReminders = reminders.map(reminder => {
      if (reminder.id === id) {
        reminder = data
      }
      return reminder
    })
    setReminders(newReminders)
  }
  const handleDelete = id => {
    const newReminders = reminders.filter(reminder => reminder.id !== id)
    setReminders(newReminders)
  }

  const flatListRef = useRef()

  return (
    <View style={styles.container}>
      <Header title="Reminders" subtitle="Add or delete Reminders" />

      <RemindersList
        reminders={reminders}
        flatListRef={flatListRef}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleNotifications={handleNotifications}
      />

      <AddItemButton modalVisible={modalVisible} setModalVisible={setModalVisible} />

      <AddReminderModal
        open={modalVisible}
        reminder={reminder}
        handleChangeTitle={handleChangeTitle}
        handleChangeDesc={handleChangeDesc}
        handleChangeTime={handleChangeTime}
        error={error}
        handleCancel={handleCancel}
        handleAddReminder={handleAddReminder}
      />
    </View>
  )
}

export default RemindersScreen
