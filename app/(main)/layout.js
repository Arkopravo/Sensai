import React from 'react'

const MainLayout = ({children}) => {
  return (
    // Redirect to onboarding
    <div className='mx-auto container mt-24 mb-20'>{children}</div>
  )
}

export default MainLayout