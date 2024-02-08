import Image from 'next/image'
import React from 'react'
import { CgBoard } from 'react-icons/cg'

export const Logo = () =>
{
  return (
    <div className="flex items-center font-light">
      {/* <Image src="/logo.svg" alt="Kanban Zen" /> */}
      <CgBoard className='text-2xl' size={40} />
      <h1 className="text-2xl my-4 font-semibold capitalize">Kanban Zen</h1>
    </div>
  )
}
