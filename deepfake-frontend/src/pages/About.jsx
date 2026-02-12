export default function About() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold mb-4">About This Project</h1>

      <p className="text-gray-300 mb-4">
        This system detects deepfake human images and videos using a deep learning model trained on real and fake face datasets.
      </p>

      <ul className="list-disc ml-6 text-gray-300">
        <li>Frontend: React + Tailwind</li>
        <li>Backend: Node.js + FastAPI</li>
        <li>Model: Xception CNN</li>
      </ul>

    </div>
  );
}
