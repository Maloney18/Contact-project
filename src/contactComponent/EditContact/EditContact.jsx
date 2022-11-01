import "./EditContact.css";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { GrCheckmark } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { editContact } from "../../Database/Features/generalData/generalData";
import { useState } from "react";

const EditContact = () => {
  const { generalData } = useSelector(store => store.allData);
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const location = useLocation();
  const data = location.state;
  
  // for going back to the contact page
  const currently = generalData.find(contact => contact.id === data.id)

  // for setting initial state for any selected contact
  const [currentContact, setCurrentContact] = useState({
    id: data.id,
    Name: data.Name,
    Other: data.Other,
    Email: data.Email,
    Phone: data.Phone,
    clicked: currently.clicked,
    image: data.image,
    color: data.color
  })

  // console.log(currentContact)

  // for updating each contact
  const updateContact = (e) => {
    const { name, value } = e.target
    setCurrentContact(prevState => ({
      ...prevState, [name]: value
    }))
  }

  // for picking an image
  const previewImage = (e) => {
    // const image = document.querySelector('#selected-image')
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      // convert image file to base64 string
      // image.src = reader.result;
      setCurrentContact(prevState => ({...prevState, image: reader.result}));
    });

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // for editing contact onSubmit
  const handleEditedContact = (e) => {
    e.preventDefault();
    dispatch(editContact(currentContact))
    navigate(`/contact/${currentContact.id}`, {state: currentContact})
  };

  return (
    <form  onSubmit={(e) => handleEditedContact(e)}>
      <div 
        className="edit-upper"
      >
        <FaArrowLeft 
          className="handle-edit-back" 
          onClick = {() => {
            navigate(`/contact/${currently.id}`, {state: currently})
          }}
        />

        <h1> Edit Contact </h1>
        
        <button
          className="check-mark"
          title="Edit contact"
        >
          <GrCheckmark />
        </button>
      </div>

      <div className="edited-user-image">
        <label htmlFor="edit-image">
          <FiCamera className="camera" />
        </label>
        <input
          type="file"
          accept=".jpg, .png, .webp, .jpeg"
          id="edit-image"
          name="image"
          onChange={(e) => previewImage(e)}
        />
        <img
          className="edited-profile-image"
          src={currentContact.image}
          alt=""
          id="edited-image"
        />
      </div>

      <ul className="edit-contact-info">
        <li>

          <label htmlFor="edit-Name">Name:</label>
          <input
            type="text"
            id="edit-Name"
            autoComplete="off"
            value={currentContact.Name}
            name="Name"
            onChange={(e) => updateContact(e)}
            placeholder="First Name"
            required
          />
        </li>
        <li>
          <label htmlFor="edit-OName">Other name:</label>
          <input
            type="text"
            id="edit-OName"
            autoComplete="off"
            value={currentContact.Other}
            name="Other"
            onChange={(e) => updateContact(e)}
            placeholder="Optional"
          />
        </li>
        <li>
          <label htmlFor="edit-Email">Email:</label>
          <input
            type="Email"
            id="edit-Email"
            autoComplete="off"
            value={currentContact.Email}
            name="Email"
            onChange={(e) => updateContact(e)}
            placeholder="Anything@anything.com"
          />
        </li>
        <li>
          <label htmlFor="edit-Phone">Phone No:</label>
          <input
            type="text"
            id="edit-Phone"
            autoComplete="off"
            value={currentContact.Phone}
            name="Phone"
            minLength={11}
            maxLength={14}
            onChange={(e) => updateContact(e)}
            placeholder="Your number"
            required
          />
        </li>
      </ul>
    </form>
  );
};

export default EditContact;
