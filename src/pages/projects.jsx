import { Link } from 'react-router-dom';



<Link to ="./projects" className='text-white underline'>projects</Link>


const Projects = () => {
  return (
    <div className="text-white p-10">
      <h1 className="text-4xl font-bold mb-4">All Projects</h1>
      {/* You can render a grid or list of <ProjectCard /> here if you want */}
    </div>
  );
};

export default Projects;