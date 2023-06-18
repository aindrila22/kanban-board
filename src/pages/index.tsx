import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import Board from '@/components/board/Board'
import Header from '@/components/board/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div className={`w-full h-full ${inter.className} flex justify-start items-start mx-auto`}>
  <div>
    <Sidebar/>
  </div>
  <div className='w-full flex flex-col justify-start items-start h-[932px] '>
    <Navbar/>
    <div className=' w-full pb-10'>
        <Header/>
        <Board/>
    </div>

  </div>
</div>
  )
}
