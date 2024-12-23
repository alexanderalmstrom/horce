import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h1 className="text-2xl">404 Not Found</h1>
      <Link href="/" className="underline underline-offset-2">
        Back to home page
      </Link>
    </div>
  );
}
