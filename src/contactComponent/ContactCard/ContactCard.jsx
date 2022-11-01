import './ContactCard.css'
import { IoIosCall } from 'react-icons/io'
import { AiFillStar } from "react-icons/ai";
import { useNavigate,Link } from "react-router-dom"

const ContactCard = (props) => {
    const navigate = useNavigate()
    const {id, Name, Phone, image, color, clicked} = props?.contact

    const imageStyling = {
        border: '1px solid rgb(100, 149, 237)'
    }

    const theImage = {
        width : '100%',
        height: '100%',
        objectFit: 'cover',
        borderRadius: '50%'
    }

    return (
        <div  className='contact'>
            <div className="image" style={image !== 'Images/Image.jpg' ? imageStyling : {backgroundColor: `${color}`}}>
                {clicked ? <AiFillStar className='fill-star'/> : ''}
                {image !== 'Images/Image.jpg' ? <img style={theImage} src={image} alt='' /> : Name[0].toUpperCase()}
            </div>
            <div className="info">
                <Link to={`/contact/${id}`} state={props.contact} className='linked'>
                    <h3>{Name}</h3>
                    <p>{Phone}</p>
                </Link>
            </div>
            <div className='call-icon' onClick={() => navigate(`/call/${id}`, {state: props.contact})}>
                <IoIosCall title='call'/> 
            </div>
        </div>
    )
}

export default ContactCard;                         