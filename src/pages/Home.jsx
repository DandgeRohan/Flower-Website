import Hero_Banner from "../components/common/home/Hero_Banner";
import Home_About from "../components/common/home/Home_About";
import Services from "../components/common/home/Services";
import Banner1 from "../assets/banner1.png";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Hero_Banner />
      <Home_About />
      <Services />
      <section className="banner_background min-h-[60vh] md:min-h-screen bg-no-repeat bg-cover md:bg-fixed rounded-4xl"></section>

      <section className="layout my-20">
        <header className="text-center">
          <h3 className="text-sm font-bold text-text mb-4">
            Work with us
          </h3>
          <h2 className="text-4xl font-bold md:max-w-[80%] lg:max-w-[60%] mx-auto mb-10">
            Discover how we can add a touch of natural
            beauty to your next event.
          </h2>
          <Link to={"/about"}>
            <button className="px-6 py-2 bg-yellow text-sm font-bold text-black rounded">
              About
            </button>
          </Link>
        </header>
      </section>
    </>
  );
};

export default Home;