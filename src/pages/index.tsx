import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div className={`w-full h-full ${inter.className}`}>
  {/* <Navbar/> */}
  <Sidebar/>
</div>
  )
}
