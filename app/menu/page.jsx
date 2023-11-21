import Nav from "../components/Nav";
import Footer2 from "../components/Footer2";
import SectionCategories from "../components/SectionCategories";
import CardsFood from "../components/CardsFood";



function page() {
  return (
    <div className="bg-inherit ">
    <Nav/>
    <div className="container inline-flex">
    <SectionCategories/>
    <CardsFood/>
    </div>
    
    <Footer2/>
    </div>
  )
}

export default page