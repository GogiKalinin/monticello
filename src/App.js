import Header from "./Components/Header/Header";
import "./App.sass";
import Footer from "./Components/Footer/Footer";
import LatestNews from "./Components/LatestNews/LatestNews";
import { WhatWeDo } from "./Components/WhatWeDo/WhatWeDo";
import SimpleSlider from "./Components/NewsSlider/NewsSlider";

function App() {
  return (
    <div className="App">
      <Header />
      <WhatWeDo />
      <LatestNews />
      <Footer />
    </div>
  );
}

export default App;
