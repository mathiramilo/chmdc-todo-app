import React, { useState, useRef } from 'react'
import { View, Alert } from 'react-native'

import { useSelector, useDispatch } from 'react-redux'
import { addTask, toggleDone, editTask, removeTask } from '../../store/actions/tasks.actions'

import { AddTaskModal, Header, AddItemButton, TasksList, EditTaskModal } from '../../components'
import { useDropdown } from '../../hooks'

import { styles } from './styles'

const dropdownItems = [
  { label: 'Critical', value: 'critical' },
  { label: 'High', value: 'high' },
  { label: 'Medium', value: 'medium' },
  { label: 'Low', value: 'low' }
]

const TodoScreen = () => {
  const dispatch = useDispatch()
  const tasks = useSelector(state => state.tasks.items)

  const [task, setTask] = useState({
    title: '',
    description: '',
    priority: '',
    done: false
  })
  const [taskToEdit, setTaskToEdit] = useState(null)

  const triggerEditTask = task => {
    setTaskToEdit(task)
    setEditModalVisible(true)
  }

  const [addModalVisible, setAddModalVisible] = useState(false)
  const [editModalVisible, setEditModalVisible] = useState(false)

  const { dropdownOpen, setIsDropdownOpen, dropdownValue, setDropdownValue, items, setItems } =
    useDropdown(dropdownItems)

  const handleChangeTitle = value => setTask({ ...task, title: value })
  const handleChangeDesc = value => setTask({ ...task, description: value })

  const handleCancelAdd = () => {
    setAddModalVisible(false)
    setTask({
      title: '',
      description: '',
      priority: '',
      done: false
    })
    setDropdownValue(null)
  }
  const handleCancelEdit = () => {
    setEditModalVisible(false)
    setTaskToEdit(null)
  }

  const handleAddTask = () => {
    if (task.title === '' || task.description === '' || dropdownValue === null) {
      Alert.alert('Please fill all fields', 'Title, description and time are required to create a task', [
        { text: 'OK', style: 'destructive' }
      ])
      return
    }

    dispatch(addTask({ ...task, priority: dropdownValue }))

    setAddModalVisible(false)
    setTask({
      title: '',
      description: '',
      priority: '',
      done: false
    })
    setDropdownValue(null)

    if (tasks.length > 1) flatListRef.current.scrollToEnd()
  }

  const handleCheck = id => {
    dispatch(toggleDone(id))
  }
  const handleEdit = (id, data) => {
    dispatch(editTask(id, data))
    setEditModalVisible(false)
  }
  const handleDelete = id => {
    return Alert.alert('Delete task', 'Are you sure you want to delete this task?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Delete', style: 'destructive', onPress: () => deleteTask(id) }
    ])
  }
  const deleteTask = id => {
    dispatch(removeTask(id))
  }

  const flatListRef = useRef()

  return (
    <>
      <View style={styles.container}>
        <Header title="Tasks List" subtitle="Add, delete or mark as done a task" />

        <TasksList
          tasks={tasks}
          flatListRef={flatListRef}
          triggerEditTask={triggerEditTask}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />

        <AddItemButton modalVisible={addModalVisible} setModalVisible={setAddModalVisible} />

        <AddTaskModal
          open={addModalVisible}
          handleChangeTitle={handleChangeTitle}
          handleChangeDesc={handleChangeDesc}
          task={task}
          dropdownOpen={dropdownOpen}
          setIsDropdownOpen={setIsDropdownOpen}
          dropdownValue={dropdownValue}
          setDropdownValue={setDropdownValue}
          items={items}
          setItems={setItems}
          handleCancel={handleCancelAdd}
          handleAddTask={handleAddTask}
        />

        <EditTaskModal
          open={editModalVisible}
          task={taskToEdit}
          handleCancel={handleCancelEdit}
          handleEdit={handleEdit}
        />
      </View>
    </>
  )
}

export default TodoScreen
