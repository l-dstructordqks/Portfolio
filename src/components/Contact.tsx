import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import GitHub from '../assets/svg/github.svg?react';
import LinkedIn from '../assets/svg/linkedin.svg?react';

export const Contact:React.FC  = ()=> {
    const [isSending, setIsSending] = useState(false);
    const [payload, setPayload] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setPayload({ ...payload, [e.target.name]: e.target.value });
    };

    const sendContact = async (e: React.FormEvent) => {
        e.preventDefault();
        
        // Validaciones básicas
        if (!payload.name || !payload.email || !payload.message) {
            alert("Por favor completa los campos requeridos.");
            return;
        }

        setIsSending(true);

        try {
            await emailjs.send(
                'service_z4i90rl',  
                'template_earo77g',  
                {
                    from_name: payload.name,
                    from_email: payload.email,
                    subject: payload.subject,
                    message: payload.message,
                },
                'Gqi1IlU4_D8xVNIU-'    
            );

            alert('¡Mensaje enviado con éxito! 🚀');
            setPayload({ name: '', email: '', subject: '', message: '' }); // Limpiar form
        } catch (error) {
            console.error('Error:', error);
            alert('Hubo un error al enviar el mensaje. Inténtalo de nuevo.');
        } finally {
            setIsSending(false);
        }
    };
  return (
    <div className="flex-1 py-4 px-6 text-[13px] leading-[1.9]">
        <div><span className="text-syn-comment">//  Contact.tsx — Formulario de contacto</span></div>
        <div>&nbsp;</div>

            <div>
                <span className="text-syn-action">export </span><span className='text-syn-keyword'> const </span><span className="text-syn-function">Contact</span><span className='text-vsc-text'>:</span><span className='text-syn-type'> React</span><span className='text-vsc-text'>.</span><span className='text-syn-type'>FC</span><span className='text-syn-punct'>{'('}</span><span className="text-syn-punct">{')'}</span><span className='text-syn-keyword'> {'=>'} </span><span className='text-syn-punct'>{'{'}</span>
            </div>
            <div>
                &nbsp;&nbsp;<span className="text-syn-action">return {'('}</span>
            </div>


        
        <div className="bg-vsc-surface border border-vsc-border rounded-md p-5 mt-4">

            <div className="text-syn-type text-base font-semibold mb-1">
            📬 Ponerse en contacto
            </div>

            <div className="text-vsc-text-muted text-xs mb-5">
            ¿Tienes un proyecto en mente? Hablemos.
            </div>

            {/* Form */}
            <form className="max-w-130" onSubmit={sendContact}>

            <div className="mb-4">
                <label className="block text-syn-property text-xs mb-1 ">
                const name: string =
                </label>
                <input
                name='name'
                className="w-full bg-[#3c3c3c] border border-vsc-border text-vsc-text px-3 py-2 rounded text-[13px] outline-none focus:border-vsc-accent "
                type="text"
                placeholder='"Tu nombre"'
                id="inp-name"
                value={payload.name}
                onChange={handleChange}
                required
                />
            </div>

            <div className="mb-4">
                <label className="block text-syn-property text-xs mb-1 ">
                const email: string =
                </label>
                <input
                name="email"
                value={payload.email}
                onChange={handleChange}
                className="w-full bg-[#3c3c3c] border border-vsc-border text-vsc-text px-3 py-2 rounded text-[13px] outline-none focus:border-vsc-accent "
                type="email"
                placeholder='"tu@email.com"'
                id="inp-email"
                required
                />
            </div>

            <div className="mb-4">
                <label className="block text-syn-property text-xs mb-1 ">
                const subject: string =
                </label>
                <input
                name="subject"
                value={payload.subject}
                onChange={handleChange}
                className="w-full bg-[#3c3c3c] border border-vsc-border text-vsc-text px-3 py-2 rounded text-[13px] outline-none focus:border-vsc-accent "
                type="text"
                placeholder='"Asunto del mensaje"'
                id="inp-subject"
                />
            </div>

            <div className="mb-4">
                <label className="block text-syn-property text-xs mb-1 ">
                const message: string = `
                </label>
                <textarea
                name="message"
                value={payload.message}
                onChange={handleChange}
                className="w-full bg-[#3c3c3c] border border-vsc-border text-vsc-text px-3 py-2 rounded text-[13px] outline-none  focus:border-vsc-accent  resize-y min-h-25"
                placeholder="Tu mensaje aquí..."
                id="inp-message"
                required
                />
            </div>

            <button
                type="submit"
                disabled={isSending}
                className={`bg-vsc-accent text-white px-6 py-2 rounded text-[13px] transition-colors hover:bg-[#1a8cd8] ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {isSending ? '⏳ sending...' : '▶ sendMessage(payload)'}
            </button>
            </form>

            {/* Links */}
            <div className="mt-6 pt-5 border-t border-[#3e3e42]">
            <div className="text-vsc-text-muted text-xs mb-3 ">
                // También puedes encontrarme en:
            </div>

            <div className="flex gap-4 flex-wrap">
                <a href="https://github.com" target="_blank" className="text-syn-property flex gap-2 items-center no-underline text-[13px]">
                    <GitHub className="text-white-a"/> 
                    <p>GitHub</p>
                </a>
                
                <a href="https://github.com" target="_blank" className="text-syn-property flex gap-2 items-center no-underline text-[13px]">
                    <LinkedIn className="h-4" /> 
                    <p>LinkedIn</p>
                </a>
            </div>
            </div>

        </div>



    </div>
  )
}
