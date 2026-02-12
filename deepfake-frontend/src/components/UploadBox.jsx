import { useRef, useState } from "react";

export default function UploadBox({ setFile }) {
  const fileInputRef = useRef(null);
  const [dragging, setDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    setFile(e.dataTransfer.files[0]);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div
      className={`p-8 rounded-2xl border-2 border-dashed transition-all duration-300 ${
        dragging ? "border-cyan-400 bg-white/10" : "border-gray-600"
      }`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}
      onDragLeave={() => setDragging(false)}
      onDrop={handleDrop}
    >
      <p className="text-center text-gray-300 mb-4">
        Drag & Drop Image or Video Here
      </p>

      {/* Hidden input */}
      <input
        type="file"
        accept="image/*,video/*"
        ref={fileInputRef}
        onChange={(e) => setFile(e.target.files[0])}
        className="hidden"
      />

      {/* Upload Button */}
      <div className="flex justify-center">
        <button
          onClick={handleButtonClick}
          className="bg-cyan-600 hover:bg-cyan-800 px-6 py-2 rounded-xl font-semibold transition cursor-pointer"
        >
          Upload File
          
        </button>
        
      </div>

    </div>
  );
}
