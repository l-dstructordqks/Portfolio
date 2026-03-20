import React from 'react';
import { ProjectCard } from './ProjectCard';
import Globe from '../assets/svg/globe.svg?react';
import Html from '../assets/svg/skills/html.svg?react';
import Css from '../assets/svg/skills/css.svg?react';
import ReactJs from '../assets/svg/skills/react.svg?react';
import Ts from '../assets/svg/skills/typescript_official.svg?react';
import Tailwind from '../assets/svg/skills/tailwind.svg?react';
import Vite from '../assets/svg/skills/vite.svg?react';
import Sass from '../assets/svg/skills/sass.svg?react';
import Astro from '../assets/svg/skills/astro.svg?react';
import Api from '../assets/svg/skills/api.svg?react';
import Postgres from '../assets/svg/skills/postgresql.svg?react';
import Mongo from '../assets/svg/skills/mongo.svg?react';
import Auth from '../assets/svg/skills/jwt.svg?react';
import MySql from '../assets/svg/skills/mysql.svg?react';
import Python from '../assets/svg/python.svg?react';
import FastApi from '../assets/svg/skills/fast_api.svg?react';
import Express from '../assets/svg/skills/express.svg?react';
import Node from '../assets/svg/json.svg?react';
import Php from '../assets/svg/skills/php.svg?react';
import Docker from '../assets/svg/skills/docker.svg?react';
import Postman from '../assets/svg/skills/postman.svg?react';
import Claude from '../assets/svg/skills/claude.svg?react';
import GitHub from '../assets/svg/github.svg?react';
import Copilot from '../assets/svg/skills/copilot.svg?react';
import Composer from '../assets/svg/skills/composer.svg?react'


const FRONTEND = [
  { name: 'HTML', icon: Html },
  { name: 'CSS', icon: Css },
  { name: 'React', icon: ReactJs },
  { name: 'TypeScript', icon: Ts },
  { name: 'TailwindCSS', icon: Tailwind },
  { name: 'Vite', icon: Vite },
  { name: 'Sass', icon: Sass },
  { name: 'Astro', icon: Astro }
];

const BACKEND = [
  { name: 'PHP', icon: Php },
  { name: 'Node.js', icon: Node },
  { name: 'Express', icon: Express },
  { name: 'FastAPI', icon: FastApi },
  { name: 'Python', icon: Python },
  { name: 'MySQL', icon: MySql },
  { name: 'MongoDB', icon: Mongo },
  { name: 'PostgreSQL', icon: Postgres },
  { name: 'API RESTful', icon: Api },
  { name: 'UserAuthentication', icon: Auth },
  { name: 'Composer', icon: Composer },
];

const TOOLS = [
  { name: 'Docker', icon: Docker },
  { name: 'Postman', icon: Postman },
  { name: 'Claude', icon: Claude },
  { name: 'GitHub', icon: GitHub },
  { name: 'Microsoft Copilot', icon: Copilot },
];

export const Skills:React.FC = () => {
  return (
    <div className="flex-1 py-4 px-6 text-[13px] leading-[1.9]">
        <div><span className="text-[#6a9955]">#  Skills.py — Herramientas, lenguages y frameworks que manejo para construir soluciones digitales </span></div>
        <div>&nbsp;</div>
        <div><span className="text-syn-property">BACKEND</span><span className="text-vsc-text"> = </span><span className="text-syn-punct">{'{'}</span></div>

        <div className='px-3 gap-2'>
            {BACKEND.map((b) => (
                <div className="inline-flex h-[33.4px] items-center gap-2 text-syn-type text-vsc-text text-[13px] px-2 my-[8px] border border-vsc-border rounded transition-colors duration-150 hover:text-syn-property hover:border-vsc-accent bg-vsc-surface mr-3">
                    <b.icon className="h-4"/>
                    <p className='py-1'>{b.name}</p>
                </div>
            ))}
        </div>

        <div><span className="text-syn-punct">{'}'}</span></div>
        <div>&nbsp;</div>
        
        <div><span className="text-syn-property">FRONTEND</span><span className="text-vsc-text"> = </span><span className="text-syn-punct">{'{'}</span></div>

        <div className='px-3 gap-2'>
            {FRONTEND.map((f) => (
                <div className="inline-flex h-[33.4px] items-center gap-2 text-syn-type text-vsc-text text-[13px] px-2 my-[8px] border border-vsc-border rounded transition-colors duration-150 hover:text-syn-property hover:border-vsc-accent bg-vsc-surface mr-3">
                    <f.icon className="h-4"/>
                    <p className='py-1'>{f.name}</p>
                </div>
            ))}
        </div>
        
        <div><span className="text-syn-punct">{'}'}</span></div>
        <div>&nbsp;</div>

        <div><span className="text-syn-property">TOOLS</span><span className="text-vsc-text"> = </span><span className="text-syn-punct">{'{'}</span></div>

        <div className='px-3 gap-2'>
            {TOOLS.map((t) => (
                <div className="inline-flex h-[33.4px] items-center gap-2 text-syn-type text-vsc-text text-[13px] px-2 my-[8px] border border-vsc-border rounded transition-colors duration-150 hover:text-syn-property hover:border-vsc-accent bg-vsc-surface mr-3">
                    <t.icon className="h-4"/>
                    <p className='py-1'>{t.name}</p>
                </div>
            ))}
        </div>

        <div><span className="text-syn-punct">{'}'}</span></div>
        <div>&nbsp;</div>
    
    
     
        
        <div>
            <span className='text-syn-keyword'>def </span><span className="text-syn-function">create_fullstack_developer</span><span className="text-syn-punct">{'()'}</span><span className='text-vsc-text'>:</span>
        </div>
        <div>
            &nbsp;&nbsp;<span className="text-syn-property">skills</span><span className='text-vsc-text'> = </span><span className="text-syn-punct">{'{'}</span>
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-syn-string">'frontend'</span><span className='text-vsc-text'>: </span><span className="text-syn-property">FRONTEND</span><span className='text-vsc-text'>,</span>
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-syn-string">'backend'</span><span className='text-vsc-text'>: </span><span className="text-syn-property">BACKEND</span><span className='text-vsc-text'>,</span>
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-syn-string">'tools'</span><span className='text-vsc-text'>: </span><span className="text-syn-property">TOOLS</span><span className='text-vsc-text'>,</span>
        </div>
        <div>
            &nbsp;&nbsp;<span className="text-syn-punct">{'}'}</span>
        </div>
        <div>
            &nbsp;&nbsp;<span className="text-syn-action">return </span><span className="text-syn-string">skills</span>
        </div>
        
    
        
    
    
        
    </div>
  )
}
