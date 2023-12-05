import { useState } from 'react'

export const useForm = (inputValue) => {
  const [input, setInputValue] = useState(inputValue)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.length <= 0) {
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
    input,
    handleSubmit
  }
}
