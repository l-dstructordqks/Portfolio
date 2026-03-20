import React, { useState, type Dispatch, type SetStateAction } from 'react'
import SrcOpen from '../assets/svg/src_open.svg?react';
import Src from '../assets/svg/src_close.svg?react';
import ChevronDown from '../assets/svg/chevron_down.svg?react';
import ChevronRight from '../assets/svg/chevron_right.svg?react';
import Backend from '../assets/svg/backend.svg?react';
import BackendOpen from '../assets/svg/backend_open.svg?react';
import Frontend from '../assets/svg/frontend.svg?react';
import FrontendOpen from '../assets/svg/frontend_open.svg?react';
import Python from '../assets/svg/python.svg?react';
import Components from '../assets/svg/components.svg?react';
import ComponentsOpen from '../assets/svg/components_open.svg?react';
import Typescript from '../assets/svg/tsreact.svg?react';
import Readme from '../assets/svg/readme.svg?react';
import Folder from '../assets/svg/folder.svg?react';
import FolderOpen from '../assets/svg/folder_open.svg?react';
import Json from '../assets/svg/json.svg?react';
import { useLocation, useNavigate } from 'react-router';



interface ExplorerProps {
    active: boolean,
    tabs: string[],
    setTabs: Dispatch<SetStateAction<string[]>>;
    setActiveSource: Dispatch<SetStateAction<string>>;
}

type FolderState = {
    portfolio: boolean;
    backend: boolean;
    api: boolean;
    frontend: boolean;
    src: boolean;
    components: boolean;
};

export const ExplorerBar:React.FC<ExplorerProps> = ({active, setTabs,  setActiveSource }) => {
    const ROUTES = {
        ReadMe: '/',
        Projects: '/projects',
        AboutMe: '/about-me',
        Stacks: '/stacks',
        Skills: '/skills',
        Contact: '/contact',
    }

    //const [tabs, setTabs] = useState(['ReadMe']);
    const [folder, setFolder] = useState<FolderState>({
        portfolio: true,
        backend: true,
        api: true,
        frontend: true,
        src: true,
        components: true,
    });

    const [activeFolder, setActiveFolder] = useState<keyof FolderState | null>(null);

    const navigate = useNavigate();
    const location = useLocation();

    const activeFile = (Object.keys(ROUTES) as Array<keyof typeof ROUTES>).find(
        (key) => ROUTES[key] === location.pathname
    ) ?? 'ReadMe';

    /*const toggleFile = (item:string) => {
        if(activeFile == item) {
            return;
            //activeSection.remo
        }
        setActiveFile(item);

        addTab(item);
    }*/

    const toggleFile = (item: keyof typeof ROUTES) => {
        addTab(item);
    }

    const toggleFolder = (name: keyof FolderState) => {
        setActiveFolder(name);

        setFolder(prev => ({
            ...prev,
            [name]: !prev[name],
        }));
    }

    const addTab = (file: keyof typeof ROUTES) => {
        const route = ROUTES[file];
        if (!route) return;

        setTabs(prev => prev.includes(file) ? prev : [...prev, file]);
        setActiveSource(file);
        navigate(route);
    }

  return (
    <div className={`${active ? 'w-55' : 'w-0'} flex flex-col overflow-hidden border-r transition-[width] duration-200 bg-vsc-surface border-vsc-bg`} id="sidebar">
        <div className="pt-2.5 px-3 pb-1.5 text-[11px] font-semibold uppercase tracking-widest text-[#bbbbbb]">Explorer</div>
        <div className="flex-1 overflow-y-auto">
            <div className={`flex items-center gap-1.5 px-3 py-0.75 text-[13px] text-white-a cursor-pointer ${activeFolder == 'portfolio' ? 'bg-vsc-active' : 'hover:bg-vsc-hover' }`} onClick={() => toggleFolder('portfolio')}>
                <span className="w-3 items-center">
                    {folder.portfolio ? <ChevronDown /> : <ChevronRight /> }
                </span> 
                <p className='font-bold'>PORTFOLIO</p>
            </div>

            {folder.portfolio && 
                <div className='text-[13px] text-white-a'>
                    <div className={`px-3 pl-6 flex items-center py-0.75 cursor-pointer ${activeFolder == 'backend' ? 'bg-vsc-active' : 'hover:bg-vsc-hover' } gap-1`} onClick={() => toggleFolder('backend')}>
                        <span className="flex gap-1 items-center">
                        {folder.backend ? <ChevronDown /> : <ChevronRight /> }
                        {folder.backend ? <BackendOpen className="h-4.25" /> : <Backend className="h-4.25" />}
                        </span> 
                        <p>backend</p>
                    </div>

                    {folder.backend && 
                        <>
                        <div className={`px-3 pl-9 flex items-center py-0.75 text-[13px] cursor-pointer hover:bg-vsc-hover gap-1  ${activeFolder == 'api' ? 'bg-vsc-active' : 'hover:bg-vsc-hover' }`} /*style="padding-left:24px"*/onClick={() => toggleFolder('api')}>
                            <span className="flex gap-1 items-center">
                            {folder.api ? <ChevronDown /> : <ChevronRight /> }
                            {folder.api ? <FolderOpen className="h-4.25" /> : <Folder className="h-4.25" /> }
                            </span> 
                            <p>api</p>
                        </div>
                        
                        {folder.api && 
                            <>
                                <div className={`px-3 pl-17 flex items-center gap-1.5 pr-3 py-0.75 cursor-pointer transition-colors duration-100 ${activeFile == 'Skills' ? 'bg-vsc-active' : 'hover:bg-vsc-hover' }`} id="file_skills" onClick={() => toggleFile('Skills')}/*onclick="switchTab('about')"*/>
                                    <span className="file-icon-ts">
                                    <Python className="h-4 w-4"/>
                                    </span> 
                                    <p>skills.py</p>
                                </div>

                                
                            </>
                        }
                        </>
                    }

                    {/* FRONTEND FOLDER */}
                    <div className={`px-3 pl-6 flex items-center py-0.75 cursor-pointer gap-1 ${activeFolder == 'frontend'  ? 'bg-vsc-active' : 'hover:bg-vsc-hover' }`} onClick={() => toggleFolder('frontend')}>
                        <span className="flex gap-1 items-center">
                        {folder.frontend ? <ChevronDown /> : <ChevronRight /> }
                        {folder.frontend ? <FrontendOpen className="h-4.25" /> : <Frontend className="h-4.25" />}
                        </span> 
                        <p>frontend</p>
                    </div>
                    {folder.frontend && 
                        <>
                            <div className={`px-3 pl-9 flex items-center py-0.75 text-[13px] cursor-pointer gap-1  ${activeFolder == 'src'  ? 'bg-vsc-active' : 'hover:bg-vsc-hover' }`} onClick={() => toggleFolder('src')}>
                                <span className="flex gap-1 items-center">
                                    {folder.src ? <ChevronDown /> : <ChevronRight /> }
                                    {folder.src ? <SrcOpen className="h-4.25" /> : <Src className="h-4.25" /> }
                                </span> 
                                <p>src</p>
                            </div>
                            
                            {folder.src &&
                                <>
                                    <div className={`px-3 pl-12 flex items-center py-0.75 cursor-pointer gap-1 ${activeFolder == 'components'  ? 'bg-vsc-active' : 'hover:bg-vsc-hover' }`} onClick={() => toggleFolder('components')}>
                                        <span className="flex gap-1 items-center">
                                            {folder.components ? <ChevronDown /> : <ChevronRight /> }
                                            {folder.components ? <ComponentsOpen className="h-4 w-4"/> : <Components className="h-4 w-4"/> }
                                        </span> 
                                        <p>components</p>
                                    </div>

                                    {folder.components && 
                                        <>
                                            <div className={`px-3 pl-20 flex items-center gap-1.5 pr-3 py-0.75 cursor-pointer transition-colors duration-100 ${activeFile == 'Projects' ? 'bg-vsc-active' : 'hover:bg-vsc-hover' }`} id="file-projects" onClick={() => toggleFile('Projects')}>
                                                <span className="">
                                                <Typescript className="h-4 w-4"/>
                                                </span> 
                                                <p>Projects.tsx</p>
                                            </div>

                                            <div className={`px-3 pl-20 flex items-center gap-1.5 pr-3 py-0.75 cursor-pointer transition-colors duration-100 ${activeFile == 'Contact' ? 'bg-vsc-active' : 'hover:bg-vsc-hover' }`} id="file-contact" onClick={() => toggleFile('Contact')}>
                                                <span className="">
                                                <Typescript className="h-4 w-4"/>
                                                </span> 
                                                <p>Contact.tsx</p>
                                            </div>
                                        </>
                                    }

                                
                            

                                    <div className={`px-3 pl-17 flex items-center gap-1.5 pr-3 py-0.75 cursor-pointer transition-colors duration-100 ${activeFile == 'AboutMe' ? 'bg-vsc-active' : 'hover:bg-vsc-hover' }`} id="file-about_me" onClick={() => toggleFile('AboutMe')}>
                                    <span className="">
                                        <Typescript className="h-4 w-4"/>
                                    </span> 
                                    <p>AboutMe.tsx</p>
                                    </div>

                                    <div className={`px-3 pl-14 flex items-center gap-1.5 pr-3 py-0.75 cursor-pointer transition-colors duration-100 ${activeFile == 'Stacks' ? 'bg-vsc-active' : 'hover:bg-vsc-hover' }`} id="file-stacks" onClick={() => toggleFile('Stacks')}>
                                    <span className="">
                                        <Json className="h-4 w-4"/>
                                    </span> 
                                    <p>stacks.json</p>
                                    </div>
                                </>
                            }

                        
                            
                        </>
                    }

                    <div className={`px-3 pl-11 flex items-center gap-1.5 pr-3 py-0.75 cursor-pointer transition-colors duration-100 ${activeFile == 'ReadMe' ? 'bg-vsc-active' : 'hover:bg-vsc-hover'}`} id="file-readme" onClick={() => toggleFile('ReadMe')}>
                    <span className="">
                        <Readme className="h-4 w-4"/>
                    </span> 
                    <p>README.md</p>
                    </div>

            

                </div>
            }
            

        </div>
    </div>
  )
}