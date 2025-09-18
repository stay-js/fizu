import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { MoveRight } from 'lucide-react';

const Page: React.FC = () => (
  <main className="grid min-h-screen items-center bg-neutral-950 p-6 text-white">
    <div className="flex flex-col items-center gap-6 text-center">
      <h1 className="text-5xl font-bold">Üdv a Fizu App-ban 💸</h1>
      <p className="text-lg text-neutral-400">Kezeld a munkáidat és pozícióidat egyszerűen.</p>

      <Button asChild className="flex w-fit items-center gap-2">
        <Link href="/dashboard">
          <span className="text-black">Irány a Dashboard</span>
          <MoveRight color="black" />
        </Link>
      </Button>
    </div>
  </main>
);

export default Page;
