import React, { useState, useRef } from 'react'
import { View, Text, FlatList } from 'react-native'
import uuid from 'react-native-uuid'
import { Header, TaskCard } from '../../components'
import { styles } from './styles'

const RemindersScreen = () => {
  const [reminders, setReminders] = useState([])
  const [reminder, setReminder] = useState({
    id: '',
    title: '',
    description: '',
    time: ''
  })
  const [error, setError] = useState(null)

  const handleAddReminder = () => {
    if (reminder.title === '' || reminder.description === '') {
      setError('Please fill all fields')
      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }

    setReminders([...reminders, { ...reminder, time: '20:30', id: uuid.v4() }])
    // setModalVisible(!modalVisible)
    setReminder({
      id: '',
      title: '',
      description: '',
      priority: '',
      done: false
    })
    setError(null)

    if (reminder.length > 1) flatList.current.scrollToEnd()
  }
  const handleEdit = () => {}
  const handleDelete = () => {}

  const renderItem = ({ item }) => <TaskCard item={item} handleEdit={handleEdit} handleDelete={handleDelete} />

  const flatList = useRef()

  const RemindersList = () => (
    <View style={styles.listContainer}>
      {reminders.length === 0 ? (
        <View style={styles.noContentContainer}>
          <Text style={styles.noContentText}>No Reminders</Text>
        </View>
      ) : (
        <FlatList
          ref={flatList}
          data={reminders}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  )

  return (
    <View style={styles.container}>
      <Header title="CHMDC Reminders" subtitle="Add or delete Reminders" />

      <RemindersList />
    </View>
  )
}

export default RemindersScreen
