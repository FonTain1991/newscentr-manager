import { FormWrap, NewPasswordForm } from '@/components/Form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Новый пароль'
}

export default function Recovery() {
  return (
    <FormWrap title='Новый пароль' >
      <NewPasswordForm />
    </FormWrap>
  )
}