import * as React from 'react';

export interface IHeroProps {
}

export default function Hero() {
    return (

        <div className="bg-teal dark:bg-gray-800 flex relative z-20 items-center overflow-hidden">
            <div className="container mx-auto px-6 flex relative py-16">
                <div className="sm:w-2/3 lg:w-2/5 flex flex-col relative z-20">
                    <span className="w-20 h-2 bg-navy mb-12">
                    </span>
                    <h1 className="font-bebas-neue uppercase text-6xl sm:text-8xl font-black flex flex-col leading-none  text-navy">
                        L6 is
                        <span className="text-5xl sm:text-7xl">
                            Traveling
                        </span>
                    </h1>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-white">
                        Dimension of reality that makes change possible and understandable. An indefinite and homogeneous environment in which natural events and human existence take place.
                    </p>
                    <div className="flex mt-8">
                        <a href="#" className="uppercase py-2 px-4 rounded-lg bg-mustard border-2 border-transparent text-navy text-md mr-4 hover:bg-tomato">
                            See Options
                        </a>
                        <a href="#" className="uppercase py-2 px-4 rounded-lg bg-transparent border-2 border-navy text-navy dark:text-white hover:bg-navy hover:text-teal text-md">
                            Read Why
                        </a>
                    </div>
                </div>
                <div className="hidden sm:block sm:w-1/3 lg:w-3/5 relative">
                    <img src="/heroimage.png" className="max-w-xs md:max-w-sm m-auto" />
                </div>
            </div>
        </div>

    );
}
