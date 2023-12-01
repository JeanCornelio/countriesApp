import { useState } from 'react'

export const Form = () => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (inputValue.length <= 0) {
      return null
    }
    // setInputValue('')
  }

  const handleSetValue = ({ target }) => {
    const value = target.value
    setInputValue(value)
  }

  return {
    handleSetValue,
    inputValue,
    handleSubmit
  }
}
