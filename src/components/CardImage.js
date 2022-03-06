import React from 'react'
import style from '../css-modules/CardImgGallery.module.css'

export default function CardImage({ hasImage, imageLocations }) {
    const stopProp = (e) => {
        e.stopPropagation()
    }

    if (hasImage) {
        return (
            <div className={style.galleryContainer} onClick={stopProp}>
                {imageLocations.map(location => {
                    return <img src={location}>
                    </img>
                })}
            </div>
        )
    }
    return null;
}
