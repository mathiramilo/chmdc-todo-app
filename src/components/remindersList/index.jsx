import React from 'react'
import { View, Text, FlatList, Image } from 'react-native'
import ReminderCard from '../reminderCard'
import { styles } from './styles'

const RemindersList = ({ reminders, flatListRef, triggerEditReminder, handleDelete, handleNotifications }) => {
  const renderItem = ({ item }) => (
    <ReminderCard
      item={item}
      triggerEditReminder={triggerEditReminder}
      handleDelete={handleDelete}
      handleNotifications={handleNotifications}
    />
  )

  return (
    <View style={styles.listContainer}>
      {reminders.length === 0 ? (
        <View style={styles.noContentContainer}>
          <Image style={styles.noContentImg} source={require('../../assets/warning.png')} />
          <Text style={styles.noContentText}>No Reminders</Text>
        </View>
      ) : (
        <FlatList
          ref={flatListRef}
          data={reminders}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  )
}

export default RemindersList
