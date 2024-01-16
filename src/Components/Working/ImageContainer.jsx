import React from 'react'

function ImageContainer({src,title,description}) {
  return (
    <>
        <div className="imageContainer">
          <img
            src={src}
            alt="Working-img"
            className="image"
          />

          <div className="image_description">
            <div className="image_title">
              <span>{title}</span> 
            </div>

            <div className="image_about">
              <p>
                {description}
              </p>
            </div>
          </div>
        </div>
    </>
  )
}

export default ImageContainer