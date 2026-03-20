import React from 'react'



const Stacks:React.FC = () => {
  return (
    <div className="flex-1 py-4 px-6 text-[13px] leading-[1.9]">
        
        <div><span className="text-syn-punct">{'{'}</span></div>

        <div>&nbsp;&nbsp;<span className="text-[#6a9955]">//  Stack Principal </span></div>
        <div>
            &nbsp;&nbsp;<span className="text-syn-property">"MERN Stack"</span><span className='text-vsc-text'>: </span><span className="text-syn-action">{'{'}</span>
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-vsc-text">"database"</span><span className='text-vsc-text'>: </span><span className="text-syn-string">"MongoDB"</span><span className='text-vsc-text'>,</span>
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-vsc-text">"backend"</span><span className='text-vsc-text'>: </span><span className="text-syn-string">"Express, TypeScript"</span><span className='text-vsc-text'>,</span>
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-vsc-text">"frontend"</span><span className='text-vsc-text'>: </span><span className="text-syn-string">"ReactJS, TypeScript, TailwindCSS"</span><span className='text-vsc-text'>,</span>
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-vsc-text">"enviroment"</span><span className='text-vsc-text'>: </span><span className="text-syn-string">"NodeJs"</span><span className='text-vsc-text'>,</span>
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-vsc-text">"package manager"</span><span className='text-vsc-text'>: </span><span className="text-syn-string">"npm"</span><span className='text-vsc-text'>,</span>
        </div>
        <div>
            &nbsp;&nbsp;<span className="text-syn-action">{'}'}</span><span className='text-vsc-text'>,</span>
        </div>

        <div>&nbsp;&nbsp;<span className="text-[#6a9955]">// Stack Complementario </span></div>
        <div>
            &nbsp;&nbsp;<span className="text-syn-property">"LAMP Stack"</span><span className='text-vsc-text'>: </span><span className="text-syn-action">{'{'}</span>
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-vsc-text">"database"</span><span className='text-vsc-text'>: </span><span className="text-syn-string">"MySQL"</span><span className='text-vsc-text'>,</span>
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-vsc-text">"backend"</span><span className='text-vsc-text'>: </span><span className="text-syn-string">"PHP"</span><span className='text-vsc-text'>,</span>
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-vsc-text">"frontend"</span><span className='text-vsc-text'>: </span><span className="text-syn-string">"HTML JavaScript Sass"</span><span className='text-vsc-text'>,</span>
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-vsc-text">"enviroment"</span><span className='text-vsc-text'>: </span><span className="text-syn-string">"Apache"</span><span className='text-vsc-text'>,</span>
        </div>
        <div>
            &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-vsc-text">"package manager"</span><span className='text-vsc-text'>: </span><span className="text-syn-string">"composer"</span><span className='text-vsc-text'>,</span>
        </div>
        <div>
            &nbsp;&nbsp;<span className="text-syn-action">{'}'}</span><span className='text-vsc-text'>,</span>
        </div>

        <div><span className="text-syn-punct">{'}'}</span></div>
        <div>&nbsp;</div>  
            
    </div>
  )
}

export default Stacks