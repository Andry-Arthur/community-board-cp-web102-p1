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
                <ItemCard image='https://lh3.googleusercontent.com/p/AF1QipPaMvKbnNNdoqv1VraQr53xQZq7ZT9j8E1nw5oU=s1360-w1360-h1020'
                          title='Blue & Gray Grill'
                          type='Grill'
                          url='https://www.bluegraybargrill.com/'
                ></ItemCard>
                <ItemCard image='https://lh3.googleusercontent.com/p/AF1QipOF_TVKVCDq_WdBmXsl_Xt5Fr6-BH7ZBp52Pr0z=s1360-w1360-h1020'
                          title='The Pub & Restaurant'
                          type='Pub'
                          url='https://www.the-pub.com/'
                ></ItemCard>
                <ItemCard image='https://lh3.googleusercontent.com/p/AF1QipNYTl_OJlfnCm8TrjLwhEGZus5wWIXiNbwgl3sH=s1360-w1360-h1020'
                          title='Garryowen Irish Pub'
                          type='Irish Pub'
                          url='https://garryowen-irish-pub.square.site/'
                ></ItemCard>
                <ItemCard image='https://theuppercrustpizzas.com/wp-content/uploads/2023/12/TheUpperCrust_PickOfCounty_BookAd_GT415145-1.png'
                          title='The Upper Crust'
                          type='Pizza'
                          url='https://theuppercrustpizzas.com/'
                ></ItemCard>
                <ItemCard image='https://lh3.googleusercontent.com/p/AF1QipPA3niRurXexg_-gxpQW1a-6AEj4cmRY3bs70c7=s1360-w1360-h1020'
                          title='CJ`s Takeout'
                          type='American Food Truch'
                          url='https://www.cjstakeout.com/'
                ></ItemCard>
                <ItemCard image='https://lh3.googleusercontent.com/p/AF1QipN6DVohu2YcNar6eQrBNEGiUlAEoiNbV31wUMqC=s1360-w1360-h1020'
                          title='Appalachian Brewing Co.'
                          type='Brewry & Grill'
                          url='https://www.abcbrew.com/'
                ></ItemCard>
                <ItemCard image='https://huntsfries.weebly.com/uploads/1/3/7/1/137165603/hunt-s-battlefield-fries-3_orig.jpg'
                          title='Hunt`s Battlefield Fries'
                          type='American'
                          url='https://huntsfries.weebly.com/'
                ></ItemCard>
                <ItemCard image='https://lh3.googleusercontent.com/p/AF1QipNK8iUT0lhwbHjkMFEj-hftMwSXwyn6sK-1ZszX=s1360-w1360-h1020'
                          title='Pizza House'
                          type='Pizza'
                          url='https://www.pizzahousegettysburg.com/'
                ></ItemCard>
            </div>
        </div>
    )
}

export default App
