
import { ReactNode } from 'react';

interface ITabProps { children: ReactNode, activeTab: string, setActiveTab: (tab: string) => void, }

export default function LikesTab({ children, activeTab, setActiveTab, }: ITabProps) {


    return (
        <div className="w-full mx-auto">
            {/* Tabs */}
            <div className="flex w-full justify-center gap-1.5 ">
                <button
                    className={`p-2 pb-3 text-center border-b-2 border-white text-lg font-medium leading-[120%] font-jakarta ${activeTab === 'tab1' ? '  text-white' : ' text-white/50 '}`}
                    onClick={() => setActiveTab('tab1')}
                >

                    Lubię cię
                </button>
                <button
                    className={`p-2 py-3 text-center border-b-2 border-white text-lg font-medium leading-[120%] font-jakarta  ${activeTab === 'tab2' ? '  text-white' : ' text-white/50'}`}
                    onClick={() => setActiveTab('tab2')}
                >
                    Odwiedzający
                </button>
            </div>

            {/* Tab Content */}
            <div className=" mt-9">
                {/* Tab Content */}
                <div >
                    {children}
                </div>


            </div>
        </div>
    );
}
