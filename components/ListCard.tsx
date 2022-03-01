import * as React from 'react';

export interface IListCardProps {
    modelName: string;
    modelNumber: string;
    make: string;
    modelYear: string;
    modelType: string;
    link: string;
    photo: string;
}

export default function ListCard(props: IListCardProps) {
    return (


        <li className="shadow-lg rounded-2xl w-80 p-4 bg-white dark:bg-gray-800 mb-6">
            <div className='flex flex-row items-start'><img src={props.photo} className="w-full h-auto rounded-lg bg-indigo-700" /></div>
            <div className="flex flex-row items-start gap-4">

                <div className="h-28 w-full flex flex-col justify-between">
                    <div>
                        <p className="text-gray-800 dark:text-white text-xl font-medium">
                            {props.modelName}
                        </p>
                        <p className="text-gray-400 text-xs">
                            {props.modelNumber}
                        </p>
                    </div>
                    <div className="rounded-lg bg-blue-100 dark:bg-white p-2 w-full">
                        <div className="flex items-center justify-between text-xs text-gray-400 dark:text-black">
                            <p className="flex flex-col">
                                Make
                                <span className="text-black dark:text-indigo-500 font-bold">
                                    {props.make}
                                </span>
                            </p>
                            <p className="flex flex-col">
                                Year
                                <span className="text-black dark:text-indigo-500 font-bold">
                                    {props.modelYear}
                                </span>
                            </p>
                            <p className="flex flex-col">
                                Type
                                <span className="text-black dark:text-indigo-500 font-bold">
                                    {props.modelType}
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between gap-4 mt-6">
                <a type="button" target="_blank" href={props.link} className="w-1/2 px-4 py-2 text-base border rounded-lg text-grey-500 bg-white hover:bg-gray-200 ">
                    Sale Link
                </a>
                <button type="button" className="w-1/2 px-4 py-2 text-base border rounded-lg text-white bg-indigo-500 hover:bg-indigo-700 ">
                    See Trailer
                </button>
            </div>
        </li>


    );
}
