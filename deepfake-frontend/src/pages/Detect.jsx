import { useState } from "react";
import UploadBox from "../components/UploadBox";
import Preview from "../components/Preview";
import Loader from "../components/Loader";
import ResultCard from "../components/ResultCard";
import { detectDeepfake } from "../services/api";

export default function Detect() {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleDetect = async () => {
    if (!file) return alert("Please upload a file");

    setLoading(true);
    setResult(null);

    try {
      const res = await detectDeepfake(file);
      setResult(res.data);
    } catch (error) {
      console.error(error);

      if (error.response) {
        alert("Server error: " + error.response.data.error);
      } else if (error.request) {
        alert("Backend not running!");
      } else {
        alert("Unexpected error occurred.");
      }
    }

    setLoading(false);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UploadBox setFile={setFile} />
        <Preview file={file} />
      </div>

      <div className="flex justify-center mt-6">
        <button
          onClick={handleDetect}
          className="bg-cyan-600 hover:bg-cyan-800 px-8 py-3 rounded-xl font-semibold cursor-pointer"
        >
          Detect
        </button>
      </div>

      {loading && <Loader />}
      {result && <ResultCard result={result} />}
    </div>
  );
}
