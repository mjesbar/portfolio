import MjSectionDual from '../components/MjSectionDual';

const DUAL_LINES = [
  'Trading God Bless You First Peace Freedom Rationality Proud Teamwork',
  'Manufacture Build Ideal Venture Work Productivity Logistics Mentorship',
  'Logic Innovation Design Service Enginuity Software Development',
  'Independent Joyful Humble Need About Kindness Friendly',
  'Introvert Linked Warmful Contact Network Up To Date',
  'Hope Diversity Enjoy Passionate Encourage Faith Love Helpful',
];

export default function MjHomePage() {
  return (
    <main className="flex w-full flex-col items-center justify-start">
      <MjSectionDual imgPos="left" imgSrc="/assets/profile-photo-1440p.webp" lines={DUAL_LINES} />
    </main>
  );
}
