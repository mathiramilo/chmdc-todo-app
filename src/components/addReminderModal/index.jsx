import React from 'react'
import { View, Text, TouchableWithoutFeedback, TextInput } from 'react-native'
import CustomModal from '../customModal'
import { styles } from './styles'

const AddReminderModal = ({
  open,
  error,
  reminder,
  handleChangeTitle,
  handleChangeDesc,
  handleChangeTime,
  handleCancel,
  handleAddReminder
}) => {
  return (
    <CustomModal open={open}>
      <Text style={styles.modalHeading}>Add Reminder</Text>

      <View style={styles.modalForm}>
        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Title</Text>
          <TextInput onChangeText={handleChangeTitle} value={reminder.title} style={styles.modalFormInput} />
        </View>

        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Description</Text>
          <TextInput onChangeText={handleChangeDesc} value={reminder.description} style={styles.modalFormInput} />
        </View>

        <View style={styles.modalFormGroup}>
          <Text style={styles.modalFormLabel}>Time</Text>
          <TextInput onChangeText={handleChangeTime} value={reminder.time} style={styles.modalFormInput} />
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

          <TouchableWithoutFeedback onPress={handleAddReminder}>
            <View style={[styles.modalFormAction, styles.primaryButton, { marginLeft: 6 }]}>
              <Text style={styles.modalFormActionText}>Add</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </CustomModal>
  )
}

export default AddReminderModal
