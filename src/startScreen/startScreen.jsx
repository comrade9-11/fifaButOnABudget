import './StartScreen.css'
import ewhite from '../assets/logos/esportstransoarentwhite.png'
import egreen from '../assets/logos/esportstransoarentgreen.png'
import fcwhite from '../assets/logos/fcwhite.png'
import fcgreen from '../assets/logos/fcgreen.png'
import bg from '../assets/backgrounds/menubackground.png'
import { Link } from 'react-router-dom'

export default function StartScreen() {
    return (
        <div className='startScreenContainer'>
            <div className='startScreenHtml'>
                <img className='startScreenELogowhite startScreenE' src={ewhite}></img>
                <img className='startScreenELogogreen startScreenE' src={egreen}></img>
                <img className='startScreenFCLogowhite startScreenFC' src={fcwhite}></img>
                <img className='startScreenFCLogogreen startScreenFC' src={fcgreen}></img>
            </div>
            <img className='startScreenBackground' src={bg}></img>

            <div className='welcometotheclub'>
                <p className='startscreenmainText'>welcome</p>
                <p className='startscreenmainText'>to the club</p>

                <Link className='startscreenstartbutton' to='/menu'><div style={{fontFamily: 'ClashDisplay-SemiBold'}}>Start</div></Link>
            </div>
        </div>
    )
}