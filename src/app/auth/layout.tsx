
export default function AuthLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className='bg-auth w-screen h-screen flex justify-center items-center'>{children}</div>
  )
}
