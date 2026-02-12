export default function Preview({ file }) {

  if (!file) {
    return (
      <div className="bg-white/5 p-6 rounded-xl border border-white/10 flex items-center justify-center">
        <p className="text-gray-400">No Preview</p>
      </div>
    );
  }

  const url = URL.createObjectURL(file);

  return (
    <div className="bg-white/5 p-6 rounded-xl border border-white/10">

      {file.type.includes("video") ? (
        <video src={url} controls className="rounded-lg w-full" />
      ) : (
        <img src={url} className="rounded-lg w-full" />
      )}

    </div>
  );
}
