import React from 'react'



export const AboutMe:React.FC = () => {
  return (
    <div className="flex-1 py-4 px-6 text-[13px] leading-[1.9]">
        
        <div><span className="text-syn-comment">//  AboutMe.tsx — Conoce un poco más sobre mí</span></div>
        
        <div>&nbsp;</div>
        <div><span className="text-syn-keyword">interface</span> <span className="text-syn-type">Developer</span> <span className="text-syn-punct">{'{'}</span></div>
        <div>&nbsp;&nbsp;<span className="text-syn-property">nombre</span><span className="text-vsc-text">:</span> <span className="text-syn-type">string</span><span className="text-vsc-text">;</span></div>
        <div>&nbsp;&nbsp;<span className="text-syn-property">rol</span><span className="text-vsc-text">:</span> <span className="text-syn-type">string</span><span className="text-vsc-text">;</span></div>
        <div>&nbsp;&nbsp;<span className="text-syn-property">disponible</span><span className="text-vsc-text">:</span> <span className="text-syn-type">boolean</span><span className="text-vsc-text">;</span></div>
        <div>&nbsp;&nbsp;<span className="text-syn-property">cv</span><span className="text-vsc-text">:</span> <span className="text-syn-type">File</span><span className="text-vsc-text">;</span></div>
        <div><span className="text-syn-punct">{'}'}</span></div>
        <div>&nbsp;</div>
        <div><span className="text-syn-keyword">const</span> <span className="text-syn-function">me</span><span className="text-vsc-text">:</span> <span className="text-syn-type">Developer</span> <span className='text-vsc-text'>=</span> <span className="text-syn-punct"> {'{'}</span></div>
        <div>&nbsp;&nbsp;<span className="text-syn-property">nombre</span><span className="text-vsc-text">:</span> <span className="text-syn-string">"Sebastian Antezana Sulca"</span><span className="text-vsc-text">,</span></div>
        <div>&nbsp;&nbsp;<span className="text-syn-property">rol</span><span className="text-vsc-text">:</span> <span className="text-syn-string">"Full Stack Developer"</span><span className="text-vsc-text">,</span></div>
        <div>&nbsp;&nbsp;<span className="text-syn-property">disponible</span><span className='text-vsc-text'>:</span><span className="text-syn-keyword"> true</span><span className="text-vsc-text">,</span></div>
        <div>&nbsp;&nbsp;<span className="text-syn-property">cv</span><span className="text-vsc-text">:</span> <span className="text-syn-string">"CV_Sebastian_Antezana.pdf"</span><span className="text-vsc-text">,</span></div>
        
        
        <div>
            <span className="text-syn-punct">{'}'}</span><span className='text-vsc-text'>;</span></div>
        <div>&nbsp;</div>
        <div>
            <span className="text-syn-action">export </span><span className='text-syn-keyword'> const </span><span className="text-syn-function">AboutMe</span><span className='text-vsc-text'>:</span><span className='text-syn-type'> React</span><span className='text-vsc-text'>.</span><span className='text-syn-type'>FC</span><span className="text-syn-punct">&lt;</span><span className='text-syn-type'>Developer</span><span className="text-syn-punct">&gt;</span><span className='text-syn-punct'>{'('}</span><span className='text-syn-action'>{'{'}</span><span className="text-syn-property"> me </span><span className='text-syn-action'>{'}'}</span><span className="text-syn-punct">{')'}</span><span className='text-syn-keyword'> {'=>'} </span><span className='text-syn-punct'>{'{'}</span>
        </div>
        &nbsp;&nbsp;
            <span className="text-syn-action">return {'('}</span>
        
        
        <div className="bg-vsc-surface border border-vsc-border rounded-md p-5 my-4">

        <div className='flex gap-3 items-center'>
            <div className="w-20 h-20 rounded-full bg-linear-to-br from-vsc-accent to-syn-type flex items-center justify-center text-2xl mb-4 overflow-hidden">
                <img src="/avatarPorfile.png" className='h-19 mt-1' alt="" />
            </div>
            <div>
                <div className="text-syn-type text-[22px] font-semibold mb-1">
                    Sebastian Antezana Sulca
                </div>

                <div className="text-syn-property text-sm mb-1">
                    Full Stack Developer
                </div>

                <div className="text-vsc-text-muted text-[13px] mb-5">
                    📍 Valencia, España 🇪🇸
                </div>
            </div>
        </div>

            <p className="text-white-a text-[13px] leading-[1.7] mb-5 max-w-120">
                Soy un desarrollador apasionado por crear aplicaciones modernas y efeicientes. Con experiencia en el stack de MERN, me encanta transformar ideas en productos funcionales. He forjado mi base técnica de forma autodidacta siguiendo referentes como midudev. Disfruto aprendiendo constantemente y aportando soluciones eficientes y modernas.
            </p>

            <div className="text-xs text-syn-comment mb-2">
                // descarga mi cv y echale un vistazo
            </div>

            <a href="/CV_Sebastian_Antezana_Sulca.pdf" download>
                <button
                    className="bg-vsc-accent text-white px-6 py-2 rounded text-[13px] transition-colors hover:bg-[#1a8cd8] ml-1 mt-2"
                >
                    {'onClick={() => download(cv)}'}
                </button>
            </a>

        </div>

        <div>&nbsp;&nbsp;<span className="text-syn-action">{')'}</span></div>

        <div><span className="text-syn-punct">{'}'}</span></div>

        
    </div>
  )
}

