'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useUser, SignInButton } from '@clerk/nextjs';
import { MoveRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { motion, useInView } from 'framer-motion';

const Section = ({
  children,
  direction = 'center',
}: {
  children: React.ReactNode;
  direction?: 'left' | 'right' | 'center';
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const variants = {
    hidden: { opacity: 0, x: direction === 'left' ? -100 : direction === 'right' ? 100 : 0 },
    visible: { opacity: 1, x: 0 },
  };

  let marginClass = 'mx-auto';
  if (direction === 'left') marginClass = 'ml-5 mr-auto';
  else if (direction === 'right') marginClass = 'mr-5 ml-auto';

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`${marginClass} max-w-lg px-6 py-20`}
    >
      {children}
    </motion.div>
  );
};

export default function Landing() {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/dashboard');
    }
  }, [user, router]);

  return (
    <main className="min-h-screen bg-neutral-950">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <h1 className="text-5xl font-bold">Welcome to JobKeeper 💸</h1>
        <p className="mt-4 text-lg text-neutral-400">Manage your jobs and positions with ease.</p>

        <SignInButton mode="modal">
          <Button className="mt-6 flex w-fit items-center gap-2">
            <span className="text-black">Go to Dashboard</span>
            <MoveRight color="black" />
          </Button>
        </SignInButton>
      </section>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-4 md:grid-cols-2">
        <Section direction="left">
          <h2 className="text-3xl font-bold">Track Your Jobs</h2>
          <p className="mt-2 text-neutral-400">Keep all your jobs organized in one place.</p>
        </Section>

        <Section direction="right">
          <h2 className="text-3xl font-bold">Manage Positions</h2>
          <p className="mt-2 text-neutral-400">
            Easily handle multiple roles and responsibilities.
          </p>
        </Section>
      </div>

      <Section direction="center">
        <h2 className="text-3xl font-bold">Boost Productivity</h2>
        <p className="mt-2 text-neutral-400">
          Focus on what matters while JobKeeper takes care of the rest.
        </p>
      </Section>
    </main>
  );
}
