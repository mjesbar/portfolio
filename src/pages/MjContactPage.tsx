import MjSectionContact from '../components/MjSectionContact';

const CONTACT_LINKS = [
  { href: 'https://www.linkedin.com/in/mdjba', icon: '/assets/linkedin.webp', alt: 'LinkedIn Link' },
  { href: 'https://github.com/mjesbar', icon: '/assets/github.webp', alt: 'GitHub Link' },
  { href: 'https://x.com/mjesbar', icon: '/assets/twitter.webp', alt: 'Twitter Link' },
  { href: 'https://wa.me/3046798036?text=Hello!', icon: '/assets/whatsapp.webp', alt: 'WhatsApp Link' },
];

export default function MjContactPage() {
  return (
    <main className="flex w-full flex-col items-center justify-start">
      <MjSectionContact
        subtitle="Contact Me"
        description="I'm always open to new opportunities and collaborations."
        links={CONTACT_LINKS}
      />
    </main>
  );
}
