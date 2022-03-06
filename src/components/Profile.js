import React from 'react'
import style from '../css-modules/ProfileStyle.module.css'

export default function Profile() {
    const openLink = (url) => {
        window.open(url, '_blank').focus();
    }

    return (
        <div className={style.profileBox}>
            <div className={style.name}>
                <div>
                    nur muhammad husnul
                </div>
                <div className={style.habib}>
                    habib
                </div>
                <div>
                    yahya
                </div>
            </div>
            <div className={style.divider}></div>
            <div className={style.infoBox}>
                <div className={style.description}>
                    I am a game developer, web developer, VR AR XR developer, pixel artist. I love playing games, especially 2d pixel art games.
                </div>
                <div className={style.socialContainer}>
                    <div className={style.socialLink} onClick={()=>openLink("https://github.com/ginkokuryuu")}>
                        <img src={require('../icon/github.png')}></img>
                        Github
                    </div>
                    <div className={style.socialLink} onClick={()=>openLink("https://www.linkedin.com/in/nmhhabiby/")}>
                        <img src={require('../icon/linkedin.png')}></img>
                        LinkedIn
                    </div>
                    <div className={style.socialLink} onClick={()=>openLink("mailto:nmh.habib.y@gmail.com")}>
                        <img src={require('../icon/mail.png')}></img>
                        Mail
                    </div>
                    <div className={style.socialLink} onClick={()=>openLink("https://www.instagram.com/nmhhabiby/")}>
                        <img src={require('../icon/instagram.png')}></img>
                        Instagram
                    </div>
                </div>
            </div>
            
            <div className={style.showMore}>
                Scroll
                <div className={style.showLineDiv}>
                    <div className={style.showLine + " " + style.leftLine}></div>
                    <div className={style.showLine+ " " + style.rightLine}></div>
                </div>
            </div>
        </div>
    )
}
