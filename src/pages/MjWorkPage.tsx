import MjScroller from '../components/MjScroller';
import work from '../../content/work.json';

export default function MjWorkPage() {
  return (
    <main className="w-full">
      <MjScroller items={work.projects} />
    </main>
  );
}
