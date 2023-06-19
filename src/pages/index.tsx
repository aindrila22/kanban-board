import Head from 'next/head';
import { useEffect } from 'react';
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar/Navbar'
import Sidebar from '@/components/sidebar/Sidebar'
import Header from '@/components/board/Header'
import dynamic from 'next/dynamic';

const DynamicBoard = dynamic(() => import('@/components/board/Board'), {
  loading: () => <div>Loading...</div>
});


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  useEffect(() => {
    document.title = 'Kanban Board'; 
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Kanban Board'); 
    }
  }, []);

  return (
    <>
    <Head>
      <title>Kanban Board</title>
      <meta name="description" content="Kanban Board" />
    </Head>

      <div className={`w-full h-full ${inter.className} flex justify-start items-start mx-auto`}>
        <div>
          <Sidebar/>
        </div>
        <div className='w-full flex flex-col justify-start items-start h-[932px] '>
          <Navbar/>
          <div className=' w-full pb-10'>
              <Header/>
              <DynamicBoard /> 
          </div>

        </div>
      </div>
    </>
  )
}
