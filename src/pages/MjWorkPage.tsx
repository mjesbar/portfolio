import MjSectionWork from '../components/MjSectionWork';

const LINK_PROPS = { target: '_blank', rel: 'noreferrer' } as const;

export default function MjWorkPage() {
  return (
    <main className="flex w-full flex-col items-center justify-start">
      <MjSectionWork
        subtitle="Literals, Videogame Prototype"
        description1="Literals is a development that allowed me to improve my systems thinking skills. I learned about complex projects and code scalability."
        description2={
          <>
            Literals is a video game idea that I had a long time ago, and that I have been working on parallel whenever I can. Although it is a prototype for now, I hope to be able to leverage it as an official release in a store that allows me to distribute it as an indie game development. This project required C++, some Python script and{' '}
            <a href="https://godotengine.org/" {...LINK_PROPS}>Godot Engine</a> knowledge.
          </>
        }
        backgroundSrc="/assets/patreon-cover.webp"
        mediaSrc="/assets/literals*.webm"
        medias={2}
        iconTopSrc="/assets/videogame.webp"
        iconBotSrc="/assets/joystick.webp"
        linkUrl="https://github.com/mjesbar/literals"
      />
      <MjSectionWork
        subtitle="Erickson Stock, Photographic Gallery"
        description1="This was a project that I worked on as a freelance developer. I was in charge of the backend-end development of the website. Setting up the server for make available the images and videos."
        description2={
          <>
            The website required a lot of optimization for the images and videos. I had to make sure that the website was fast and responsive. I worked with the team to make sure that the website was user-friendly and that the user experience was the best possible. The team used C#, MySQL, <a href="https://www.asp.net/" {...LINK_PROPS}>ASP.NET</a> for the backend. The website was integrated with{' '}
            <a href="https://openai.com/api/" {...LINK_PROPS}>OpenAI API (ChatGPT)</a> for auto-tagging the images and videos. in an try to use the most advanced AI technologies available.
          </>
        }
        backgroundSrc="/assets/erickson-background.webp"
        mediaSrc="/assets/ericksonstock.webm"
        medias={1}
        iconTopSrc="/assets/ericksonstock-collage.webp"
        iconBotSrc="/assets/ericksonstock-collage2.webp"
        linkUrl="https://ericksonstock.com/"
      />
      <MjSectionWork
        subtitle="Martian Rover, AESS Rover Challenge Contest"
        description1={
          <>
            This project was a contest where some friends and I participated. The AESS organized a{' '}
            <a href="https://aesscolombia.blogspot.com/p/rover-2024.html" {...LINK_PROPS}>Contest</a> where we had to build a rover that could plant a seed of corn in a pot. The rover had to be controlled remotely and had to be able to navigate through natural obstacles. It was supposed to be implemented for real applications in agricultural Colombian farms as prototype.
          </>
        }
        description2="I write the firmware to Motion control, the communication via I2C, UART and Traditional Serial protocols in C++ and Python. We used a variantion of Rasberry Pi called Orange Pi."
        backgroundSrc="/assets/rover-design.webp"
        mediaSrc="/assets/rover.webm"
        medias={1}
        iconTopSrc="/assets/rover-design.webp"
        iconBotSrc="/assets/raspi-icon.webp"
        linkUrl="https://github.com/mjesbar/portfolio"
      />
      <MjSectionWork
        subtitle="My Portfolio, Professional Website"
        description1="This is my personal website. I created it to showcase my work and to show my skills as a developer. I wanted to create a website that was simple and minimalist, leveraging on Web Components of the Web API. Trying to use another technology apart from React.js which is the framework mostly I work with."
        description2={
          <>
            I used <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" {...LINK_PROPS}>Web Components</a> to create the website and pure{' '}
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" {...LINK_PROPS}>JavaScript</a>.
          </>
        }
        backgroundSrc="/assets/background.webp"
        mediaSrc="/assets/portfolio.webm"
        medias={1}
        iconTopSrc="/assets/profile-thumbnail.webp"
        iconBotSrc="/assets/meta-image.webp"
        linkUrl="https://github.com/mjesbar/portfolio"
      />
      <MjSectionWork
        subtitle="JobScraping"
        description1="Sometimes when we got fired or we are looking for a job, we need to search for job offers in different websites. This project is a web scraper that allows you to search for job offers in different websites at the same time. It is a simple project that I created to help me find a job when I was looking for one."
        description2={
          <>
            Also i was able to extract, transform and load the data saved in a parquet towards an Analytics tool like PowerBI or Tableau. I build a <a href="https://aws.amazon.com/lambda/" {...LINK_PROPS}>Lambda</a> function in my personal{' '}
            <a href="https://aws.amazon.com/" {...LINK_PROPS}>AWS</a> account to run the scraper every day and save the data in a{' '}
            <a href="https://aws.amazon.com/s3/" {...LINK_PROPS}>S3</a> Bucket.
          </>
        }
        backgroundSrc="/assets/jobpost-background.webp"
        mediaSrc="/assets/jobpost.webm"
        medias={1}
        iconTopSrc="/assets/aws-512.webp"
        iconBotSrc="/assets/selenium-500.webp"
        linkUrl="https://github.com/mjesbar/jobpost"
      />
      <MjSectionWork
        subtitle="CryptoScraping"
        description1="After eating a lot of courses about python, I got so bored and overwhelmed due to excessive information. So I decided to apply what I learned in a real project. This project is a web scraper that allows you to search for cryptocurrencies in different websites at the same time."
        description2={
          <>
            This was my first step on <a href="https://www.python.org/" {...LINK_PROPS}>Python</a> programming you can check the Github at the link below the media. don't be rude 😢.
          </>
        }
        backgroundSrc="/assets/cryptocurrency-background.webp"
        mediaSrc="/assets/cryptocurrency.webm"
        medias={1}
        iconTopSrc="/assets/bitcoin-512.webp"
        iconBotSrc="/assets/python-512.webp"
        linkUrl="https://github.com/mjesbar/cryptocurrency"
      />
    </main>
  );
}
