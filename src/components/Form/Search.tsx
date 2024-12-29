'use client'

import { useEvent } from '@/hooks/useEvent'
import { Button, Input } from 'antd'
import { memo, useState } from 'react'

interface ISearch {
  onSearch?: (value: string, event?: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLInputElement>) => void,
  value?: string
}

export const Search = memo(({ onSearch }: ISearch) => {
  const [search, setSearch] = useState('')

  const onSearchClean = useEvent(() => {
    setSearch('')
    if (onSearch) {
      onSearch('')
    }
  })

  return (
    <>
      <Button
        onClick={onSearchClean}
        danger
        type='primary'
        className='mr-3'
        disabled={search === ''}
        children='Очистить'
      />
      <Input.Search
        placeholder='Поиск'
        onSearch={onSearch}
        onChange={e => setSearch(e.target.value)}
        style={{ width: 300 }}
        enterButton
        value={search}
      />
    </>
  )
})