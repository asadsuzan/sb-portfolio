'use client';

import { motion } from 'framer-motion';
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiNodedotjs,
  SiExpress,
  SiTypescript,
  SiJavascript,
  SiGit,
  SiFigma,
  SiPostgresql,
  SiPrisma,
} from 'react-icons/si';

const skills = [
  { name: 'Next.js', icon: <SiNextdotjs size={28} /> },
  { name: 'React', icon: <SiReact size={28} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={28} /> },
  { name: 'TypeScript', icon: <SiTypescript size={28} /> },
  { name: 'JavaScript', icon: <SiJavascript size={28} /> },
  { name: 'Node.js', icon: <SiNodedotjs size={28} /> },
  { name: 'Express.js', icon: <SiExpress size={28} /> },
  { name: 'MongoDB', icon: <SiMongodb size={28} /> },
  { name: 'PostgreSQL', icon: <SiPostgresql size={28} /> },
  { name: 'Prisma', icon: <SiPrisma size={28} /> },
  { name: 'Git', icon: <SiGit size={28} /> },
  { name: 'Figma', icon: <SiFigma size={28} /> },
];

export default function Skills() {
  return (
    <div className="px-6 md:px-10 py-16 bg-[#011c2b]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Tech Stack</h2>
        <p className="text-[#b2becd] mb-12 max-w-2xl mx-auto">
          Technologies I use to build beautiful, scalable, and performant web applications.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.08 }}
              className="group flex flex-col items-center justify-center bg-[#00283a] hover:bg-[#004e75] text-white p-5 rounded-xl shadow-md transition duration-300"
            >
              {skill.icon}
              <span className="mt-2 text-sm text-[#cdd9e5] group-hover:text-white transition">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
