import './Home.css'
import NavCard from '../../components/NavCard/NavCard'
import Bara1 from '../../assets/BaraSmashin.jpg'
import Bara2 from '../../assets/blackBara.jpg'
import Bara3 from '../../assets/niggaBara.jpg'

export default function Home({}) {
  return (
    <>
      <div className='row d-flex justify-content-center'>
        <NavCard src = {Bara1} title = "About us" link = "../pages/About/About.jsx"/>
        <NavCard src = {Bara2} title = "Products" link = "../pages/Product/Product.jsx"/>
        <NavCard src = {Bara3} title = "Review" link = "../pages/Review/Review.jsx"/>
      </div>
    </>
  )
}
