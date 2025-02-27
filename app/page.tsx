import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tab from "./components/Tab";
import Step from "./components/Step";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <><div className="pt-8 px-16">
      <Nav />
      <div className="pt-14">
        <Hero />
      </div>
      <div className="pt-8">
        <Tab />
      </div>
      <Step />
    </div><div>
        <Footer />
      </div></>
  );
}
