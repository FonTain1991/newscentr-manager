import { memo } from 'react'
import { RenderFormItems } from '../Form/RenderFormItems'
import { CEO_FIELDS } from './fields'

export const CeoInfo = memo(() => {
  return (
    <RenderFormItems
      fields={CEO_FIELDS}
      className='!mb-4'
    />
  )
})