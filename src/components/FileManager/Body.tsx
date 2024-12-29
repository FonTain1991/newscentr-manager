import { folderIdVar } from '@/apollo/vars'
import { FILE_MANAGER_TYPES, LIST_LOCALE } from '@/constants'
import { useGetFileManagerAllParentsSuspenseQuery } from '@/gql/getFileManagerAllParents'
import { useGetListByParentIdQuery } from '@/gql/getListByParentId'
import { useEvent } from '@/hooks/useEvent'
import { FolderOutlined, HomeOutlined } from '@ant-design/icons'
import { useReactiveVar } from '@apollo/client'
import { Dropdown, Empty, Tooltip } from 'antd'
import Image from 'next/image'
import { memo, useMemo } from 'react'
import { Breadcrumbs } from './Breadcrumbs'
import { useFileManager } from './FileManagerContext'
import { RemoveFile } from './RemoveFile'

export const Body = memo(() => {
  const folderId = useReactiveVar(folderIdVar)
  const { data } = useGetListByParentIdQuery({
    variables: { parentId: folderId }
  })
  const { data: dataParents } = useGetFileManagerAllParentsSuspenseQuery({
    variables: { parentId: folderId }
  })
  const parents = dataParents?.getFileManagerAllParents


  const { editor, closeDialog, onChange } = useFileManager()

  const list = useMemo(() => {
    if (data?.getListByParentId === undefined || data?.getListByParentId === null) {
      return []
    }
    const folderList = data.getListByParentId.filter(v => v.type === FILE_MANAGER_TYPES.FOLDER)
    const imagesList = data.getListByParentId.filter(v => v.type === FILE_MANAGER_TYPES.IMAGE)
    return [...folderList, ...imagesList]
  }, [data?.getListByParentId])

  const onClickFile = useEvent(item => {
    if (item.type === FILE_MANAGER_TYPES.FOLDER) {
      folderIdVar(item.id)
      return
    }
    if (item.type === FILE_MANAGER_TYPES.IMAGE) {
      if (editor) {
        editor.insertContent(`<img src="/api/images/${item.value}" width='960' height='540' loading="lazy">`)
      }

      if (onChange) {
        onChange(String(item.value))
      }

      if (closeDialog) {
        closeDialog()
      }
    }
  })

  const onBreadcrumbItem = useEvent(id => folderIdVar(id))

  const items = useMemo(() => {
    if (!parents?.length) {
      return [{ title: <HomeOutlined /> }]
    }
    const result = parents.map(v => {
      return {
        title: <span onClick={() => onBreadcrumbItem(v.id)} className='cursor-pointer'>{v.name}</span>
      }
    })

    return [{ title: <HomeOutlined onClick={() => onBreadcrumbItem(null)} /> }, ...result]
  }, [parents, onBreadcrumbItem])


  const contextMenu = useEvent(item => {
    return [{
      label: <RemoveFile id={item.id} />,
      key: '1',
    }]
  })

  return (
    <div>
      <Breadcrumbs items={items} />
      {!list?.length && (
        <div className='flex items-center justify-center h-96'>
          <Empty description={LIST_LOCALE.emptyText} />
        </div>
      )}
      {!!list?.length && (
        <div className='my-8 overflow-y-auto h-96 grid grid-cols-5 gap-4'>
          {list.map(item => {
            return (
              <Dropdown
                key={item.id}
                menu={{ items: contextMenu(item) }}
                trigger={['contextMenu']}
              >
                <Tooltip title={item.name}>
                  <div
                    onClick={() => onClickFile(item)}
                    className='flex flex-col items-center justify-center rounded-md cursor-pointer hover:bg-slate-200 shadow-md overflow-hidden max-h-40'
                  >
                    <div className='relative w-32 h-32 flex items-center justify-center'>
                      {item.type === FILE_MANAGER_TYPES.FOLDER && <FolderOutlined className='text-3xl' />}
                      {item.type === FILE_MANAGER_TYPES.IMAGE && (
                        <Image
                          fill
                          src={`/api/images/${item.value}`}
                          alt={String(item.name)}
                          objectFit='cover'
                        />
                      )}
                    </div>
                    <div className='text-center text-xs mt-2' >{item.name}</div>
                  </div>
                </Tooltip>
              </Dropdown>
            )
          })}
        </div>
      )}
    </div>
  )
})