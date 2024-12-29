import { useEvent } from '@/hooks/useEvent'
import { createContext, memo, useEffect, useState } from 'react'
import { RenderForm } from './RenderForm'
import { IRecipeIngredientItem } from './fields'

interface IRecipeIngredient {
  onChange?: (event: any) => void
  value?: [IRecipeIngredientItem] | undefined
}

interface IRecipeIngredientContext {
  key?: string | number
  onRemoveRow?: (value: string | number) => void
}

export const RecipeIngredientContext = createContext<IRecipeIngredientContext>({})
export const RecipeIngredientProvider = ({ value, children }: { value: any, children: React.ReactNode }) => {
  return <RecipeIngredientContext.Provider value={value} children={children} />
}

export const RecipeIngredient = memo(({ onChange, value }: IRecipeIngredient) => {
  const [ingredients, setIngredients] = useState<Array<IRecipeIngredientItem | number>>(value ?? [])

  const addForm = useEvent(() => {
    setIngredients(prev => [...prev, prev.length + 1])
  })

  const onFormChange = useEvent((key: number, params: { ingredientId?: String, value?: String, note?: String }) => {
    const prevData: any = [...ingredients]
    if (params?.ingredientId === '' && !params?.value && params?.note === '') {
      prevData.splice(key, 1)
    } else {
      prevData.splice(key, 1, {
        ...prevData[key],
        ...params
      })
    }

    setIngredients(prevData)
    if (onChange) {
      onChange(prevData)
    }
  })

  const onRemoveRow = useEvent(key => {
    setIngredients(prev => {
      const array = [...prev]
      array.splice(key, 1)

      if (onChange) {
        onChange(array)
      }
      return array
    })
  })

  useEffect(() => {
    if (value === undefined) {
      return
    }
    setIngredients(value)
  }, [value])

  return (
    <div>
      {ingredients?.map((item, key) => (
        <RecipeIngredientProvider value={{ key, onRemoveRow }} key={key}>
          <RenderForm
            onChange={params => onFormChange(key, params)}
            value={item}
          />
        </RecipeIngredientProvider>
      ))}
      <div
        onClick={addForm}
        className='font-bold text-blue-500 cursor-pointer'
      >Добавить ингредиент</div>
    </div>
  )
})