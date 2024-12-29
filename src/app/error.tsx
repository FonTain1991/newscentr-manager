'use client'

import { ApolloError } from '@apollo/client'
import { Alert, Button } from 'antd'
import { redirect } from 'next/navigation'

interface PropsPageError {
  error: Error
  reset: () => void
}

function ThrowError({ error }: { error: Error }) {
  if (error) {
    throw error
  }

  return null
}

export default function Error({ error, reset }: PropsPageError) {
  if (error.message === 'FORBIDDEN') {
    redirect(process.env.NEXT_PUBLIC_FORBIDDEN_REDIRECT || '/')
  }

  if (error.message === 'NOT_FOUND') {
    redirect('/404')
  }

  if (error instanceof ApolloError) {
    if (error.networkError) {
      return (
        <div className='absolute left-0 right-0 bottom-0 top-0 flex items-center justify-center'>
          <Alert
            type='error'
            className='w-96'
            message='Не удалось совершить действие, попробуйте позже'
            action={
              <Button onClick={reset}>
                Повторить
              </Button>
            } />
        </div>
      )
    }
  }

  return (
    <Alert.ErrorBoundary>
      <ThrowError error={error} />
    </Alert.ErrorBoundary>
  )
}