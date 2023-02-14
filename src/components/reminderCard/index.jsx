import React from 'react'
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native'
import { styles } from './styles'

const ReminderCard = ({ item, triggerEditReminder, handleDelete, handleNotifications }) => {
  return (
    <View style={styles.itemCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={styles.cardTime}>{new Date(item.time).toLocaleTimeString().substring(0, 5)}</Text>
      </View>

      <Text style={styles.cardDescription}>{item.description}</Text>

      <View style={styles.cardFooter}>
        <TouchableWithoutFeedback onPress={() => handleNotifications(item.id)}>
          <View style={styles.cardStatus}>
            <Image
              style={[styles.cardActionIcon, styles.notificationsIcon]}
              source={
                item.notifications
                  ? require('../../assets/notifications.png')
                  : require('../../assets/notifications-off.png')
              }
            />
            <Text style={styles.alarmText}>Notifications</Text>
          </View>
        </TouchableWithoutFeedback>

        <View style={styles.cardActions}>
          <TouchableWithoutFeedback onPress={() => triggerEditReminder(item)}>
            <View style={styles.cardActionButton}>
              <Image style={styles.cardActionIcon} source={require('../../assets/edit.png')} />
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => handleDelete(item.id)}>
            <View style={styles.cardActionButton}>
              <Image style={styles.cardActionIcon} source={require('../../assets/delete.png')} />
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </View>
  )
}

export default ReminderCard
