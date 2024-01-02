import React from 'react'
import Card from './cards/Card'

const Tools = () => {
  return (
    <>
        <div className='flex flex-row justify-center bg-gray-800'>
            <Card link={"/cardImg1.jpg"}/>
            <Card link={"/tableCard.jpg"}/>

        </div>
    </>
  )
}

export default Tools