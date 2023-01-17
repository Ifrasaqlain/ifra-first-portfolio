import React from 'react'
import PropTypes from 'prop-types'


export default function HeroText(props) {
  return (
    <div className="container">
      <div className="masthead-subheading">{props.name}<br/><br/>
      {props.text}
      </div>
      <div className="masthead-heading text-uppercase">{props.title}</div>
    </div>
  )
}

HeroText.defaultProps = {
  name:"Ifra Saqlain",
  text:"Frontend Web Developer",
  title:"It's Nice To Meet You"
}

HeroText.propTypes = {
  name: PropTypes.string,
  text:PropTypes.string,
  title:PropTypes.string 
}