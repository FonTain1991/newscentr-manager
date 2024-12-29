import { memo } from 'react'
import { RenderFormItems } from '../Form/RenderFormItems'
import { SETTING_FIELDS } from './fields'

export const Settings = memo(() => {
  return (
    <RenderFormItems
      fields={SETTING_FIELDS}
      className='!mb-4'
    />
  )
})