import TopBackground from "./components/Hero/TopBackground";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="relative" id="home">
      <div className="w-screen h-screen"></div>
      <Navbar />
      <TopBackground />
    </div>
  );
}
