'use client'

import React, { useEffect, useState } from 'react'
import SubredditCard from '../../components/subredditCard'
import { fetchSubreddits } from '../../lib/api'
import { Subreddit } from '../../types'
import Image from 'next/image'

const RedditComponentsPage = () => {
  const [subreddits, setSubreddits] = useState<Subreddit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function loadSubreddits() {
      try {
        const subredditsData = await fetchSubreddits()
        setSubreddits(subredditsData)
      } catch (error) {
        setError('Failed to load subreddits')
      } finally {
        setLoading(false)
      }
    }

    loadSubreddits()
  }, [])

  if (loading)
    return (
      <div className='text-center font-semibold text-blue-500'>Loading...</div>
    )
  if (error)
    return <div className='text-center font-semibold text-red-500'>{error}</div>

  return (
    <div className='relative mx-auto w-full max-w-md rounded-2xl bg-blue-100 p-6 shadow-md'>
      <div className='relative -mx-6 -my-6 h-20'>
        <Image
          src='/images/background.webp'
          alt='Background'
          fill
          sizes='(max-width: 768px) 100vw, 768px'
          priority
          className='rounded-t-2xl object-cover opacity-50'
        />
        <h2 className='relative z-10 p-4 pt-10 text-xl font-bold text-white'>
          Top News Communities
        </h2>
      </div>
      <ul className='mt-6 divide-y divide-gray-300'>
        {subreddits.map(subreddit => (
          <SubredditCard
            key={subreddit.Rank}
            rank={subreddit.Rank}
            name={subreddit.Name}
            status={subreddit.Status}
            isOpen={subreddit.isOpen}
          />
        ))}
      </ul>
      <div className='mt-4 flex justify-center'>
        <button className='text-md w-full rounded-full bg-redditBlue py-2 text-white'>
          View All
        </button>
      </div>

      <div className='mt-4 flex justify-between text-blue-600'>
        <button className='rounded-full bg-gray-200 px-4 py-1 text-sm'>
          Top
        </button>
        <button className='rounded-full bg-gray-200 px-4 py-1 text-sm'>
          Near You
        </button>
        <button className='rounded-full bg-gray-200 px-4 py-1 text-sm'>
          Sports
        </button>
        <button className='rounded-full bg-gray-200 px-4 py-1 text-sm'>
          Aww
        </button>
      </div>
    </div>
  )
}

export default RedditComponentsPage
