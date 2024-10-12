import './menu.css'
import stadium from '../assets/backgrounds/oldtrafford.jpg'
import { Link } from 'react-router-dom'
import { useState } from 'react'


export default function Menu() {
    let menuLinks = {
        'FC News': ['/news', 'FN', 'Mad news that', 'Nothing to see here icel'],
        'Ultimate Team': ['/ultimateteammenu', 'UT', 'Build the most powerful club with your favourite players by competing for rewards', 'Squad building • Fantasy • Competitive • Live service'],
    }

    const [middleText, setMiddleText] = useState(0)

    return (
        <div className='menucontainer'>
            <img className='oldTraffordMenu' src={stadium} />
            <div className='leftlinksmainmenu'>
                {Object.entries(menuLinks).map((link, i) => {
                    return (
                        <Link to={link[1][0]} onMouseOver={() => setMiddleText(i)} className='menumainteextlinks' key={i}>{link[0]}</Link>
                    )
                })}
            </div>
            <div className='middlePartmainmenu'>
                {Object.values(menuLinks)[middleText].map((text, i) => {
                    return (
                        <p key={i}>{Object.values(menuLinks)[middleText][i+1]}</p>
                    )
                })}
                <Link className='mainButtonMainMenu' to={Object.values(menuLinks)[middleText][0]}>Enter {Object.keys(menuLinks)[middleText]}</Link>
            </div>
        </div>
    )
}