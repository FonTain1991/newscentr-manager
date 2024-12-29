import { useEvent } from '@/hooks/useEvent'
import { DeleteOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import { memo, useContext } from 'react'
import { RecipeIngredientContext } from './RecipeIngredient'

export const DeleteRow = memo(props => {
  const { key, onRemoveRow } = useContext(RecipeIngredientContext)
  const onClick = useEvent(() => {
    if (onRemoveRow) {
      onRemoveRow(String(key))
    }
  })

  return (
    <Button
      {...props}
      onClick={onClick}
      danger
      type='primary'
      icon={<DeleteOutlined />}
    />
  )
})