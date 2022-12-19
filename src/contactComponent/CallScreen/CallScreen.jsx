import { BsMicMute, BsCameraVideo } from 'react-icons/bs'
import { AiOutlinePlus } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'
import { FaPause } from 'react-icons/fa'
import { useLocation, useNavigate } from 'react-router-dom'
import { BiVolumeFull, BiDialpadAlt } from 'react-icons/bi'
import './callScreen.css'

const CallScreen = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const data = location.state;
    // console.log(data)

    const backG = data.image !== 'Images/Image.jpg' ?
        {            
            backgroundImage: `url(${data.image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover'
        } :
        {
            background: `linear-gradient(to bottom right, #42275a, #734b6d)`
        }

    const colorConv = {
        content:'', 
        color: `${data.color}`, 
        filter: 'hue-rotate(90deg)'
    }

    return (
        <div className="background-image" style={backG}>
            <div className='call-page'>
                <div className="up-call-sect" style={colorConv}>
                    <h2 className="call-user-name">
                        {data.Name}
                    </h2>
                    <p className="user-call-status"> 
                        calling 

                        <span className='first-dot'> .</span>
                        <span className='second-dot'> .</span>
                        <span className='last-dot'> .</span> 
                    </p>
                </div>

                <div className='call-middle-part'>
                    <div className="round-bg white-bg">
                        <BsMicMute className='icons'/>
                        Mute
                    </div>
                    <div className="round-bg">
                        <BiDialpadAlt className='icons'/>
                        Keypad
                    </div>
                    <div className="round-bg white-bg">
                        <BiVolumeFull className='icons'/>
                        Speaker
                    </div>
                    <div className="round-bg">
                        <AiOutlinePlus className='icons'/>
                        Add call
                    </div>
                    <div className="round-bg">
                        <BsCameraVideo className='icons'/>
                        Facetime
                    </div>
                    <div className="round-bg white-bg">
                        <FaPause className='icons'/>
                        Hold call
                    </div>
                </div>

                <div 
                    className="round-bg end-call"
                    onClick={() => navigate("/")}
                >
                    <IoIosCall />
                </div>
            </div>
        </div>
    )
}

export default CallScreen;