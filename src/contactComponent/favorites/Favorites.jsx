import { useSelector } from 'react-redux'
import { TbMoodEmpty } from 'react-icons/tb'
import './favorite.css'
import { Link } from 'react-router-dom'

const Favorites = () => {
   const { favorites } = useSelector(store => store.allData)

   // for empty favorite-contact list
    const empty = (
        <div className="fav-empty">
            <TbMoodEmpty className='fav-empty-smiley'/>
            <h2 className='fav-empty-word'>No favorite contact(s)</h2>
        </div>
    )

    return (
        <div className='fav-page'>
            <h1>FAVORITES</h1>

            <div className="all-fav">
                { 
                    favorites.length === 0 ?
                    empty :
                    favorites.map(fav => (
                        <Link key = {fav.id} to={`/contact/${fav.id}`} state={fav} className='fav-link' >
                            <div 
                                key={fav.id} 
                                className="fav-contact"
                            >
                                <div 
                                    className="fav-profile-image"
                                    style={
                                        fav.image !== 'Images/Image.jpg' ?
                                        {
                                            content: '',
                                            background: `url('${fav.image}')`,
                                            backgroundSize: 'cover',
                                            backgroundPosition: 'center'
                                        } : 
                                        { 
                                            content: '',
                                            backgroundColor: `${fav.color}`
                                        }
                                    }
                                >
                                    {
                                        fav.image === 'Images/Image.jpg' ?
                                        (<p className='fav-word'>{fav.Name[0].toUpperCase()}</p>) : ''
                                    }
                                </div>
                                <div className="fav-info">
                                    <h2>{fav.Name}</h2> 
                                    <p className='fav-phone'>{fav.Phone}</p>
                                </div>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}
export default Favorites;