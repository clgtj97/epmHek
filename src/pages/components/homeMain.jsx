import React from 'react'
import SlidersFirst from "./SlidersFirst"
import SlidersSecond from "./SlidersSecond"
import SlidersTre from "./SlidersTre"
import Menu from "./Menu"
import TitleMain from "./TitleMain"

const HomeMain = () => {
  return (
    <div>
        {/*<div>HomeMain</div>*/}
        <TitleMain />
        <SlidersFirst />
        <SlidersTre />
        <SlidersSecond />
        <Menu />
    </div>
    
  )
}

export default HomeMain