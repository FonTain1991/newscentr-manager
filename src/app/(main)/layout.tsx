'use client'

import { Header } from '@/components/Layout/Header'
import { SiderBar } from '@/components/Layout/Sidebar'
import { Layout } from 'antd'
import React from 'react'

const { Content } = Layout

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <Layout hasSider className='min-h-screen' >
      <SiderBar />
      <Layout>
        <Header />
        <Content className='!min-h-screen bg-content'>
          <div className='bg-white m-4 rounded-xl p-6'>
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}