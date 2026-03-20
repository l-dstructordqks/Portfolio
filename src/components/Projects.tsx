import React from 'react'
import { ProjectCard } from './ProjectCard'



export const Projects = () => {

    const projects = [
    {
        icon: "🗓️",
        name: "Todo App",
        description: "CRUD app with ReactJS",
        technologies: ["React", "Node.js", "Stripe", "PostgreSQL"],
        linkRepo: "https://github.com/l-dstructordqks/reactjs-todolist",
        linkDemo: "https://todoslistreactjsss.netlify.app/"
    },
    {
        icon: "🚀",
        name: "NasaApi App",
        description: "ReactJS, linked to nasa API",
        technologies: ["ReactJS", "Tailwind", "nasa API"],
        linkRepo: "https://github.com/l-dstructordqks/nasa-react-app",
        linkDemo: "https://nasaapiwreact.netlify.app/"
    },
    {
        icon: "🍴",
        name: "Tarawasi Restaurant",
        description: "Consulta el clima en tiempo real de cualquier ciudad del mundo.",
        technologies: ["PHP","SQL", "JS", "Sass Modules", "MVC architecture"],
        linkRepo: "https://github.com/l-dstructordqks/TarawasiRestaurant",
        linkDemo: "https://github.com/l-dstructordqks/TarawasiRestaurant"
    },
    {
        icon: "⚖️",
        name: "Lawyer Services Website",
        description: "CRUD app with ReactJS",
        technologies: ["React", "React Router", "Tailwind"],
        linkRepo: "https://github.com/l-dstructordqks/lawyer-website",
        linkDemo: "https://lawyerwebsite69.netlify.app/"
    },
    {
        icon:"🧠",
        name: "MERN Thinkboard",
        description: "CRUD app with MERN stack",
        technologies: ["React", "Mongo DB", "Tailwind", "NodeJS", "ExpressJS"],
        linkRepo: "https://github.com/l-dstructordqks/mern-thinkboard",
        linkDemo: "https://lawyerwebsite69.netlify.app/"
    },
    {
        icon: "📊",
        name: "Audit-Shield",
        description: "A tools desinged to undersatnad supply chain security",
        technologies: ["FastAPI", "Typescript", "React","Tailwind", "Python"],
        linkRepo: "https://github.com/l-dstructordqks/lawyer-website",
        linkDemo: "https://lawyerwebsite69.netlify.app/"
    },
    ];
// TODO: Tarawasi demo link, all data to MERN Tinkboard , and audit sield

  return (
    <div className="flex-1 py-4 px-6 text-[13px] leading-[1.9]">
        <div><span className="text-syn-comment">//  Projects.tsx — Mis proyectos</span></div>
        <div>&nbsp;</div>
        <div><span className="text-syn-keyword">interface</span> <span className="text-syn-type">ProjectList </span><span className="text-syn-punct">{'{'}</span></div>
        <div>&nbsp;&nbsp;<span className="text-syn-property">projects</span><span className="text-vsc-text">:</span> <span className="text-syn-type">Project</span><span className="text-syn-action">{'[]'}</span><span className="text-vsc-text">;</span></div>
        <div><span className="text-syn-punct">{'}'}</span></div>
        <div>&nbsp;</div>

    
     
        
        <div>
            <span className="text-syn-action">export </span><span className='text-syn-keyword'> const </span><span className="text-syn-function">Projects</span><span className='text-vsc-text'>:</span><span className='text-syn-type'> React</span><span className='text-vsc-text'>.</span><span className='text-syn-type'>FC</span><span className="text-syn-punct">&lt;</span><span className='text-syn-type'>ProjectList</span><span className="text-syn-punct">&gt;</span><span className='text-syn-punct'>{'('}</span><span className='text-syn-action'>{'{'}</span><span className="text-syn-property"> projects </span><span className='text-syn-action'>{'}'}</span><span className="text-syn-punct">{')'}</span><span className='text-syn-keyword'> {'=>'} </span><span className='text-syn-punct'>{'{'}</span>
        </div>
        <div>
            &nbsp;&nbsp;<span className="text-syn-action">return {'('}</span>
        </div>
        &nbsp;&nbsp;&nbsp;&nbsp;
            <span className="text-syn-property">{'{'}projects</span><span className="text-vsc-text">.</span><span className="text-syn-function">map</span><span className='text-syn-punct'>{'('}</span><span className='text-syn-action'>{'('}</span><span className="text-syn-property">project</span><span className="text-vsc-text">, </span><span className="text-syn-property">index</span><span className='text-syn-action'>{')'}</span><span className='text-syn-keyword'>{' => '}</span><span className='text-syn-action'>{'('}</span>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 my-4 mr-1">
            {/* Esto emula el comportamiento, pero no es tan fluido como el minmax */}
            {projects.map((project, index) => (
                <ProjectCard
                    key={index} // O usa project.name si es único
                    icon={project.icon}
                    name={project.name}
                    description={project.description}
                    technologies={project.technologies}
                    linkRepo={project.linkRepo}
                    linkDemo={project.linkDemo}
                />
            ))}
        </div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-syn-action">{')'}</span><span className="text-syn-punct">{')'}</span></div>

        <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-syn-property">{'}'}</span></div>

        <div>&nbsp;&nbsp;<span className="text-syn-action">{')'}</span></div>

        <div><span className="text-syn-punct">{'}'}</span></div>



        
    </div>
  )
}

/**
 * 
name="EcommerceApp"
                description="Plataforma de comercio electrónico con carrito, autenticación y pagos."
                technologies={["React", "Node.js", "Stripe", "PostgreSQL"]}
                linkRepo="https://github.com/tuusuario/ecommerce-app"
                linkDemo="https://ecommerce-demo.com"
<ProjectCard
                    
                    linkGH='https://github.com/l-dstructordqks/TarawasiRestaurant'
                    linkN='https://github.com/l-dstructordqks/TarawasiRestaurant'
                    h3='Tarawasi Restaurant'
                    p='PHP, JS, Sass, SQL, reservation API, and MVC architecture'
                    color="url(/tarawasiapp.png)"
                />
                
                <ProjectCard
                    
                    linkGH='https://github.com/l-dstructordqks/nasa-react-app'
                    linkN='https://nasaapiwreact.netlify.app/'
                    h3='NasaApi App'
                    p='ReactJS, linked to nasa API'
                    color="url(/nasaapp.png)"
                />
                <ProjectCard
                    
                    linkGH='https://github.com/l-dstructordqks/reactjs-todolist'
                    linkN='https://todoslistreactjsss.netlify.app/'
                    h3='Todo App'
                    p='CRUD app with ReactJS'
                    color="url(/todoapp.png)"
                />
                <ProjectCard
                    
                    linkGH='https://github.com/l-dstructordqks/lawyer-website'
                    linkN='https://lawyerwebsite69.netlify.app/'
                    h3='Lawyer Services Website'
                    p='ReactJS, React Router, Tailwind'
                    color="url(/lawyer-website.png)"
                />
 */