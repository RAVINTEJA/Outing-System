import React from 'react'
import { ComplexNavbar } from '../_components/NavBar'
import { NonLocalForm } from '../_components/NonLocalForm'

const index = () => {
  return (
    <div className='flex flex-col items-center'>
        <ComplexNavbar />
        <NonLocalForm />
    </div>
  )
}

export default index