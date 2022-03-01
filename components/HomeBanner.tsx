import * as React from 'react';

export interface IHomeBannerProps {
    trailerTotal: number;
    priceCap: string;
}

export default function HomeBanner(props: IHomeBannerProps) {
    return (

        <section className="w-full bg-sand px-4 py-12 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold leading-9 text-navy sm:text-4xl sm:leading-10">
                    We're looking for the right travel trailer for our family of six.
                </h2>
                <p className="mt-3 text-base leading-7 sm:mt-4 text-navy">
                    Pray that Yeshua will point us and send us to the specific travel trailer he wants us to get.
                </p>
            </div>
            <div className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
                <div>
                    <p className="text-5xl font-extrabold leading-none text-navy">
                        {props.trailerTotal}
                    </p>
                    <p className="mt-2 text-base font-medium leading-6 text-navy">
                        Travel Trailers
                    </p>
                </div>
                <div className="mt-10 sm:mt-0">
                    <p className="text-5xl font-extrabold leading-none text-navy">
                        {props.priceCap}
                    </p>
                    <p className="mt-2 text-base font-medium leading-6 text-navy">
                        Price Cap
                    </p>
                </div>
                <div className="mt-10 sm:mt-0">
                    <p className="text-5xl font-extrabold leading-none text-navy">
                        5 Bodies
                    </p>
                    <p className="mt-2 text-base font-medium leading-6 text-navy">
                        Our Labors
                    </p>
                </div>
            </div>
            {/* <div className="w-52 mx-auto mt-4 p-4 flex">
                <button type="button" className="py-2 px-4  bg-gradient-to-r from-green-400 to-green-400 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ">
                    Buy the kit
                </button>
            </div> */}
        </section>

    );
}
