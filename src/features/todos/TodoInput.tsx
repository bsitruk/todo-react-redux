import { useAppDispatch } from 'app/store'
import React, { FormEvent, useRef, useState } from 'react'
import { createTodo } from './slices'

const TodoInput = () => {
  const input = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState(false)
  const dispatch = useAppDispatch()

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const text = input.current?.value || ''
    if (!text.trim()) return

    setLoading(true)
    await dispatch(createTodo({ text }))
    setLoading(false)

    input.current?.focus()
  }

  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="New task" ref={input} />
      <input type="submit" value="Add" disabled={loading} />
      {loading && 'Chargement...'}
    </form>
  )
}

export default React.memo(TodoInput)
