import React, { useState, useRef } from 'react'
import { Alert, View } from 'react-native'
import uuid from 'react-native-uuid'
import { Header, AddItemButton, AddReminderModal, RemindersList, EditReminderModal } from '../../components'
import { useDateTimePicker } from '../../hooks'
import { styles } from './styles'

import { remindersMock } from '../../data'

const RemindersScreen = () => {
  const [reminders, setReminders] = useState(remindersMock)
  const [reminder, setReminder] = useState({
    id: '',
    title: '',
    description: '',
    time: new Date(),
    notifications: true
  })
  const [reminderToEdit, setReminderToEdit] = useState(null)

  const triggerEditReminder = reminder => {
    setReminderToEdit(reminder)
    setEditModalVisible(true)
  }

  const [addModalVisible, setAddModalVisible] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)

  const { time, handleChangeTime } = useDateTimePicker()

  const handleChangeTitle = value => setReminder({ ...reminder, title: value })
  const handleChangeDesc = value => setReminder({ ...reminder, description: value })

  const handleCancelAdd = () => {
    setAddModalVisible(false)
    setReminder({
      id: '',
      title: '',
      description: '',
      time: new Date(),
      notifications: true
    })
  }
  const handleCancelEdit = () => {
    setEditModalVisible(false)
    setReminderToEdit(null)
  }

  const handleAddReminder = () => {
    if (reminder.title === '' || reminder.description === '') {
      Alert.alert('Please fill all fields', 'Title, description and time are required to create a reminder', [
        { text: 'OK', style: 'destructive' }
      ])
      return
    }

    setReminders([...reminders, { ...reminder, time, notifications: true, id: uuid.v4() }])
    setAddModalVisible(false)
    setReminder({
      id: '',
      title: '',
      description: '',
      time: '',
      notifications: true
    })

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
    const newReminders = reminders.map(reminder => {
      if (reminder.id === id) {
        reminder.title = data.title
        reminder.description = data.description
        reminder.time = data.time
      }
      return reminder
    })
    setReminders(newReminders)
    setEditModalVisible(false)
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
        triggerEditReminder={triggerEditReminder}
        handleDelete={handleDelete}
        handleNotifications={handleNotifications}
      />

      <AddItemButton modalVisible={addModalVisible} setModalVisible={setAddModalVisible} />

      <AddReminderModal
        open={addModalVisible}
        reminder={reminder}
        time={time}
        handleChangeTitle={handleChangeTitle}
        handleChangeDesc={handleChangeDesc}
        handleChangeTime={handleChangeTime}
        handleCancel={handleCancelAdd}
        handleAddReminder={handleAddReminder}
      />

      <EditReminderModal
        open={editModalVisible}
        reminder={reminderToEdit}
        handleCancel={handleCancelEdit}
        handleEdit={handleEdit}
      />
    </View>
  )
}

export default RemindersScreen
