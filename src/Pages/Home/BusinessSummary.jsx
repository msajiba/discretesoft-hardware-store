import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='my-24 '>
            <h1 className='text-secondary uppercase text-4xl text-center'> Millions business trust us  </h1>
            <p className='text-bold text-primary text-center uppercase mb-16'> try to understand users expectation </p>
            
            <div className="grid grid-cols-4 gap-5 px-20">
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="primary" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-secondary font-bold ">100 +</h2>
                        <p className='uppercase text-primary text-2xl'> we served </p>
                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="green" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl text-secondary font-bold ">120M+</h2>
                        <p className='uppercase text-primary text-2xl'> customers </p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="primary" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="card-title text-2xl text-secondary font-bold ">33K+</h2>
                        <p className='uppercase text-primary text-2xl'> Annual revenue </p>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="green" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
                    </svg>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-2xl text-secondary font-bold ">50+</h2>
                        <p className='uppercase text-primary text-2xl'> Reviews </p>
                    </div>
                </div>

            </div>

            <div className="mx-20 shadow-2xl my-5 flex justify-around py-20">
                <div>
                    <h2 className='uppercase text-secondary text-2xl'> have any question about us or get a products request ? </h2>
                    <p className='text-primary mt-2 text-1xl'> Don't hesitate to contact us </p>
                </div>
                <div>
                    <div className="flex">
                        <button className='btn btn-secondary text-primary mx-5'> request for quote </button>
                        <button  className='btn btn-primary text-secondary'> Contact Us </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BusinessSummary;