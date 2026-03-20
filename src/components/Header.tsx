import React from 'react'

//type Props = {}

export const Header:React.FC = () => {
    
  return (
    <header>
        <div className="h-7.5 flex items-center px-3 gap-2 border-b select-none bg-vsc-titlebar border-vsc-surface">
            <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-a"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-a"></div>
                <div className="w-3 h-3 rounded-full bg-green-a"></div>
            </div>
            <div className="flex-1 text-center text-[12px] text-gray-b">portfolio — Visual Studio Code</div>
        </div>
        <div className="h-6.5 flex items-center px-2 gap-0.5 border-b bg-vsc-menubar border-vsc-surface">
            <div className="px-2.5 py-0.75 text-[12px] text--white-a rounded-[3px] cursor-pointer transition-colors duration-100 hover:bg-gray-a">File</div><div className="px-[10px] py-[3px] text-[12px] text--white-a rounded-[3px] cursor-pointer transition-colors duration-100 hover:bg-gray-a">Edit</div>
            <div className="px-[10px] py-[3px] text-[12px] text--white-a rounded-[3px] cursor-pointer transition-colors duration-100 hover:bg-gray-a">View</div><div className="px-[10px] py-[3px] text-[12px] text--white-a rounded-[3px] cursor-pointer transition-colors duration-100 hover:bg-gray-a">Go</div>
            <div className="px-[10px] py-[3px] text-[12px] text--white-a rounded-[3px] cursor-pointer transition-colors duration-100 hover:bg-gray-a">Run</div><div className="px-[10px] py-[3px] text-[12px] text--white-a rounded-[3px] cursor-pointer transition-colors duration-100 hover:bg-gray-a">Terminal</div>
            <div className="px-[10px] py-[3px] text-[12px] text--white-a rounded-[3px] cursor-pointer transition-colors duration-100 hover:bg-gray-a">Help</div>
        </div>
    </header>
  )
}
