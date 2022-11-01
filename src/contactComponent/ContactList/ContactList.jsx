import { useNavigate } from "react-router-dom";
import ContactCard from "../ContactCard/ContactCard";
import { ImUserPlus } from "react-icons/im";
import { TbMoodEmpty } from "react-icons/tb";
import "./ContactList.css";
import { useSelector } from "react-redux";

const ContactList = () => {
  const { generalData } = useSelector((store) => store.allData);
  // console.log(generalData);

  const addANew = useNavigate();

  // for empty contact list
  const empty = (
    <div className="empty">
      <TbMoodEmpty className="empty-smiley" />
      <h2>No contact yet!</h2>
      <p onClick={() => addANew("/add")} className="click-to-add">
        click here to add
      </p>
    </div>
  );

  return (
    <div className="contact-list">
      <h1>CONTACTS</h1>
      <div className="contacts">
        {generalData.length === 0
          ? empty
          : generalData.map((contact) => (
              <ContactCard
                key={contact.id}
                contact={contact}
              />
            ))}
      </div>
      {generalData.length !== 0 && (
        <div className="adding-contacts" onClick={() => addANew("/add")}>
          <ImUserPlus className="user-add-btn" />
          <span className="tool-tip">Add new contact</span>
        </div>
      )}
    </div>
  );
};

export default ContactList;
