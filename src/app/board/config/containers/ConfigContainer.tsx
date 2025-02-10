'use client'
import React, {
  useState,
  useCallback,
  useLayoutEffect,
  useActionState,
} from 'react'
import { updateBoard } from '../services/actions'
import ConfigForm from '../components/ConfigForm'
import useMenuCode from '@/app/global/hooks/useMenuCode'

const ConfigContainer = ({ bid }: { bid?: string } | undefined) => {
  useMenuCode('board', 'configWrite')
  const [form, setForm] = useState({})
  const actionState = useActionState(updateBoard)

  const onChange = useCallback((e) => {
    setForm((form) => ({ ...form, [e.target.name]: e.target.value }))
  }, [])

  return (
    <ConfigForm form={form} onChange={onChange} actionState={actionState} />
  )
}

export default React.memo(ConfigContainer)
