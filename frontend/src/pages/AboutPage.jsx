import React from 'react'
import About from '../component/About'
import Counter from '../component/Counter'
import "../css/About.css"
export default function AboutPage() {
  return (
    <div>
      <div className="heading">
        <h1>About US</h1>
        <h4><span>Home</span> / <span> pages</span> / about</h4>
        </div>
        <About/>
        <Counter/>
    </div>
  )
}
