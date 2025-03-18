"use client"
import { useState } from 'react';

export default function LikesTab() {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
        <div className="w-full max-w-md mx-auto">
            {/* Tabs */}
            <div className="flex w-full justify-center gap-1.5 ">
                <button
                    className={` p-2 pb-3 text-center border-b-2 border-white text-lg font-medium leading-[120%] font-jakarta ${activeTab === 'tab1' ? '  text-white' : ' text-white/50 '}`}
                    onClick={() => setActiveTab('tab1')}
                >
                    Lubię cię
                </button>
                <button
                    className={` py-3 text-center border-b-2 border-white text-lg font-medium leading-[120%] font-jakarta  ${activeTab === 'tab2' ? '  text-white' : ' text-white/50'}`}
                    onClick={() => setActiveTab('tab2')}
                >
                    Odwiedzający
                </button>
            </div>

            {/* Tab Content */}
            <div className="p-5 bg-gray-800 mt-9">
                {/* Tab 1 Content */}
                <div className={`${activeTab === 'tab1' ? '' : 'hidden'}`}>
                    <p className="text-white">Tab 1 Text 1</p>
                    <p className="text-white">Tab 1 Text 2</p>
                </div>

                {/* Tab 2 Content */}
                <div className={`${activeTab === 'tab2' ? '' : 'hidden'}`}>
                    <p className="text-white">Tab 2 Text 1</p>
                    <p className="text-white">Tab 2 Text 2</p>
                </div>
            </div>
        </div>
    );
}
