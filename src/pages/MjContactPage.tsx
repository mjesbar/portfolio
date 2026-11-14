import MjSectionContact from '../components/MjSectionContact';
import contact from '../../content/contact.json';

export default function MjContactPage() {
  return (
    <main className="flex w-full flex-col items-center justify-start">
      <MjSectionContact {...contact} />
    </main>
  );
}
