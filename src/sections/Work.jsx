import { motion } from 'framer-motion';
import { workExperiences } from '../constants';

const Work = () => {
  return (
    <section className="c-space my-20" id="work">
      <div className="w-full mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h2 className="text-4xl font-bold text-white">Professional Experience</h2>
          <p className="text-gray-400 max-w-2xl">
            My professional journey includes internships and training programs where I've developed expertise in cloud computing, AI, and software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {workExperiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#1d1836] p-6 rounded-2xl hover:bg-[#2a1f4a] transition-colors duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img src={experience.icon} alt={experience.name} className="w-12 h-12" />
                <div>
                  <h3 className="text-xl font-bold text-white">{experience.name}</h3>
                  <p className="text-gray-400">{experience.pos}</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">{experience.duration}</p>
              <p className="text-gray-300">{experience.title}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work; 