import Analytics from "./components/Analytics";
import Footer from "./components/Footer";
import FormNotification from "./components/FormNotification";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Plans from "./components/Plans";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Analytics />
      <FormNotification />
      <Plans />
      <Footer />
    </>
  );
}

export default App;
