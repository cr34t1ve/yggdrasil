import React, { FunctionComponent } from 'react'
import { Text } from '.'
import Image from 'next/image'

import './book.scss'

interface BookProps {
  image: string,
  title: string
  rating: number
}


export const Book: FunctionComponent<BookProps> = (props) => {
  const { image, title, rating } = props
  return (
    <div className='book'>
      <div className='book__cover-container'>
        <Image src={image} fill alt={`Cover of ${title}`} className='book__cover' />
      </div>
      <Text className='book__title'>{title}</Text>

      <div className='book__footnote'>
        <div className='link-icon'>
          <svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.34375 14.4375H6.46875C5.325 14.4375 4.2281 14.0227 3.41935 13.2842C2.6106 12.5458 2.15625 11.5443 2.15625 10.5C2.15625 9.45571 2.6106 8.45419 3.41935 7.71577C4.2281 6.97734 5.325 6.5625 6.46875 6.5625H9.34375M13.6562 6.5625H16.5312C17.675 6.5625 18.7719 6.97734 19.5806 7.71577C20.3894 8.45419 20.8438 9.45571 20.8438 10.5C20.8438 11.5443 20.3894 12.5458 19.5806 13.2842C18.7719 14.0227 17.675 14.4375 16.5312 14.4375H13.6562M7.33529 10.5H15.7545" stroke="white" stroke-opacity="0.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>

        <Text fontFamily='newsreader'>{rating}</Text>
      </div>
    </div>
  )
}
