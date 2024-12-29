'use client'

import { useEvent } from '@/hooks/useEvent'
import { Button } from 'antd'
import { useRouter } from 'next/navigation'
import { memo } from 'react'

export const InvalidRecoveryToken = memo(() => {
  const { replace } = useRouter()
  const onGoToRecoveryPassword = useEvent(() => {
    replace('/auth/recovery')
  })

  return (
    <>
      <p className='text-sm font-medium text-neutral-400 mt-2'>Срок действия токена истек. Повторите еще раз</p>
      <Button
        onClick={onGoToRecoveryPassword}
        type='primary'
        className='w-full !h-10 !text-base !font-normal mt-52'
      >
        Назад
      </Button>
    </>
  )
})