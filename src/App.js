import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Hero from "./Views/Hero";
import Experience from "./Views/experience/Experience";
import Contact from "./Views/contacts/Contact";
import Header from "./components/Header";
// import Project from "./Views/Projects/Project";


function App() {
  return (
   <> 
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Header />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
              {/* <Route path="/projet" element={<Project />} /> */}
          </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
