import { Button } from 'antd'
import Link from 'next/link'
import { FC, ReactNode, memo } from 'react'
import { Search } from '../Form'

interface IContentList {
  children: ReactNode,
  title: string,
  onSearch?: (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => void,
  searchValue?: string,
  linkToCreatePage: string,
  extra?: ReactNode,
  textNewAction: string
}

export const ContentList: FC<IContentList> = memo(({ children, title, onSearch, searchValue, linkToCreatePage, extra, textNewAction }) => {
  return (
    <>
      <div className='mb-4 flex justify-between items-center'>
        <div className='text-2xl font-bold text-black'>{title}</div>
        <div className='flex justify-end items-center'>
          {extra && extra}
          <Search onSearch={onSearch} value={searchValue} />
          <Link href={linkToCreatePage} className='ml-3'>
            <Button type='primary' children={textNewAction} />
          </Link>
        </div>
      </div>
      {children}
    </>
  )
})