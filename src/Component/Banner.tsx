import bannerImage from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className="container mx-auto px-4 flex flex-col-reverse md:flex-row items-start justify-between">

            <div className="mt-10 md:mt-22 text-center md:text-left">

                <h1 className="text-4xl md:text-6xl font-bold">
                    Build Your Ideal
                </h1>

                <span className="block bg-linear-to-r from-[#FF512F] via-[#DD2476] to-[#8B5CF6] bg-clip-text text-transparent text-4xl md:text-6xl font-bold">
                    Development Stack
                </span>

                <p className="w-full md:w-112.5 pt-3 pb-4">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">

                    <button className="btn rounded-lg bg-linear-to-r from-[#f87020] to-[#ed4b91] text-white">
                        Explore Technologies
                    </button>

                    <button className="btn rounded-lg">
                        Learn More
                    </button>

                </div>
            </div>

            <img
                src={bannerImage}
                alt=""
                className="w-72 md:w-131.5"
            />

        </div>
    );
};

export default Banner;