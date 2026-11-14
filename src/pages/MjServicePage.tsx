import MjScroller from '../components/MjScroller';
import service from '../../content/service.json';

export default function MjServicePage() {
  return (
    <main className="w-full">
      <MjScroller items={service.services} />
    </main>
  );
}
