import Nav from "../components/Nav";
import Footer from "../components/Footer";
import SectionCategories from "../components/SectionCategories";
import CardsFood from "../components/CardsFood";



function page() {
  return (
    <div className="bg-inherit">
    <Nav/>
    <SectionCategories/>
    <CardsFood/>
    <Footer/>
    </div>
  )
}

export default page