import React from "react"
import HomeMain from "./components/homeMain"
import './components/layout.css';

export default function Home() {
  return (
    <div className="mobileExpand">
    <header>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Fira+Sans:wght@500&display=swap"></link>
    </header>
      <HomeMain />
    </div>
  )
}