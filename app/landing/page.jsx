import BannerMenu from "../components/BannerMenu.jsx";
import Footer2 from "../components/Footer2.jsx";
import Nav from "../components/Nav.jsx";

const page = () => {
  return (
    <div className="w-full bg-[#3C3C3C] flex flex-col ">
      <Nav />

      <BannerMenu />

      <Footer2 />
    </div>
  );
};

export default page;
