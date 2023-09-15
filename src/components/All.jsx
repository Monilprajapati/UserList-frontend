import React from 'react'
import UserCard from './USerCard'

const All = () => {
  return (
    <div className='flex flex-wrap my-10 ml-10 gap-20'>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    <UserCard/>
    </div>
  )
}

export default All