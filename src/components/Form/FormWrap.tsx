
import { memo } from 'react'

interface IFormWrapProps {
  children: React.ReactNode,
  title: string
}

export const FormWrap = memo((props: IFormWrapProps) => {
  const { children, title } = props
  return (
    <div className='w-[28rem] bg-white p-[52px] rounded-[32px] flex items-center flex-col'>

      <p className='text-3.5xl font-bold text-black text-center'>{title}</p>
      {children}
    </div>
  )
})