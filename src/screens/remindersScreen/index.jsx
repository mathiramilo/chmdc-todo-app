import React, { useState, useRef } from 'react'
import { Alert, View } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { addReminder, toggleNotifications, editReminder, removeReminder } from '../../store/actions/reminders.actions'

import { useDateTimePicker } from '../../hooks'
import { Header, AddItemButton, AddReminderModal, RemindersList, EditReminderModal } from '../../components'

import { styles } from './styles'

const RemindersScreen = () => {
  const dispatch = useDispatch()
  const reminders = useSelector(state => state.reminders.items)

  const [reminder, setReminder] = useState({
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

    dispatch(addReminder({ ...reminder, time: `${time}`, notifications: true }))

    setAddModalVisible(false)
    setReminder({
      title: '',
      description: '',
      time: '',
      notifications: true
    })

    if (reminder.length > 1) flatListRef.current.scrollToEnd()
  }

  const handleNotifications = id => {
    dispatch(toggleNotifications(id))
  }
  const handleEdit = (id, data) => {
    dispatch(editReminder(id, data))
    setEditModalVisible(false)
  }
  const handleDelete = id => {
    return Alert.alert('Delete reminder', 'Are you sure you want to delete this reminder?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => deleteReminder(id) }
    ])
  }
  const deleteReminder = id => {
    dispatch(removeReminder(id))
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
