import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Logo() {
  return (
    <Link href={'/'} className=" hidden md:block h-12 bg-white w-12 rounded-full">
        <Image
            src="/logo.png"
            alt="R & I Steel Roofing Logo"
            width={200}
            height={200}
            priority
            className="rounded-full object-cover"
        />
    </Link>
)
}

export default Logo