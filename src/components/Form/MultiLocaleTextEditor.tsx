import { DEFAULT_LOCALE, LOCALES } from '@/constants'
import { Input, Tabs } from 'antd'
import { memo, useMemo } from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { mediaLibraryPlugin } from './Editor'
import { useEvent } from '@/hooks/useEvent'

interface IMultiLocaleField {
  onChange?: (object: any) => void,
  value?: any
}

export const MultiLocaleTextEditor = memo(({ onChange, value }: IMultiLocaleField) => {
  const setup = useEvent(editor => {
    mediaLibraryPlugin({ editor })
  })

  const items = useMemo(() => {
    return LOCALES.map(({ label, value: key }) => {
      return {
        key,
        label,
        children: (
          <Editor
            apiKey={process.env.NEXT_PUBLIC_TINYMCE_KEY}
            onEditorChange={val => {
              if (onChange) {
                onChange({ ...value, [key]: val })
              }
            }}
            value={value?.[key]}
            init={{
              height: 700,
              plugins: [
                'advlist',
                'autolink',
                'lists',
                'link',
                'image',
                'charmap',
                'preview',
                'anchor',
                'searchreplace',
                'visualblocks',
                'code',
                'fullscreen',
                'insertdatetime',
                'media',
                'table',
                'code',
                'help',
                'wordcount',
                'medialibrary'
              ],
              toolbar:
                'undo redo | styles | image | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link medialibrary',
              content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
              setup
            }}
          />
        )
      }
    })
  }, [value, onChange, setup])

  return (
    <>
      <Tabs
        type='card'
        defaultActiveKey={DEFAULT_LOCALE}
        items={items}
        size='small'
      />
      <div id='filesManager' />
    </>
  )
})