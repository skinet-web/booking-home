'use client'

import React from 'react'
import Image from 'next/image'

interface AvatarProps {
  src?: string | null | undefined
}

const Avatar: React.FC<AvatarProps> = ({
  src
}) => {
  return (
    <div>
        <Image 
                className='rounded-full '
                width = '30'
                height = '30'
                src={ src || "/images/placeholder.jpg"} 
                alt='profile picture'
            />            
    </div>
  )
}

export default Avatar