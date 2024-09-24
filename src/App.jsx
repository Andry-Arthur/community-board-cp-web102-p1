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
                          title='The Gettysburger Co.'
                          type='American'
                          url='https://www.thegettysburgercompany.com/'
                ></ItemCard>
                <ItemCard image='https://lh3.googleusercontent.com/p/AF1QipO6sydKQ8g4Mls9WP7KHkN7SoeXN2k9MRS5VRzS=s1360-w1360-h1020'
                          title='The sign of the Buck'
                          type='American'
                          url='https://signofthebuck.com/'
                ></ItemCard>
                <ItemCard image='https://boroughbbq.com/wp-content/uploads/2023/12/BoroughBBQ_PickOfCounty_BookAd_GT415143-1.png'
                          title='Borough BBQ'
                          type='Barbecue'
                          url='https://boroughbbq.com/'
                ></ItemCard>
                <ItemCard image='https://lh5.googleusercontent.com/p/AF1QipPaMvKbnNNdoqv1VraQr53xQZq7ZT9j8E1nw5oU=w86-h87-n-k-no'
                          title='Blue & Gray Grill'
                          type='Grill'
                          url='https://www.bluegraybargrill.com/'
                ></ItemCard>
                <ItemCard image='https://lh3.googleusercontent.com/p/AF1QipOF_TVKVCDq_WdBmXsl_Xt5Fr6-BH7ZBp52Pr0z=s1360-w1360-h1020'
                          title='The Pub & Restaurant'
                          type='Pub'
                          url='https://www.the-pub.com/'
                ></ItemCard>

            </div>
        </div>
    )
}

export default App
