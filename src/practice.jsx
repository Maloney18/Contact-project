import { useContext } from "react"
import { UseInfo } from "./App"


const [contacts, setContacts, carryInfo] = useContext(UseInfo)
const allContacts = carryInfo.map( (contact) => 
  console.log(contact.sort((a,b) => a.name - b.name))
  
)

