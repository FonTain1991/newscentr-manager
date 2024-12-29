'use client'

import { useSignOutMutation } from '@/gql/signOut'
import { useEvent } from '@/hooks/useEvent'
import { Button } from 'antd'
import { memo } from 'react'

export const SignOut = memo(() => {
  const [signOut, { loading }] = useSignOutMutation()

  const onSignOut = useEvent(() => {
    signOut().then(() => {
      location.replace('/')
    })
  })

  return (
    <Button
      type='link'
      loading={loading}
      onClick={onSignOut}
    >
      Выход
    </Button>
  )
})