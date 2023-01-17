import { useRef } from 'react'
import { FlatList, Text, View } from 'react-native'
import { TaskCard } from '../taskCard'
import { styles } from './styles'

const TasksList = ({ tasks, handleCheck, handleEdit, handleDelete }) => {
  const renderItem = ({ item }) => (
    <TaskCard
      item={item}
      handleCheck={handleCheck}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  )

  const elementRef = useRef()

  return (
    <View style={styles.listContainer}>
      {tasks.length === 0 ? (
        <View style={styles.noContentContainer}>
          <Text style={styles.noContentText}>No tasks</Text>
        </View>
      ) : (
        <FlatList
          ref={elementRef}
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          style={styles.itemList}
        />
      )}
    </View>
  )
}

export default TasksList
