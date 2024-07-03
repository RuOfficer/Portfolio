import "./App.css";
import { Header } from "./layout/header/Header";
import { Main } from "./layout/sections/main/Main";
import { Skills } from "./layout/sections/main/skills/Skills";
import { Works } from "./layout/sections/main/works/Works";
import { Testimony } from "./layout/testimony/Testimony";
import { Footer } from "./layout/footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <Testimony />
      <Footer />
    </div>
  );
}

export default App;
