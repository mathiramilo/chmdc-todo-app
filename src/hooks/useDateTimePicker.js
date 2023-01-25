import { useState } from 'react'

const useDateTimePicker = () => {
  const [time, setTime] = useState(new Date())
  const handleChangeTime = (evt, selectedTime) => {
    const currentTime = selectedTime || time
    setTime(currentTime)
  }

  return { time, setTime, handleChangeTime }
}

export default useDateTimePicker
