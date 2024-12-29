import { useRemoveFileMutation } from '@/gql/removeFile'
import { useEvent } from '@/hooks/useEvent'
import { Button, Popconfirm } from 'antd'
import { memo } from 'react'

export const RemoveFile = memo(({ id }: { id: string }) => {
  const [removeFileAction] = useRemoveFileMutation({
    refetchQueries: ['getListByParentId', 'getFileManagerAllParents'],
    awaitRefetchQueries: true
  })

  const confirm = useEvent(async () => {
    await removeFileAction({
      variables: { id }
    })
  })
  return (
    <Popconfirm
      title='Удалить'
      description='Вы уверены, что хотите удалить?'
      onConfirm={confirm}
      okText='Да'
      cancelText='Нет'
    >
      <Button danger type='link'>Удалить</Button>
    </Popconfirm>
  )
})