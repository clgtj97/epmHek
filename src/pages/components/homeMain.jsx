import React from 'react'
import SlidersFirst from "./slidersFirst"
import SlidersTwo from "./slidersTwo"
import Menu from "./menu"
import FooterMain from './footerMain'


const HomeMain = () => {
  const footCs = {
    position: 'relative',
    paddingBottom: '0px',
    paddingTop: '0px',
    bottom: '4vh'
  }
  
  return (
    <div className='homeMobile has-background-white'>
        <Menu />
        <SlidersFirst />
        <SlidersTwo />
        <div className="columns homeFooter">
          <FooterMain />
        </div>
    </div>
    
  )
}

export default HomeMain