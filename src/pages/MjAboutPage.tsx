import MjScroller from '../components/MjScroller';
import about from '../../content/about.json';

export default function MjAboutPage() {
  return (
    <main className="w-full">
      <MjScroller items={[about]} />
    </main>
  );
}
