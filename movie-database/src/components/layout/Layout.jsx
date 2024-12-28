import React from 'react'
import Hero from '../common/Hero'

const Layout = (props) => {

    const{heroContent, pageContent} = props

  return (
    <div className='mx-auto '>
    <Hero children={heroContent}/>
    {pageContent}
    </div>
  )
}

export default Layout