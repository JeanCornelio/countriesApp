import { useEffect } from 'react'
import { Form } from '../hook/Form'
import { useDispatch, useSelector } from 'react-redux'
import { setInputValue } from '../store/countries/CountriesSlice'

export const InputSearch = ({ placeholder }) => {
  const { inputValue } = useSelector(state => state.countries)
  const { handleSetValue, input, handleSubmit } = Form(inputValue)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setInputValue(input))
  }, [input, dispatch])

  return (
    <form className='w-full px-5' onSubmit={handleSubmit}>
      <input
        type='text'
        className='transition ease-in-out delay-50  w-full bg-cyan-800 border border-cyan-700 py-2 text-white rounded-lg text-sm block p-2.5'
        placeholder={placeholder}
        value={inputValue}
        onChange={handleSetValue}
      />
    </form>
  )
}
