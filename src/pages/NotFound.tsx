import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-bg px-6 text-center">
      <p className="mb-4 font-display italic text-6xl text-text-primary">404</p>
      <p className="mb-8 text-muted">This page doesn&apos;t exist.</p>
      <Link
        to="/"
        className="rounded-full border border-stroke px-6 py-3 text-sm text-text-primary transition-colors hover:border-transparent hover:bg-stroke/50"
      >
        Back home
      </Link>
    </div>
  );
}
