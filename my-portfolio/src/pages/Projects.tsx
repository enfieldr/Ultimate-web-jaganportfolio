import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import Modal from '../components/Modal';

const projectsData = [
    {
        id: 1,
        title: 'Project One',
        description: 'Description of project one.',
        image: 'path/to/image1.jpg',
        link: 'https://github.com/user/project-one',
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'Description of project two.',
        image: 'path/to/image2.jpg',
        link: 'https://github.com/user/project-two',
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'Description of project three.',
        image: 'path/to/image3.jpg',
        link: 'https://github.com/user/project-three',
    },
];

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const handleOpenModal = (project) => {
        setSelectedProject(project);
    };

    const handleCloseModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onClick={() => handleOpenModal(project)}
                    />
                ))}
            </div>
            {selectedProject && (
                <Modal project={selectedProject} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default Projects;