import { memo } from 'react'

export const TotalResult = memo(({ text }: { text: number | string | undefined }) => {
  if (text === undefined) {
    return null
  }

  return (
    <div className='text-sm mr-3'>Результатов: {text}</div>
  )
}) 