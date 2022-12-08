import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeed } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faTwitter,
  faGooglePlus,
  faVimeo,
} from '@fortawesome/free-brands-svg-icons'
import { useResponsiveFontSize } from 'react-responsive-font-size'
import './Topbar.css'

const Topbar = () => {
  const topFont = useResponsiveFontSize(0.5, {
    setFontSize: true,
    globalVariableName: '--my-variable',
    lockFontSize: false,
  })
  return (
    <div className="topbar">
      <div ref={topFont} className="topLeft">
        <p>Connect With Us:</p>
        <div className="topIconWrappers">
          <FontAwesomeIcon className="topIcon" icon={faFacebookF} />
          <FontAwesomeIcon className="topIcon" icon={faTwitter} />
          <FontAwesomeIcon className="topIcon" icon={faFeed} />
          <FontAwesomeIcon className="topIcon" icon={faGooglePlus} />
          <FontAwesomeIcon className="topIcon" icon={faVimeo} />
        </div>
      </div>
      <div ref={topFont} className="topRight">
        <p>info.we.com</p>
        <p className="topContact">
          Call Us Now: <span>008800977</span>
        </p>
      </div>
    </div>
  )
}

export default Topbar
