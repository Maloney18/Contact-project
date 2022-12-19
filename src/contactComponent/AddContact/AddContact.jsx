import "./AddContact.css";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { nanoid } from "nanoid";
import { GrCheckmark } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { addToGeneralData } from "../../Database/Features/generalData/generalData";
import { changeColor, changeEmail, changeId, changeImage, changeName, changeOther, changePhone, clearAll} from "../../Database/Features/contactTemplate/contactTemplate";

const AddContact = () => {
  const dispatch = useDispatch();
  const contact = useSelector((store) => store.contact.contact);
  const goBackToContacts = useNavigate();
  const colors = ["red", "blue", "yellow", "brown", "orange"];
  const rand = Math.floor(Math.random() * colors.length + 1);

  // for converting image from file
  const previewImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.addEventListener("load", () => {
      // convert image file to base64 string
      // image.src = reader.result;
      dispatch(changeImage(reader.result));
    });

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  // the submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addToGeneralData(contact));
    dispatch(clearAll());
    goBackToContacts("/");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="upper">
        <FaArrowLeft
          className="handle-back"
          onClick={() => goBackToContacts("/")}
        />
        <h1> Add new Contact </h1>
        <button
          className="check-mark"
          title="Add contact"
          onClick={() => {
            dispatch(changeColor(colors[rand]));
            dispatch(changeId(nanoid()));
          }}
        >
          <GrCheckmark /> 
        </button>
      </div>

      <div className="user-image">
        <label htmlFor="select-image">
          <FiCamera className="camera" />
        </label>
        <input
          type="file"
          accept=".jpg, .png, .webp, .jpeg"
          id="select-image"
          name="image"
          onChange={(e) => previewImage(e)}
        />
        <img
          className="profile-image"
          src={contact.image}
          alt=""
          id="selected-image"
        />
      </div>

      <ul className="contact-info">
        <li>
          <label htmlFor="Name">Name:</label>
          <input
            type="text"
            id="Name"
            autoComplete="off"
            name="Name"
            onChange={(e) => dispatch(changeName(e.target.value))}
            placeholder="First Name"
            required
          />
        </li>
        <li>
          <label htmlFor="OName">Other name:</label>
          <input
            type="text"
            id="OName"
            autoComplete="off"
            name="Other"
            onChange={(e) => dispatch(changeOther(e.target.value))}
            placeholder="Optional"
          />
        </li>
        <li>
          <label htmlFor="Email">Email:</label>
          <input
            type="Email"
            id="Email"
            autoComplete="off"
            name="Email"
            onChange={(e) => dispatch(changeEmail(e.target.value))}
            placeholder="Anything@anything.com"
          />
        </li>
        <li>
          <label htmlFor="Phone">Phone No:</label>
          <input
            type="text"
            id="Phone"
            autoComplete="off"
            name="Phone"
            minLength={11}
            maxLength={14}
            onChange={(e) => dispatch(changePhone(e.target.value))}
            placeholder="Your number"
            required
          />
        </li>
      </ul>
    </form>
  );
};

export default AddContact;
