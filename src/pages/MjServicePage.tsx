import MjSectionService from '../components/MjSectionService';

export default function MjServicePage() {
  return (
    <main className="flex w-full flex-col items-center justify-start">
      <MjSectionService
        subtitle="Desktop Software Development"
        description={
          <>
            As an experienced software engineer, I have honed my skills in developing robust and efficient desktop and server-side applications using C++ and Python. These powerful programming languages allow me to create high-performance, scalable, and cross-platform solutions that cater to a wide range of business needs.
            <br /><br />
            With a strong foundation in object-oriented programming and a deep understanding of data structures and algorithms, I am adept at designing and implementing complex software systems. Whether it's building custom desktop applications, developing server-side APIs, or integrating with various databases and cloud services, I am well-equipped to tackle a diverse range of software development challenges.
          </>
        }
        imgSrc="/assets/ccjspy.webp"
      />
      <MjSectionService
        subtitle="Fullstack Web Development"
        description={
          <>
            As a fullstack web developer, I specialize in building robust and scalable web applications using a combination of powerful backend technologies and cutting-edge frontend frameworks. My expertise spans Django and ASP.NET for the backend, providing efficient data management and server-side logic.
            <br /><br />
            On the frontend, I leverage the flexibility of React.js and the versatility of the Web Components API to craft dynamic, user-friendly interfaces that deliver seamless experiences. With a deep understanding of both backend and frontend development, I am able to architect complete solutions that meet the evolving needs of modern web applications.
          </>
        }
        imgSrc="/assets/api-integration.webp"
      />
      <MjSectionService
        subtitle="Cloud Services Integration"
        description={
          <>
            The cloud has become an integral part of modern software development, and I have extensive experience in leveraging the power of leading cloud platforms to build scalable and reliable applications. My expertise spans Google Cloud Platform (GCP) and Amazon Web Services (AWS), where I have utilized a wide range of services, from compute and storage to data processing and machine learning.
            <br /><br />
            I am adept at designing and implementing cloud-native architectures that take advantage of the flexibility, scalability, and cost-effectiveness of these platforms. Whether it's deploying containerized applications, setting up serverless functions, or integrating cloud-based data analytics, I am committed to delivering high-performing, secure, and efficient cloud solutions that drive business value.
          </>
        }
        imgSrc="/assets/cloud-services.webp"
      />
      <MjSectionService
        subtitle="IoT Development"
        description="Leveraging the power of Arduino, OrangePi, and Raspberry Pi, I have explored the vast potential of the Internet of Things. From automating home environments to optimizing agricultural processes, these versatile platforms have enabled me to create innovative solutions that seamlessly integrate digital technologies with the physical world. By combining my expertise in embedded systems, sensor integration, and cloud connectivity, I have developed IoT-driven applications that enhance efficiency, improve sustainability, and unlock new possibilities in both domestic and agricultural domains."
        imgSrc="/assets/iot-integration.webp"
      />
      <MjSectionService
        subtitle="System Design & Architechture"
        description={
          <>
            I have a deep understanding of system design principles and architectural patterns. I excel at analyzing complex requirements, identifying optimal solutions, and translating them into scalable, maintainable systems.
            <br /><br />
            My expertise spans a wide range of domains, from real-time data processing and cloud-native applications. I'm passionate about staying up-to-date with the latest industry trends and continuously improving my skills to deliver high-performance, resilient, and secure systems.
          </>
        }
        imgSrc="/assets/system-design.webp"
      />
    </main>
  );
}
