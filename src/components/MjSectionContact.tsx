import MjSection from './MjSection';

interface MjContactLink {
  href: string;
  icon: string;
  alt: string;
}

interface MjSectionContactProps {
  links: MjContactLink[];
}

export default function MjSectionContact({ links }: MjSectionContactProps) {
  return (
    <MjSection className="flex flex-col items-center justify-center">
      <div className="my-[3vh] flex w-[15vw] flex-row items-center justify-between">
        {links.map((link) => (
          <a key={link.alt} href={link.href} target="_blank" rel="noreferrer">
            <img src={link.icon} alt={link.alt} className="h-[5vh] w-[5vh] cursor-pointer" />
          </a>
        ))}
      </div>
    </MjSection>
  );
}
