// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Detect from "./pages/Detect";
// import About from "./pages/About";
// import Footer from "./components/Footer";


// export default function App() {
//   return (
//     <div className="min-h-screen">
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/detect" element={<Detect />} />
//         <Route path="/about" element={<About />} />
//       </Routes>

//       <Footer />
//     </div>
//   );
// }

import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Detect from "./pages/Detect";
import About from "./pages/About";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="h-screen flex flex-col">

      <Navbar />

      <div className="flex-1 flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detect" element={<Detect />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      <Footer />

    </div>
  );
}
