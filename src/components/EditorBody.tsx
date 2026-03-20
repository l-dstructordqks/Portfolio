import React from 'react'
import {AboutMe} from './AboutMe'
import { Projects } from './Projects'
import { Contact } from './Contact'
import { Readme } from './Readme'
import { Skills } from './Skills'
import Stacks from './Stacks'
import { Route, useNavigate } from 'react-router'
import { Routes } from 'react-router'
import Ts from '../assets/svg/tsreact.svg?react';
import Python from '../assets/svg/python.svg?react';
import Md from '../assets/svg/readme.svg?react';
import Json from '../assets/svg/json.svg?react';

interface EditorBodyTabs {
  selectedTabs: string[];
  setSelectedTabs: React.Dispatch<React.SetStateAction<string[]>>; // Nueva prop
  activeSource: string;
  setActiveSource: (tab: string) => void; // Nueva prop
}

export const EditorBody:React.FC<EditorBodyTabs> = ({
    selectedTabs, 
    setSelectedTabs, 
    activeSource, 
    setActiveSource
}) => {

    const navigate = useNavigate();

    const TAB_ROUTES: Record<string, string> = {
        ReadMe: '/',
        Projects: '/projects',
        AboutMe: '/about-me',
        Stacks: '/stacks',
        Skills: '/skills',
        Contact: '/contact',
    };

    const closeTab = (e: React.MouseEvent, tabName: string) => {
        e.stopPropagation(); // Evita que se active la pestaña al cerrarla
        const newTabs = selectedTabs.filter(t => t !== tabName);
        setSelectedTabs(newTabs);

        // Si cerramos la pestaña activa, navegamos a la última disponible
        if (activeSource === tabName && newTabs.length > 0) {
        const lastTab = newTabs[newTabs.length - 1];
        setActiveSource(lastTab);
        navigate(TAB_ROUTES[lastTab]);
        }
    };

    const FILES = [
        { tab: 'ReadMe', Icon: Md, path: 'README.md', name: 'README.md' },
        { tab: 'AboutMe', Icon: Ts, path: 'frontend src AboutMe.tsx', name: 'AboutMe.tsx' },
        { tab: 'Projects', Icon: Ts, path: 'frontend src components Projects.tsx', name: 'Projects.tsx' },
        { tab: 'Skills', Icon: Python, path: 'backend api skills.py', name: 'skills.py' },
        { tab: 'Contact', Icon: Ts, path: 'frontend src components Contact.tsx', name: 'Contact.tsx' },
        { tab: 'Stacks', Icon: Json, path: 'frontend stacks.json', name: 'stacks.json' },
    ];

    const filteredFiles = FILES.filter(file => 
        selectedTabs.includes(file.tab)
    );
    //console.log(filteredFiles);

    const currentFile = filteredFiles.find(file => file.tab === activeSource);
    //console.log(currentFile?.path);

    
    const pathArray = currentFile?.path.split(" ")


  return (
    <div className="flex-1 flex flex-col h-full overflow-hidden">

        <div className="h-8.75 bg-vsc-surface flex items-end border-b border-vsc-bg overflow-x-auto [&::-webkit-scrollbar]:h-[4px] 
            [&::-webkit-scrollbar-thumb]:bg-[#424242] 
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-button]:hidden shrink-0">

            {filteredFiles.map((f) => (
                <div 
                    key={f.tab}
                    onClick={() => {
                        setActiveSource(f.tab);
                        navigate(TAB_ROUTES[f.tab]);
                    }}
                    className={`h-8.5 px-3 flex items-center justify-between gap-1 cursor-pointer ${activeSource == f.tab ? 'text-white border-t border-t-vsc-accent  bg-vsc-bg': 'border-r border-vsc-bg bg-vsc-surface2 text-[#969696]' } text-[13px] min-w-37 whitespace-nowrap group`} id="tab-about" /*onclick="switchTab('about')"*/>
                <f.Icon className="h-4"/>
                    <p>{f.name}</p>
                    <span 
                        onClick={(e) => closeTab(e, f.tab)}
                        className="ml-1 opacity-0 group-hover:opacity-100 text-base leading-none p-0.5 rounded-sm hover:bg-gray-a hover:text-white transition-opacity"
                    >
                        ×
                    </span>
            </div>
            /**text-white border-t border-t-vsc-accent  */
            ))}

        </div>


        <div className="h-6 bg-vsc-bg border-b border-vsc-surface flex items-center px-4 gap-1.5 text-[12px] text-vsc-text-muted shrink-0" id="breadcrumb">
            {pathArray?.map((p, i, arr) => {
                const isLast = i === arr.length - 1;
                
                return (
                    <React.Fragment key={i}>
                        <span className={isLast ? "text-white-a" : "text-vsc-text-muted"}>
                            {p}
                        </span>
                        
                        
                        <span className={isLast ? "text-white-a mx-1" : "text-[#555] mx-1"}>{'\u276F'}</span>
                        
                    </React.Fragment>
                );
            })}

        </div>

        
        <div className="flex-1 overflow-y-auto bg-vsc-bg flex [&::-webkit-scrollbar]:w-[4px] 
            [&::-webkit-scrollbar-thumb]:bg-[#424242] 
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-button]:hidden font-jetbrains">
      
        {/* PARTE SCROLL */}
        <div className="flex flex-row w-full min-h-full" id="panel-projects" /*style="flex-direction:row"*/>
                <div className="py-4 px-2 pr-3 min-w-12 text-right text-vsc-text-dim text-[13px] leading-[1.9] select-none bg-vsc-bg border-r border-vsc-surface">
                    {Array.from({ length: 45 }, (_, i) => (
                        <div key={i}>{i + 1}</div>
                    ))}
                </div>
                {/*<Contact />*/}
                {/*<Projects/>*/}
                {/*<AboutMe />*/}
                {/*<Readme/>*/}
                {/*<Skills />*/}
                {/*Stacks */}
                <Routes>
                    <Route path="/" element={<Readme />} />
                    <Route path="/stacks" element={<Stacks />} />
                    <Route path="/about-me" element={<AboutMe />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                </Routes>
                
                
                
                <div className="minimap"></div>
            </div>
            
        </div>
        {/* PARTE SCROLL */}
        
    </div>
  )
}
