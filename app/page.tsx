import TopBackground from "./components/Hero/TopBackground";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

export default function Home() {
  return (
    <div className="relative" id="home">
      <Section />
      <Navbar />
      <TopBackground />
    </div>
  );
}
