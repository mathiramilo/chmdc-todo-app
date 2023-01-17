import { useState } from 'react'

const useDropdown = dropdownItems => {
  const [dropdownOpen, setIsDropdownOpen] = useState(false)
  const [dropdownValue, setDropdownValue] = useState(null)
  const [items, setItems] = useState(dropdownItems)

  return {
    dropdownOpen,
    setIsDropdownOpen,
    dropdownValue,
    setDropdownValue,
    items,
    setItems
  }
}

export default useDropdown
