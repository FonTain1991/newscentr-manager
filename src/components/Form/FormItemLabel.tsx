import { Tooltip } from 'antd'
import { memo } from 'react'

export const FormItemLabel = memo(({ text, isShowTooltip }: { text: string, isShowTooltip?: boolean }) => {
  if (isShowTooltip) {
    return (
      <Tooltip title={text} color='cyan'>
        <div className='text-xs font-semibold leading-4 mb-0.5 color-black truncate'>{text}</div>
      </Tooltip>
    )
  }
  return <div className='text-xs font-semibold leading-4 mb-0.5 color-black truncate'>{text}</div>
})