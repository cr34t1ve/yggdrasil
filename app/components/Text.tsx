import { ComponentPropsWithoutRef, ElementType, FunctionComponent } from 'react';
import localFont from 'next/font/local';
import { Newsreader } from 'next/font/google';
import cx from 'clsx'


const berkeleyMono = localFont({
  src: './fonts/BerkeleyMono-Regular.woff2',
  variable: "--font-mono"
});

const newsreader = Newsreader({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  variable: "--font-newsreader",
  display: 'swap'
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
  ],
  variable: "--font-whitney",
})


export const fonts = {
  mono: berkeleyMono,
  whitney,
  newsreader
};

type fontFamily = 'mono' | 'whitney' | 'newsreader';

interface TextProps<T extends React.ElementType> {
  fontFamily?: fontFamily
  children: React.ReactNode | HTMLCollection
  as?: T
}

export const Text = <T extends ElementType = 'p'>({ as, children, ...props }:
  TextProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof TextProps<T>>
) => {
  const { fontFamily = 'whitney', className, ...rest } = props


  const Component = as || 'p'

  const fontclass: Record<fontFamily, string> = {
    'mono': berkeleyMono.className,
    'whitney': whitney.className,
    'newsreader': newsreader.className
  }

  return (
    // @ts-ignore
    <Component  {...rest} className={cx(fontclass[fontFamily], className)}>
      {children}
    </Component>
  )
};
