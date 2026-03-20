import React, { useEffect, useState } from 'react';
import { ExplorerBar } from './Explorer';
import Settings from '../assets/svg/settings.svg?react';
import Experimental from '../assets/svg/experimental.svg?react';
import Certifications from '../assets/svg/certifications.svg?react';
import Search from '../assets/svg/search.svg?react';
import Explorer from '../assets/svg/explorer.svg?react';
import { EditorBody } from './EditorBody';
import { useLocation } from 'react-router';


export const Sidebar:React.FC = () => {
  const location = useLocation();

  const [activeSection, setActiveSection] = useState(['Explorer']);
  const [sidebar, setSidebar] = useState(true);
  const [selectedTabs, setSelectedTabs] = useState(['ReadMe']);
  const [activeSource, setActiveSource] = useState('ReadMe');
  
  const toggleSection = (item:string) => {
    if(activeSection.includes(item)) {
      setSidebar(!sidebar);
      return;
    }
    setActiveSection([item]);
  }

  const routeToTab: Record<string, string> = {
    '/': 'ReadMe',
    '/projects': 'Projects',
    '/about-me': 'AboutMe',
    '/stacks': 'Stacks',
    '/skills': 'Skills',
    '/contact': 'Contact',
  };

  // Sincronización automática
  useEffect(() => {
    const currentTab = routeToTab[location.pathname];
    if (currentTab) {
      setActiveSource(currentTab);
      // Opcional: Si quieres que al entrar directo a una URL se abra la pestaña
      if (!selectedTabs.includes(currentTab)) {
        setSelectedTabs(prev => [...prev, currentTab]);
      }
    }
  }, [location.pathname]);


  return (
    <div className='flex flex-1 min-h-0 min-w-0 overflow-hidden'>
        <div className="w-[48px] h-full flex flex-col items-center py-2 border-r bg-vsc-activity border-vsc-surface justify-between shrink-0">
          <div className='gap-3 flex flex-col items-center justify-center'>
            
            <div className={`relative w-[34px] h-[34px] flex items-center justify-center cursor-pointer rounded bg-transparent transition-colors duration-150 hover:text-white-a ${activeSection.includes('Explorer') ? 'text-white-a ' : 'text-vsc-text-muted'}`} /*onclick="toggleSidebar()"*/ title="Explorer" onClick={() => toggleSection('Explorer')}>
            { activeSection.includes('Explorer') && (<div className='absolute h-[24px] w-0.5 bg-vsc-accent rounded-0 top-1/2 -translate-y-1/2 -left-1.75 rounded-sm'></div>) }
              <Explorer />
            </div>
            <div className={`relative w-[34px] h-[34px] flex items-center justify-center cursor-pointer rounded bg-transparent transition-colors duration-150 hover:text-white-a ${activeSection.includes('Search') ? 'text-white-a ' : 'text-vsc-text-muted'}`} title="Search" onClick={() => toggleSection('Search')}>
            { activeSection.includes('Search') && (<div className='absolute h-[24px] w-0.5 bg-vsc-accent rounded-0 top-1/2 -translate-y-1/2 -left-1.75 rounded-sm'></div>) }
              <Search />
            </div>
            <div className={`relative w-[34px] h-[34px] flex items-center justify-center cursor-pointer rounded bg-transparent transition-colors duration-150 hover:text-white-a ${activeSection.includes('Certifications') ? 'text-white-a ' : 'text-vsc-text-muted'}`} title="Certifications" onClick={() => toggleSection('Certifications')}>
            { activeSection.includes('Certifications') && (<div className='absolute h-[24px] w-0.5 bg-vsc-accent rounded-0 top-1/2 -translate-y-1/2 -left-1.75 rounded-sm'></div>) }
              <Certifications className='h-6 w-6'/>
            </div>
            <div className={`relative w-[34px] h-[34px] flex items-center justify-center cursor-pointer rounded bg-transparent text-vsc-text-muted transition-colors duration-150 hover:text-white-a ${activeSection.includes('Experimental') ? 'text-white-a ' : 'text-vsc-text-muted'}`} title="Experimental" onClick={() => toggleSection('Experimental')}>
            { activeSection.includes('Experimental') && (<div className='absolute h-[24px] w-0.5 bg-vsc-accent rounded-0 top-1/2 -translate-y-1/2 -left-1.75 rounded-sm transition'></div>) }
              <Experimental className='h-6 w-6'/>
            </div>
          </div><div>
            <div className="relative w-[34px] h-[34px] flex items-center justify-center cursor-pointer rounded bg-transparent text-vsc-text-muted transition-colors duration-150 hover:text-white-a" /*style="margin-top:auto"*/ title="Settings">
              <Settings className='h-6 w-6'/>
            </div>
          </div>
        </div>
        {/*activeSection == 'Explorer' && <ExplorerBar />*/}
        { activeSection.includes('Explorer') && (<ExplorerBar active={sidebar} tabs={selectedTabs} 
        setTabs={setSelectedTabs} setActiveSource={setActiveSource} />) }
        <EditorBody 
          selectedTabs={selectedTabs} 
          setSelectedTabs={setSelectedTabs} // Pasamos la función
          activeSource={activeSource}
          setActiveSource={setActiveSource} // Pasamos la función
        />
        
    </div>
  )
}