import React from "react"
import { Link } from "react-router-dom"
import skating from '../images/skating.mp4'
import running from '../images/running.mp4'
import pushup from '../images/pushup.mp4'



const Home = () => {

    return (
        //if loggin in then say hello ${users name}
        <>
        <div className="video">
        <video src={skating} className="skating" autoPlay loop muted></video>
        <video src={running} className="skating" autoPlay loop muted></video>
        <video src={pushup} className="skating" autoPlay loop muted></video>
        </div>
        <div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        <footer>
            <ul>
                <Link><li>About</li></Link>
                <Link><li>Contact</li></Link>
                <Link><li>Locations</li></Link>
                <Link><li>Terms & Conditions</li></Link>
                <Link><li>FAQs</li></Link>
            </ul>
        </footer>
        </>
    )
}




export default Home