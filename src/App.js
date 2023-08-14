import './App.css';
import PreNavbar from "./components/PreNavbar"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router ,Route , Routes} from 'react-router-dom';
import Slider from "./components/Slider.js"
import data from "./data/data.json";
import Offers from "./components/Offer"
import Heading from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"
import HotAccessoriesMenu from "./components/HotAccessoriesMenu.js"
import HotAccessories from "./components/HotAccessories.js"
import ProductReviews from "./components/ProductReviews.js"
import Videos from "./components/videos.js"
import Baneer from "./components/banner.js"
import Footer from "./components/footer.js"
import NavOption from "./components/NavOption"

function App() {
  return (
<Router>
  <PreNavbar/>
  <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/>
  <Navbar/> 
  <Slider start={data.banner.start}/>
  <Offers offer={data.offer}/>
  <Heading text="STAR PRODUCT" />
  <StarProduct starProduct={data.starProduct}/>
  <Heading text="HOT ACCESSORIES" />
  <HotAccessoriesMenu/>
  <Routes>
      <Route exact path='/music' element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music}/>}>
      </Route>
      <Route exact path='/smartDevice' element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice}/>}>
      </Route>
      <Route exact path='/home' element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home}/>}>
      </Route>
      <Route exact path='/lifestyle' element={<HotAccessories lifestyle={data.hotAccessories.lifeStyle} lifestyleCover={data.hotAccessoriesCover.lifeStyle}/>}>
      </Route>
      <Route exact path='/mobileAccessories' element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories}/>}>
      </Route>
  </Routes>
  <Heading text="PRODUCT REVIEWS" />
  <ProductReviews ProductReviews={data.productReviews}/>
  <Heading text="VIDEOS" />
  <Videos videos={data.videos}/>
  <Heading text="IN THE PRESS" />
  <Baneer banner={data.banner}/>
  <Footer footer={data.footer}/>
</Router>
  );
}

export default App;
