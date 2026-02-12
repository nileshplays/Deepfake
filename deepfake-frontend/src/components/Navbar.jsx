import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-cyan-900 w-full px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl md:text-2xl font-bold text-white">
        Deepfake Detector
      </h1>

      <div className="flex gap-4 text-sm md:text-base">
        <Link className="hover:text-cyan-400" to="/">Home</Link>
        <Link className="hover:text-cyan-400" to="/detect">Detect</Link>
        <Link className="hover:text-cyan-400" to="/about">About</Link>
      </div>
    </nav>
  );
}
