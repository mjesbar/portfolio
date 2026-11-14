import MjFooter from '../components/MjFooter';
import MjSectionDual from '../components/MjSectionDual';
import MjSectionTextAlone from '../components/MjSectionTextAlone';

const DUAL_LINES = [
  'TradingGodBlessYouFirstPeaceFreedomRationalityProudTeamwork',
  'ManufactureBuildIdealVenture Work ProductivityLogisticsMentorship',
  'LogicInnovationDesign Service EnginuitySoftwareDevelopment',
  'IndependentJoyfulHumbleNeed About KindnessFriendly',
  'IntrovertLinkedWarmful Contact NetworkUpToDate',
  'HopeDiversityEnjoyPassionateEncourageFaithLoveHelpful',
];

export default function MjHomePage() {
  return (
    <>
      <main className="flex w-full flex-col items-center justify-start">
        <MjSectionTextAlone
          mainText="Welcome"
          subText="My Friend"
          miniText="Enjoy this page!"
          backgroundImage="/assets/neural.webp"
        />
        <MjSectionTextAlone
          mainText="My Name is Miguel Bello"
          subText="I'm an Industrial & Software Engineer"
          miniText="and even more..."
          backgroundImage="/assets/circles.webp"
        />
        <MjSectionDual imgPos="left" imgSrc="/assets/profile-photo-1440p.webp" lines={DUAL_LINES} />
      </main>
      <MjFooter
        message="Let's Create Great Things Together! 🚀"
        miniText="I've built this site with pure javascript Web Components, React makes me 😴 Dude"
      />
    </>
  );
}
