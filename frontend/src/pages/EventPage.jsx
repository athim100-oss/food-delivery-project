import React from 'react'
import EventGallery from '../component/EventGallery'
import "../css/EventGallery.css"
export default function EventPage() {
  return (
    <div>
      <div className="heading">
        <h1>Events</h1>
        <h4><span>Home</span> / <span> pages</span> / Events</h4>
        </div>
      <EventGallery/>
    </div>
  )
}
