import './App.css';
import { Routes, Route } from 'react-router-dom';
import ContactList from "./contactComponent/ContactList/ContactList"
import AddContact from './contactComponent/AddContact/AddContact';
import Navbar from './contactComponent/NavBar/Navbar';
import Contact from './contactComponent/contact/contact';
import Favorites from './contactComponent/favorites/Favorites';
import EditContact from './contactComponent/EditContact/EditContact';
import CallScreen from './contactComponent/CallScreen/CallScreen';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
// export const UseInfo = createContext()

const App = () => {
  // from the database
  const { generalData, favorites } = useSelector(store => store.allData)

  // setting every change in the database
  useEffect (() => {
    localStorage.setItem('contacts', JSON.stringify(generalData))
    localStorage.setItem('favorites', JSON.stringify(favorites))
  },
  [generalData, favorites]
  )

  return (
    <div className='App'>
        <Routes>
          <Route element={<Navbar />}>
            <Route path='/' element={<ContactList />} />
            <Route path='/favorites' element={<Favorites />} />
          </Route>
          <Route path='/call/:id' element={<CallScreen />} />
          <Route path='/add' element={<AddContact />} />
          <Route path='/contact/:id' element={<Contact />} />
          <Route path='/edit/:id' element={<EditContact />} />
        </Routes>
    </div>
  )
}

export default App;

  // <div className="App">
  //   <h1>this should show right here</h1> 
  //   <GoogleMapReact
  //     bootstrapURLKeys={{key:googleApiKey}}
  //     defaultCenter={coordinates}
  //     center={coordinates}
  //     defaultZoom={14}
  //     margin={[50, 50, 50, 50]}
  //     options={''}
  //   >

  //   </GoogleMapReact>
  // </div>

  // function App() {
  //   const coordinates = {lat: 0, lng: 0}

  // const googleApiKey = 'AIzaSyCET4YIFQSmvf-2A-zCI7vKvsB0tJnq0XA'