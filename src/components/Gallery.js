import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import img_src from './ImageArray';
import Frame from '../assets/frame_shadow_comp.png';
import strftime from 'strftime'

var poissonProcess = require('poisson-process');


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Gallery = (props) => {
  const [display, setDisplay] = React.useState(img_src[0])

  useEffect(() => {
    const p = poissonProcess.create(5000, function updateImage() {
      var r = Math.floor(Math.random() * img_src.length);
      // console.log(getRandomInt(2023010100, strftime('%Y%m%d%H', new Date())));
      if (img_src[r]) {
        setDisplay(img_src[r])
      }
      
    })

    p.start() 
  }, [])

  return (
    <div style={{width:'100%', height:'auto'}}>
      <img className = 'gallery_frame' src = {Frame} />
      <img className = 'gallery_image' style={{width:'100%', height:'auto'}} src = {display} />
    </div>
  )
};

export default Gallery;