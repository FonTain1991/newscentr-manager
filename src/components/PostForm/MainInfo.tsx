import { memo } from 'react'
import { RenderFormItems } from '../Form/RenderFormItems'
import { MAIN_FIELDS } from './fields'

export const MainInfo = memo(() => {
  return (
    <RenderFormItems
      fields={MAIN_FIELDS}
      className='!mb-5'
    />
  )
})