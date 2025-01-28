import React from 'react'
import classNames from 'classnames'

interface CardProps {
  border?: boolean // Optional border
  children: React.ReactNode // Card content
  className?: string // Additional custom classes
  isDisabled?: boolean // Disable click
  onClick?: () => void // Optional click handler
  hasShadow?: boolean // Optional shadow
  statusColor?: string // Status color for a border or badge (optional)
  statusSize?: string // Size for status badge/indicator (optional)
  tooltip?: string // Tooltip text
}

const Card: React.FC<CardProps> = ({
  border = false,
  children,
  className = '',
  isDisabled = false,
  onClick,
  hasShadow = true,
  statusColor = 'transparent',
  statusSize = '8px',
  tooltip = ''
}) => {
  return (
    <div
      className={classNames(
        'rounded-lg bg-white p-4', // Base styles
        { 'cursor-pointer': onClick && !isDisabled }, // Clickable state
        { 'cursor-not-allowed opacity-50': isDisabled }, // Disabled state
        { border: border }, // Border based on props
        { 'shadow-lg': hasShadow }, // Shadow based on props
        className // Custom additional class
      )}
      onClick={!isDisabled ? onClick : undefined} // Disable click if isDisabled is true
      title={tooltip} // Tooltip for additional info
    >
      {/* Status Indicator (if statusColor is provided) */}
      {statusColor !== 'transparent' && (
        <span
          className='absolute right-2 top-2 rounded-full'
          style={{
            backgroundColor: statusColor,
            width: statusSize,
            height: statusSize
          }}
        />
      )}
      {children} {/* Render the children inside the card */}
    </div>
  )
}

export default Card
