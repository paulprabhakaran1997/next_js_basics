import React from 'react'
import Link from 'next/link'

import type { Metadata } from 'next'

// export default function About() {
//   return (
//     <>
//     <h1>page</h1>
//     <Link href="/">Go Home</Link>
//     </>
//   )
// }

export const metadata : Metadata = {
  title : 'About',
  description : "This is About Page"
}

const About = () =>{
  return (
    <>
      <h1>About</h1>
      <Link href="/">Go Home</Link>
    </>
  )
}

export default About;
