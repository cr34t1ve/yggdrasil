import { FunctionComponent } from 'react';
import localFont from 'next/font/local';
import { Newsreader } from 'next/font/google';
import cx from 'clsx'


const berkeleyMono = localFont({ src: './fonts/BerkeleyMono-Regular.woff2' });
const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
})

const whitney = localFont({
  src: [
    {
      path: './fonts/whitney-regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/whitney-medium.otf',
      weight: '500',
      style: 'normal',
    }
  ]
})



export const fonts = {
  mono: berkeleyMono,
  whitney,
  newsreader
};

type fontFamily = 'mono' | 'whitney' | 'newsreader';

interface TextProps {
  fontFamily?: fontFamily
  children: React.ReactNode | HTMLCollection
  type?: 'p'
}

export const Text: FunctionComponent<TextProps> = (props) => {
  const { fontFamily = 'whitney', children, ...rest } = props

  const fontclass: Record<fontFamily, string> = {
    'mono': berkeleyMono.className,
    'whitney': whitney.className,
    'newsreader': newsreader.className
  }

  return (
    <p  {...rest} className={cx(fontclass[fontFamily])}>
      {children}
    </p>
  )
};
