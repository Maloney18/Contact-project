import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMessage, AiOutlineStar, AiFillStar } from "react-icons/ai";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { FiEdit3 } from "react-icons/fi";
import { BiArrowBack, BiTrash } from "react-icons/bi";
import "./contact.css";
import { useDispatch } from "react-redux"
import { addFavorite, removeFavorite, removeFromGeneralData } from "../../Database/Features/generalData/generalData";

const Contact = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state;
  const [showTooltip, setShowTooltip] = useState(false)
  const [changeClicked, setChangeClicked] = useState(data.clicked)
  const contactBackground = {backgroundColor: `${data.color}`};
  const inverted = data.image !== 'Images/Image.jpg' ? {color: 'orangered'} : {content: ''}

  // contact-image styling
  const contactImage = {
    background: `url('${data.image}')`,
    backgroundPosition: "center",
    backgroundSize: "cover",
  };


  // add to favorites
  const addToFavorites = (id) => {
    if (changeClicked === false) {
      setChangeClicked(!changeClicked)
      dispatch(addFavorite(id))
    }
    else {
      setChangeClicked(!changeClicked)
      dispatch(removeFavorite(id))
    }
  };


  // toggle delete tooltip
  const toggle = () => {
    if(showTooltip === false) {
      setShowTooltip(!showTooltip)
    }
    else {
      setShowTooltip(!showTooltip)
    }
  }

  // console.log(showTooltip)

  return (
    <>
      <div
        className="name-of-user"
        style={data.image !== 'Images/Image.jpg' ? contactImage : contactBackground}
      >
        <div className="upping">
          <BiArrowBack
            className="increase-font"
            style={inverted}
            onClick={() => navigate("/")}
          />

          <div className="upping-left">
              <FiEdit3 
                className="increase-font edit-icon" 
                title="Edit" 
                style={inverted}
                onClick={() => navigate(`/edit/${data.id}`, {state: data})}
              />

            <span className="star-cont">
             { 
                changeClicked ?
                <AiFillStar 
                  className="increase-font" 
                  title="Edit" 
                  style={inverted}
                  onClick={() => addToFavorites(data.id)}
                /> :
                <AiOutlineStar
                  className="increase-font star"
                  title="Add to favorites"
                  style={inverted}
                  onClick={() => addToFavorites(data.id)}
                />
              }
            </span>
            <BiTrash 
              className="increase-font trash" 
              title="Delete" 
              style={inverted}
              onClick={() => toggle()}
            />
          </div>
        </div>

        {
          showTooltip &&
          <div className="delete-btn">
            <button 
              className="delete green"
              onClick={() => toggle()}
            >
              Cancel
            </button>
            <button 
              className="delete"
              onClick={() => {
                dispatch(removeFromGeneralData(data.id))
                navigate("/")
              }}
            >
              Delete
            </button>
          </div>
        }

        {data.image === 'Images/Image.jpg' && <div className="middle-display ">{data.Name[0]}</div>}

        <h2 
          className="invert" 
          style={inverted}
        >
          {data.Name[0].toUpperCase() + data.Name.slice(1)}
        </h2>

      </div>
      <div className="number-of-user">
        <FaRegUserCircle className="increase-font" />
        <p className="phone-number">{data.Phone}</p>
        <AiOutlineMessage className="increase-font" title="chat" />
      </div>
    </>
  );
};

export default Contact;
