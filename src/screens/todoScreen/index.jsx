import React, { useState, useRef } from 'react'
import { View, Alert } from 'react-native'
import uuid from 'react-native-uuid'
import { AddTaskModal, Header, AddItemButton, TasksList, EditTaskModal } from '../../components'
import { useDropdown } from '../../hooks'
import { styles } from './styles'

import { tasksMock } from '../../data'

const dropdownItems = [
  { label: 'Critical', value: 'critical' },
  { label: 'High', value: 'high' },
  { label: 'Medium', value: 'medium' },
  { label: 'Low', value: 'low' }
]

const TodoScreen = () => {
  const [tasks, setTasks] = useState(tasksMock)
  const [task, setTask] = useState({
    id: '',
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
      id: '',
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

    setTasks([...tasks, { ...task, priority: dropdownValue, id: uuid.v4() }])
    setAddModalVisible(false)
    setTask({
      id: '',
      title: '',
      description: '',
      priority: '',
      done: false
    })
    setDropdownValue(null)

    if (tasks.length > 1) flatListRef.current.scrollToEnd()
  }

  const handleCheck = id => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.done = !task.done
      }
      return task
    })
    setTasks(newTasks)
  }
  const handleEdit = (id, data) => {
    const newTasks = tasks.map(task => {
      if (task.id === id) {
        task.title = data.title
        task.description = data.description
        task.priority = data.priority
      }
      return task
    })
    setTasks(newTasks)
    setEditModalVisible(false)
  }
  const handleDelete = id => {
    const newTasks = tasks.filter(task => task.id !== id)
    setTasks(newTasks)
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
