import React from 'react';

const BusinessSummary = () => {
    return (
        <div className='my-24 '>
            <h1 data-aos="fade-right" data-aos-duration="1000" className='text-secondary uppercase md:text-4xl text-2xl text-center'> Millions business trust us  </h1>
            <p data-aos="fade-left" data-aos-duration="1000" className='text-bold text-primary text-center uppercase mb-16'> try to understand users expectation </p>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 px-20">
                <div data-aos-delay="500" data-aos-duration="1000"  data-aos="zoom-out" className="card  bg-base-100 shadow-xl">
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
                <div data-aos-delay="500" data-aos-duration="1000" data-aos="zoom-out" className="card  bg-base-100 shadow-xl">
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
                <div data-aos-delay="500" data-aos-duration="1000" data-aos="zoom-out" className="card bg-base-100 shadow-xl">
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
                <div data-aos-delay="500" data-aos-duration="1000" data-aos="zoom-out" className="card bg-base-100 shadow-xl">
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

            <div className="md:mx-20 shadow-2xl my-5  py-20">
                <div className='text-center'>
                    <h2 data-aos="fade-right" data-aos-duration="1000" className='uppercase text-secondary md:text-2xl'> have any question about us or get a products request ? </h2>
                    <p data-aos="fade-left" data-aos-duration="1000" className='text-primary mt-2 md:text-1xl'> Don't hesitate to contact us </p>
                </div>
                <div>
                    <div className="flex justify-end mr-20 mt-5">
                        <button data-aos="zoom-in" data-aos-duration="1000" className='btn btn-secondary  btn-xs text-primary mx-5'> request for quote </button>
                        <button data-aos="zoom-in" data-aos-duration="1000" className='btn btn-primary btn-xs text-secondary'> Contact Us </button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default BusinessSummary;