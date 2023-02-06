import Header from "./Components/Header/Header";
import "./App.sass";
import Footer from "./Components/Footer/Footer";
import LatestNews from "./Components/LatestNews/LatestNews";

function App() {
  return (
    <div className="App">
      <Header />
      <LatestNews />
      <Footer />
      <h1></h1>
    </div>
  );
}

export default App;
