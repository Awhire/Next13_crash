import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <h1>Welcome To Khiztech Media</h1>
      <ul>
        <li><Link href="/about">About</Link></li>
      </ul>
    </div>
  )
}

export default HomePage
