import React, { useEffect, useState } from 'react'
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'
import CustomModal from '../customModal'
import { styles } from './styles'
import { useDateTimePicker } from '../../hooks'

const EditReminderModal = ({ open, reminder, handleCancel, handleEdit }) => {
  const [newReminder, setNewReminder] = useState(reminder)
  const [error, setError] = useState('')

  const { time, setTime, handleChangeTime } = useDateTimePicker()

  const handleChangeTitle = value => setNewReminder({ ...newReminder, title: value })
  const handleChangeDesc = value => setNewReminder({ ...newReminder, description: value })

  useEffect(() => {
    setNewReminder(reminder)
    reminder?.date ? setTime(new Date(reminder.date)) : setTime(new Date())
  }, [reminder])

  const handleEditReminder = () => {
    if (newReminder?.title === '' || newReminder?.description === '') {
      setError('Please fill all fields')
      setTimeout(() => {
        setError(null)
      }, 3000)
      return
    }

    handleEdit(newReminder.id, { ...newReminder, time })
  }

  return (
    <CustomModal open={open}>
      <Text style={styles.modalHeading}>Edit Reminder</Text>

      <View style={styles.modalForm}>
        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Title</Text>
          <TextInput onChangeText={handleChangeTitle} value={newReminder?.title} style={styles.modalFormInput} />
        </View>

        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Description</Text>
          <TextInput onChangeText={handleChangeDesc} value={newReminder?.description} style={styles.modalFormInput} />
        </View>

        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Time</Text>
          <DateTimePicker
            value={time}
            mode="time"
            is24Hour={true}
            onChange={handleChangeTime}
            display="spinner"
            style={styles.timePicker}
          />
        </View>

        {error && (
          <View style={styles.modalFormError}>
            <Text style={styles.modalFormErrorText}>{error}</Text>
          </View>
        )}

        <View style={styles.modalFormActions}>
          <TouchableWithoutFeedback onPress={handleCancel}>
            <View style={[styles.modalFormAction, styles.secondaryButton, { marginRight: 6 }]}>
              <Text style={[styles.modalFormActionText, styles.modalFormActionTextSecondary]}>Cancel</Text>
            </View>
          </TouchableWithoutFeedback>

          <TouchableWithoutFeedback onPress={handleEditReminder}>
            <View style={[styles.modalFormAction, styles.primaryButton, { marginLeft: 6 }]}>
              <Text style={styles.modalFormActionText}>Save</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </CustomModal>
  )
}

export default EditReminderModal
