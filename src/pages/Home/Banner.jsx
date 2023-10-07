
const Banner = () => {
    return (
        <div>
            <div className="hero min-h-[70vh] mt-5 mb-5 rounded-xl bg-[url('https://i.ibb.co/5L88Ds1/banner.jpg')]">
                <div className="hero-content hero-overlay bg-opacity-60 flex-col lg:flex-row">
                    <div className="flex">
                        <div>

                        </div>
                        <div className="text-center">
                            <h1 className="text-5xl text-white font-bold">Explore Opportunities at Our Career Fair!</h1>
                            <p className=" text-white py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-secondary">Find an Event</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;