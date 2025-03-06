import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons'

type SubredditCardProps = {
  rank: number
  name: string
  status: string
  isOpen: boolean
}

const SubredditCard: React.FC<SubredditCardProps> = ({
  rank,
  name,
  status,
  isOpen
}) => {
  const statusIcon = status === 'up' ? faAngleUp : faAngleDown

  return (
    <li className='flex items-center justify-between py-2'>
      <div className='flex items-center'>
        <span className='mr-2'>{rank}</span>
        {statusIcon && (
          <span
            className={`mr-2 ${status === 'up' ? 'text-green-500' : status === 'down' ? 'text-red-500' : 'invisible'}`}
          >
            <FontAwesomeIcon icon={statusIcon} />
          </span>
        )}
        <img
          src={`/images/subreddits/${name}.webp`}
          alt={`${name}`}
          className='mr-2 h-5 w-5 rounded-full'
        />
        <span>r/{name}</span>
      </div>
      {isOpen && (
        <button className='rounded-full bg-blue-500 px-5 py-1 text-white'>
          Join
        </button>
      )}
    </li>
  )
}

export default SubredditCard
