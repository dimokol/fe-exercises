'use client'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='flex h-screen flex-col items-center justify-center space-y-4'>
      <h1 className='mb-6 text-2xl font-bold'>
        Welcome to the Component Library
      </h1>
      <h3 className='mb-6 text-xl font-bold'>FE Exercises</h3>

      <div className='flex justify-between space-x-4'>
        <Link href='/library-search'>
          <button className='rounded-full bg-orange-500 px-4 py-2 text-white hover:bg-orange-600'>
            Library Search
          </button>
        </Link>

        <Link href='/reddit-components'>
          <button className='rounded-full bg-orange-500 px-4 py-2 text-white hover:bg-orange-600'>
            Reddit Components
          </button>
        </Link>

        <Link href='/shipping-components'>
          <button className='rounded-full bg-orange-500 px-4 py-2 text-white hover:bg-orange-600'>
            Shipping Components
          </button>
        </Link>

        <Link href='/harry-potter-cards'>
          <button className='rounded-full bg-orange-500 px-4 py-2 text-white hover:bg-orange-600'>
            Harry Potter Cards
          </button>
        </Link>
      </div>
    </div>
  )
}
