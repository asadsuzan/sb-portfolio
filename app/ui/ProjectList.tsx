
import React, { useEffect } from 'react';
import ProjectCard from './ProjectCard'; 
import { TProjectSummary } from '../types';
import { getProjectsSummary } from '../services/project';



const ProjectList = () => {
  const [projects, setProjects] = React.useState<TProjectSummary[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    console.log("ProjectList component rendered");

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getProjectsSummary();
               
                setProjects(data?.data || []);
            } catch (error) {
                console.error("Failed to fetch projects:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, [])

  

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 mb-[40px] gap-[30px]">
      {projects.map((project) => (
        <ProjectCard key={project._id} project={
            {
                basicInfo: project.basicInfo,
                meta: project.meta,
                _id: project._id,
                screenshots: project.screenshots,
            }
        } />
      ))}
    </div>
  );
};

export default ProjectList;
