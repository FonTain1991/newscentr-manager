import { FormWrap, RecoveryForm } from '@/components/Form'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Восстановление пароля'
}

export default function Recovery() {
  return (
    <FormWrap title='Восстановление пароля' >
      <RecoveryForm />
    </FormWrap>
  )
}