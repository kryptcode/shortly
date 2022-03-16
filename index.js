import { data } from 'autoprefixer'
import Head from 'next/head'
import { useState } from 'react'
import { Footer } from '../components/Footer'
import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { Showcase } from '../components/Showcase'
import { Stats } from '../components/Stats'

export default function Home() {
  const [url, setUrl] = useState();
  const [clown, setClown] = useState({})

  const saveFormData = async () => {
    const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`).then(res => res.json())

    setClown(data);
    console.log(clown);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await saveFormData()
      alert('Your request was successfully submitted!')
    } catch(err) {
      alert(`Registration Failed ${err.message}`)
    }
  }
  

  return (
    <div className="">
      <Head>
        <title>Shortly</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Showcase />
      
      <div className='w-[100%] sm:w-[90%] mx-auto mb-20'>
        <form className='flex flex-col sm:flex-row items-start justify-center px-4 py-8 bg-[#3b3054] gap-8 sm:gap-14 mb-8' onSubmit={handleSubmit}>
          <input type="text" className='flex-grow p-2.5 pl-7 rounded-lg placeholder:text-gray-400 text-gray-600' placeholder='Shorten a link here...' onChange={(e) => {
            setUrl(e.target.value)
          }} />
          <button type="submit" className='py-2.5 px-5 rounded-lg bg-[#2acfcf] text-white font-medium'>Shorten It!</button>
        </form>
        {
          clown && (
            <div className='flex shadow-xl p-4 bg-white justify-between items-center rounded-md shadow-blue-100'>
              <p>{clown?.result?.original_link}</p>
              <div className='flex space-x-5 items-center'>
                <a 
                  href={clown.result?.short_link} 
                  className='text-[#2acfcf] font-semibold'
                  rel='noreferrer'
                  target='_blank' 
                >
                  {clown.result?.short_link}
                </a>
              </div>
            </div>
          )
        }
      </div>

      <Stats />

      <div className='bg-[#3b3054] text-center py-10'>
        <div className='text-3xl font-bold text-white mb-6'>
          Boost your links today
        </div>
        <button className='py-2 px-5 bg-[#2acfcf] text-white rounded-lg font-semibold hover:opacity-80'>
          Get Started
        </button>
      </div>

      <Footer />
    </div>
  )
};