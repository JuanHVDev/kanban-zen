import { CheckCheckIcon } from 'lucide-react';
import React from 'react'
interface Props
{
  message?: string;
}
export const FormSuccess = ({ message }: Props) =>
{
  if (!message) return null
  return (
    <div className='border-emerald-400 border-4 p-3 rounded-lg flex justify-center items-center gap-x-2 text-lg text-emerald-400 mt-3'>
      <CheckCheckIcon className='h-4 w-4' />
      <p>{message}</p>
    </div>
  )
}
