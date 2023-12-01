import { useEffect } from 'react'
import { Form } from '../hook/Form'

export const InputSearch = ({ getCountrieName }) => {
  const {
    handleSetValue,
    inputValue, handleSubmit
  } = Form()

  useEffect(() => {
    getCountrieName(inputValue)
  }, [inputValue])

  return (
    <form className='w-full px-5' onSubmit={handleSubmit}>
      <input type='text' className='transition ease-in-out delay-50  w-full bg-cyan-800 border border-cyan-700 py-2 text-white rounded-lg text-sm block p-2.5' placeholder='Search...' value={inputValue} onChange={handleSetValue} />
    </form>
  )
}
