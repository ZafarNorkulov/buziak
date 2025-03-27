import React from 'react'

interface ITabProps { activeTab: string, setActiveTab: (tab: string) => void, }


const PhotoTab = ({ activeTab, setActiveTab, }: ITabProps) => {
    return (
        <div className="w-full mx-auto">
            <div className="flex w-full justify-center gap-1.5 ">
                <button
                    className={`p-2 pb-3 text-center border-b-2 font-light text-lg  leading-[120%] font-jakarta ${activeTab === 'tab1' ? '  text-[#F761B6] border-[#F761B6] font-medium' : ' text-white/70 border-white/70'}`}
                    onClick={() => setActiveTab('tab1')}
                >

                    Edit
                </button>
                <button
                    className={`p-2 py-3 text-center border-b-2 font-light text-lg leading-[120%] font-jakarta  ${activeTab === 'tab2' ? '  text-[#F761B6] border-[#F761B6] font-medium' : ' text-white/70 border-white/70'}`}
                    onClick={() => setActiveTab('tab2')}
                >
                    Preview
                </button>
            </div>


        </div>
    )
}

export default PhotoTab