'use client';

import { createIcon } from '@chakra-ui/react';

export const LogoIcon = createIcon({
  displayName: 'LogoIcon',
  viewBox: '0 0 40 32',
  defaultProps: {
    width: '10',
  },
  path: (
    <>
      <path
        opacity='0.5'
        d='M20 9.99982V31.8888C29.8889 26.4443 38.2222 29.9998 40 31.9998V9.99981C33 5.9998 21.8148 6.62945 20 9.99982Z'
        fill='#DBE5FF'
      />
      <path
        d='M20 10.0002V31.8891C26.3333 23.6668 34.3333 25.6668 36.8889 26.1113V4.33349C31 2.44459 21.8148 6.62979 20 10.0002Z'
        fill='#F0F4FF'
      />
      <path
        d='M20 9.74947V31.5556C23.4089 23.6965 32.4261 22.9217 34.2222 23.0324V0.00865083C29.9995 -0.257008 20.8797 5.65389 20 9.74947Z'
        fill='url(#paint0_linear_4_1312)'
      />
      <path
        opacity='0.5'
        d='M20 9.99982V31.8888C10.1111 26.4443 1.77771 29.9998 -6.86646e-05 31.9998V9.99981C6.99994 5.9998 18.1851 6.62945 20 9.99982Z'
        fill='#DBE5FF'
      />
      <path
        d='M20 10.0002V31.8891C13.6666 23.6668 5.66661 25.6668 3.11105 26.1113V4.33349C8.99995 2.44459 18.1851 6.62979 20 10.0002Z'
        fill='#F0F4FF'
      />
      <path
        d='M20 9.74947V31.5556C16.591 23.6965 7.57383 22.9217 5.77772 23.0324V0.00865083C10.0004 -0.257008 19.1202 5.65389 20 9.74947Z'
        fill='url(#paint1_linear_4_1312)'
      />
      <defs>
        <linearGradient
          id='paint0_linear_4_1312'
          x1='20'
          y1='18.7778'
          x2='34.2222'
          y2='18.7778'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FAFBFF' stop-opacity='0.49' />
          <stop offset='1' stop-color='#FAFBFF' />
        </linearGradient>
        <linearGradient
          id='paint1_linear_4_1312'
          x1='20'
          y1='18.7778'
          x2='5.77772'
          y2='18.7778'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FAFBFF' stop-opacity='0.49' />
          <stop offset='1' stop-color='#FAFBFF' />
        </linearGradient>
      </defs>
    </>
  ),
});
/* 

  <Icon width='40' height='32' viewBox='0 0 40 32' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}></Icon>
*/
