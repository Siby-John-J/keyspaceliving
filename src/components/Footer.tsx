import Youtube from '../assets/yt.png'
import Facebook from '../assets/fb.png'
import Whatsapp from '../assets/wh.png'
import { Link, Route, Router } from 'react-router-dom'
import Icon from '../assets/logo.png'

function Footer() {
  return (
    <div className='h-80 md:h-40 bg-black grid grid-cols-2 md:grid-cols-3 mt-14'>
        <div className="first col-span-2 small:col-auto flex pl-8 flex-col justify-around">
            <h1 className='md:text-2xl text-[23px] text-white'>Welcome to a new age of home buying.</h1>
            {/* <h2 className='md:text-3xl text-[24px] text-white'>KEYSPACELIVING</h2> */}
            <img className="p-0 m-0 ml-4 w-[9.5em] mt-3 filter invert-31 sepia-78 saturate-1200 hue-rotate-190 brightness-105 contrast-125" src={Icon} alt="" />
            <div className=''>
                <h1 className='text-white text-[15px] font-semibold'>K-RERA/AG/0131/2023</h1>
            </div>
        </div>
        <div className="second col-span-2 small:col-auto flex flex-row h-auto justify-around items-center">
            <img src={Facebook} className="h-7"  alt="" />
            <img src={Whatsapp} className="h-7"  alt="" />
            <img src={Youtube}  className="h-8" alt="" />
        </div>
        <div className="third text-white col-span-2 md:col-span-1 flex flex-col justify-evenly">
            {/* <a href=""></a> */}
            <Link to="/policy" className=''>Privacy Policy</Link>
            <h1>All Rights Reserved. © 2024 keyspaceliving</h1>
        </div>
    </div>
  )
}

export default Footer
