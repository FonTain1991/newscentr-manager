'use client'

import { useEvent } from '@/hooks/useEvent'
import { translit } from '@/utils/translit'
import { EditOutlined } from '@ant-design/icons'
import { Button, Form, Input, Tooltip } from 'antd'
import { useParams } from 'next/navigation'
import { memo, useEffect, useState } from 'react'

interface IUrl {
  onChange: (value: any) => void,
  value?: string
  urlDeps: string
}

export const Url = memo((props: IUrl) => {
  const { id } = useParams()
  const [isDisabled, setIsDisabled] = useState<boolean>(true)
  const form = Form.useFormInstance()
  const fieldDeps = props?.urlDeps

  const onEditable = useEvent(() => setIsDisabled(prev => !prev))
  const onUpdate = useEvent(() => {
    const pageName = form.getFieldValue(fieldDeps)
    form.setFieldValue('url', translit(pageName).toLowerCase())
  })

  const field = Form.useWatch(fieldDeps, form)
  useEffect(() => {
    if (id) {
      return
    }
    onUpdate()
  }, [onUpdate, id, field])

  return (
    <div className='flex gap-x-4'>
      <Input {...props} disabled={isDisabled} className='!w-full' />
      <Tooltip title={isDisabled ? 'Включить' : 'Отключить'}>
        <Button onClick={onEditable} >
          <EditOutlined />
        </Button>
      </Tooltip>
    </div>
  )
})