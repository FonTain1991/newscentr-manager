
import { AuthForm, FormWrap } from '@/components/Form'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Страница авторизации'
}

export default function Login() {
  return (
    <FormWrap title='Авторизация' >
      <AuthForm />
    </FormWrap>
  )
}