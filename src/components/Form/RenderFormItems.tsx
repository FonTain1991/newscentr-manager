import { IRenderFormItem } from '@/types/renderFormItem'
import { Form } from 'antd'
import { memo } from 'react'
import { FormItemLabel } from './FormItemLabel'

export const RenderFormItems = memo(({ fields, className }: { fields: IRenderFormItem[], className?: string }) => {
  return (
    fields.map((field: IRenderFormItem, key: number) => {
      const Field = field.component
      return (
        <Form.Item
          key={key}
          label={<FormItemLabel text={String(field.label)} isShowTooltip={field.isShowTooltip} />}
          name={field.name}
          rules={field.rules}
          className={className}
          validateFirst
        >
          <Field {...field.props} />
        </Form.Item>
      )
    })
  )
})