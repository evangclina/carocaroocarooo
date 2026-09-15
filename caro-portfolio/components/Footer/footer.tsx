import React from 'react'

export default function Footer() {
    const currentYear = new Date().getFullYear()
  return (
    <div className='w-screen flex items-center justify-center text-center py-5'>
        <p className='text-11'>
            © {currentYear} carocaroocarooo.  all rights reserved
        </p>
    </div>
  )
}
