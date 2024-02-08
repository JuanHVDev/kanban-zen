import React from 'react'
import { BsExclamationCircle } from 'react-icons/bs';
interface Props
{
  message?: string;
}
export const FormError = ({ message }: Props) =>
{
  if (!message) return null
  return (
    <div className='border-destructive border-4 mt-3 p-3 rounded-lg flex justify-center items-center gap-x-2 text-lg text-destructive'>
      <BsExclamationCircle className='h-4 w-4' />
      <p>{message}</p>
    </div>
  )
}
