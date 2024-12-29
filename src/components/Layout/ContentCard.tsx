'use client'

import { ArrowLeftOutlined } from '@ant-design/icons'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, ReactNode, memo } from 'react'

interface IContentCard {
  children: ReactNode,
  title: string | undefined,
  rightSection?: ReactNode,
  description?: string | undefined,
  photo?: string | undefined | null,
  contentStyle?: string
}

export const ContentCard: FC<IContentCard> = memo(({ children, title, rightSection, photo, description, contentStyle }) => {
  const { back } = useRouter()

  return (
    <>
      <div className={`mb-4 flex justify-between items-center ${contentStyle ? contentStyle : ''}`}>
        <div className='flex'>
          <div
            onClick={back}
            children={<ArrowLeftOutlined />}
            className='mr-3 flex items-center cursor-pointer'
          />
          {photo && (
            <div className='w-12 h-12 relative overflow-hidden rounded-full mr-3 mt-1'>
              <Image
                src={photo}
                fill
                alt='Avatar'
                className='object-cover'
              />
            </div>
          )}
          <div>
            <div className='text-2xl font-bold text-black'>{title}</div>
            {description && <div className='text-base font-bold text-gray-400'>{description}</div>}
          </div>
        </div>
        <div className='flex justify-end items-center'>
          {rightSection && rightSection}
        </div>
      </div>
      {children}
    </>
  )
})