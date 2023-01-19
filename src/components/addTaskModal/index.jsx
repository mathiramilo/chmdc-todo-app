import {
  TouchableWithoutFeedback,
  TextInput,
  Modal,
  Text,
  View,
  Keyboard
} from 'react-native'
import DropDownPicker from 'react-native-dropdown-picker'
import { styles } from './styles'

const AddTaskModal = ({
  open,
  handleChangeTitle,
  handleChangeDesc,
  task,
  error,
  handleCancel,
  handleAddTask,
  dropdownOpen,
  dropdownValue,
  items,
  setIsDropdownOpen,
  setDropdownValue,
  setItems
}) => {
  return (
    <Modal visible={open} transparent>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Text style={styles.modalHeading}>Add Task</Text>

            <View style={styles.modalForm}>
              <View style={styles.modalFormGroup}>
                <Text style={styles.modalFormLabel}>Title</Text>
                <TextInput
                  onChangeText={handleChangeTitle}
                  value={task.title}
                  style={styles.modalFormInput}
                />
              </View>

              <View style={styles.modalFormGroup}>
                <Text style={styles.modalFormLabel}>Description</Text>
                <TextInput
                  onChangeText={handleChangeDesc}
                  value={task.description}
                  style={styles.modalFormInput}
                />
              </View>

              <View style={styles.modalFormGroup}>
                <Text style={styles.modalFormLabel}>Priority</Text>
                <DropDownPicker
                  open={dropdownOpen}
                  value={dropdownValue}
                  items={items}
                  setOpen={setIsDropdownOpen}
                  setValue={setDropdownValue}
                  setItems={setItems}
                  style={styles.modalFormInput}
                />
              </View>

              {error && (
                <View style={styles.modalFormError}>
                  <Text style={styles.modalFormErrorText}>{error}</Text>
                </View>
              )}

              <View style={styles.modalFormActions}>
                <TouchableWithoutFeedback onPress={handleCancel}>
                  <View
                    style={[
                      styles.modalFormAction,
                      styles.secondaryButton,
                      { marginRight: 6 }
                    ]}
                  >
                    <Text
                      style={[styles.modalFormActionText, { color: '#FA824C' }]}
                    >
                      Cancel
                    </Text>
                  </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={handleAddTask}>
                  <View
                    style={[
                      styles.modalFormAction,
                      styles.primaryButton,
                      { marginLeft: 6 }
                    ]}
                  >
                    <Text style={styles.modalFormActionText}>Add</Text>
                  </View>
                </TouchableWithoutFeedback>
              </View>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default AddTaskModal
