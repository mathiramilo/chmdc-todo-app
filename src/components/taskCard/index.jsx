import React from 'react'
import { Image, TouchableWithoutFeedback, Text, View } from 'react-native'
import { styles } from './styles'

const TaskCard = ({ item, triggerEditTask, handleCheck, handleDelete }) => {
  return (
    <View style={styles.itemCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{item.title}</Text>
        <Text style={[styles.cardPriority, styles[item.priority]]}>{item.priority}</Text>
      </View>

      <Text style={styles.cardDescription}>{item.description}</Text>

      <View style={styles.cardFooter}>
        <View style={styles.cardStatus}>
          <Image
            style={styles.cardActionIcon}
            source={item.done ? require('../../assets/done.png') : require('../../assets/pending.png')}
          />
          <Text style={item.done ? styles.taskDone : styles.taskPending}>{item.done ? 'Done' : 'Pending'}</Text>
        </View>

        <View style={styles.cardActions}>
          <TouchableWithoutFeedback onPress={() => handleCheck(item.id)}>
            <View style={styles.cardActionButton}>
              {item.done ? (
                <Image style={styles.cardActionIcon} source={require('../../assets/uncheck.png')} />
              ) : (
                <Image style={styles.cardActionIcon} source={require('../../assets/check.png')} />
              )}
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => triggerEditTask(item)}>
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

export default TaskCard
