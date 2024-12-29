import { Form } from 'antd'
import { memo, useEffect } from 'react'
import { RenderFormItems } from '../Form/RenderFormItems'
import { IRecipeIngredientItem, MAIN_FIELDS } from './fields'


interface IRenderForm {
  onChange: (event: any) => void
  value: IRecipeIngredientItem | undefined | number
}
export const RenderForm = memo(({ onChange, value }: IRenderForm) => {
  const [form] = Form.useForm()


  useEffect(() => {
    if (value === undefined) {
      return
    }
    form.setFieldsValue(value)
  }, [value, form])

  return (
    <Form
      layout='vertical'
      form={form}
      requiredMark={false}
      onValuesChange={onChange}
      className='!mb-6'
    >
      <div className='grid grid-cols-4 gap-4 items-end '>
        <RenderFormItems
          fields={MAIN_FIELDS}
          className='!mb-2 !text-sm'
        />
      </div>
    </Form>
  )
})