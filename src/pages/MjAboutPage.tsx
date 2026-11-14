import MjSectionAbout from '../components/MjSectionAbout';

export default function MjAboutPage() {
  return (
    <main className="flex w-full flex-col items-center justify-start">
      <MjSectionAbout
        subtitle="About Me"
        description={
          <>
            As a versatile and experienced full-stack developer, software engineer, and embedded systems specialist, I have a diverse skill set that allows me to tackle a wide range of projects. With a strong foundation in computer science and a passion for problem-solving, I excel at designing and implementing efficient, scalable, and user-friendly solutions.
            <br /><br />
            As a software engineer, I thrive on the challenge of designing and developing complex systems, whether it's optimizing algorithms, enhancing system performance, or ensuring code maintainability and scalability. I stay up-to-date with the latest industry trends and methodologies, continuously expanding my knowledge to deliver innovative and impactful software solutions. In the field of embedded systems, I excel at designing and implementing embedded software for a variety of hardware platforms, from microcontrollers to system-on-chip (SoC) devices. My expertise in low-level programming, real-time systems, and hardware-software integration allows me to create reliable and efficient embedded solutions that meet the unique requirements of diverse industries.
            <br /><br />
            Whether you're looking for a full-stack developer, software engineer, or embedded systems specialist, I am confident in my ability to contribute to your organization's growth and success.
          </>
        }
        photoSrc="/assets/meta-image.webp"
      />
    </main>
  );
}
