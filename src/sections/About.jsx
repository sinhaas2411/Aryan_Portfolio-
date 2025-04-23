import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';
import { skills, education } from '../constants';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('aaryan.sinha2411@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I'm Aryan</p>
              <p className="grid-subtext">
                An innovative Computer Science student with expertise in cloud computing, AI development, and full-stack software engineering.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Technical Expertise</p>
              <div className="grid-subtext space-y-2">
                {skills.map((category, index) => (
                  <div key={index} className="mb-2">
                    <p className="font-semibold text-gray-300">{category.category}:</p>
                    <p className="text-gray-400">{category.items.join(', ')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 28.6139, lng: 77.2090, text: 'Greater Noida, India', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Education</p>
              <div className="grid-subtext space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="mb-2">
                    <p className="font-semibold text-gray-300">{edu.school}</p>
                    <p className="text-gray-400">{edu.location}</p>
                    <p className="text-gray-400">{edu.degree}</p>
                    <p className="text-gray-400">{edu.duration}</p>
                    {edu.gpa && <p className="text-gray-400">{edu.gpa}</p>}
                    {edu.achievement && <p className="text-gray-400">{edu.achievement}</p>}
                  </div>
                ))}
              </div>
              <a href="#projects">
                <Button name="View Projects" isBeam containerClass="w-full mt-10" />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Technology</p>
              <p className="grid-subtext">
                I'm passionate about leveraging cutting-edge technologies to solve real-world problems. 
                My focus on cloud computing, AI, and full-stack development allows me to create innovative solutions 
                that drive operational efficiency and technological innovation.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="flex items-center gap-3">
                <button className="copy-btn" onClick={handleCopy}>
                  <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">aaryan.sinha2411@gmail.com</p>
                  <img src={hasCopied ? '/assets/tick.svg' : '/assets/copy.svg'} alt="copy" className="w-6 h-6" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
