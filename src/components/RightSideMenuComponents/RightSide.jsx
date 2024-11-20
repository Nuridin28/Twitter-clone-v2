import React from 'react'
import Search from './SearchComponent/Search'
export default function RightSide({onSearchChange}) {
  return (
    <div className='w-25 mt-3'>
        <Search onSearchChange={onSearchChange} />
    </div>
  )
}
