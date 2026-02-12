export default function Footer() {
  return (
    <footer className="bg-cyan-900 mt-16 border-t border-white/10 py-6 text-center text-sm text-white">

      <p>
        © {new Date().getFullYear()} nileshplays. All rights reserved.
      </p>

      <div className="flex justify-center gap-6 mt-3">

        <a
          href="https://github.com/nileshplays"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/nileshsarkar/"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/nileshplays"
          target="_blank"
          className="hover:text-cyan-400 transition"
        >
          Instagram
        </a>

      </div>

    </footer>
  );
}
