export default function ResultCard({ result }) {

  const isFake = result.result === "Fake";

  return (
    <div className="mt-10 bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/20 shadow-xl">

      <h2 className={`text-3xl font-bold mb-4 ${isFake ? "text-red-400" : "text-green-400"}`}>
        {result.result}
      </h2>

      <p className="text-gray-300 mb-4">
        Confidence: {result.confidence}%
      </p>

      <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden mb-4">
        <div
          className={`h-4 rounded-full ${isFake ? "bg-red-500" : "bg-green-500"}`}
          style={{ width: `${result.confidence}%` }}
        ></div>
      </div>

      {/* ✅ ADD IT HERE */}
      <p className="mt-4 text-sm text-gray-400">
        {isFake
          ? "This media is likely AI-generated."
          : "This media appears authentic."}
      </p>

    </div>
  );
}
