import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center text-center px-6">

      <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
        AI Deepfake Detection
      </h1>

      <p className="text-teal-300 max-w-xl mb-8">
        Upload a human image or video and instantly detect whether it is real or AI-generated using deep learning.
      </p>

      <Link to="/detect">
        <button className="bg-cyan-600 hover:bg-cyan-800 px-8 py-3 rounded-xl font-semibold transition cursor-pointer">
          Start Detecting
        </button>
      </Link>

    </div>
  );
}
