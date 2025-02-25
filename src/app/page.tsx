import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Welcome to English Fun Cards</h1>
      <p>This tools will boost your confident and make your speaking practice is more fun.</p>
      <Link href={'/question'}>Go to Questions</Link>
    </div>
  );
}
