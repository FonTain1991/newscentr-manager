import { useEvent } from '@/hooks/useEvent'
import { Editor } from '@tinymce/tinymce-react'
import { memo } from 'react'
import { mediaLibraryPlugin } from './Editor'

interface ITextareaEditor {
  onChange: (...args: any[]) => string
  value: any | object | undefined
}

export const TextareaEditor = memo((props: ITextareaEditor) => {
  const { onChange, value } = props

  const setup = useEvent(editor => {
    mediaLibraryPlugin({ editor })
  })

  return (
    <>
      <Editor
        apiKey={process.env.NEXT_PUBLIC_TINYMCE_KEY}
        onEditorChange={onChange}
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
        value={value}
      />
      <div id='filesManager' />
    </>
  )
})
