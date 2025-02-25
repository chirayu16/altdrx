import Nav from "./components/Nav";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="pt-8 px-16">
      <Nav />
      <div className="pt-14">
        <Hero />
      </div>
    </div>
  );
}
