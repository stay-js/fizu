import { createMetadata } from '~/utils/create-metadata';
import Landing from '~/components/landing';

export const metadata = createMetadata({
  path: '/',
  title: 'Home',
  description:
    'Stay on top of your career with JobKeeper. Track jobs, positions, and progress all in one simple dashboard.',
});

export default function Page() {
  return <Landing />;
}
