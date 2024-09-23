import './App.css'
import ItemCard from './components/ItemCard'
import storeRoof from './assets/store-roof.png'
const App = () => {
    return (
        <div className="App">
            <div className='header'>
                <img src={storeRoof}></img>
                <h1>Local Gettysburg Food Favorites</h1>
            </div>
            <div className="container">
                <ItemCard image='https://gettysburgconnection.org/wp-content/uploads/2021/08/NYnyHAL99-1.jpg'
                          title='NY Halal Truck'
                          type='Middle Eastern'
                          url='https://www.instagram.com/nyhalalgyro/'
                ></ItemCard>
                <ItemCard image='https://vrconcierge.com/wp-content/uploads/2021/12/the-gettysburger-company-gettysburg-pa-food-1-768x512.jpg'
                          title='The Gettysburger'
                          type='American'
                          url='https://www.thegettysburgercompany.com/'
                ></ItemCard>
                <ItemCard image='https://vrconcierge.com/wp-content/uploads/2021/12/the-gettysburger-company-gettysburg-pa-food-1-768x512.jpg'
                          title='The Gettysburger'
                          type='American'
                          url='https://www.thegettysburgercompany.com/'
                ></ItemCard>
            </div>
        </div>
    )
}

export default App
