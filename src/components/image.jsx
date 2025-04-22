import React from 'react'

const Image = ({ src, alt, className, id }) => {
  return (
    <img src={src} alt={alt} className={className} id={id} />
  )
}

export default Image
