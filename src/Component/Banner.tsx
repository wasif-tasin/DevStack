import bannerImage from '../assets/banner-stack.png';

const Banner = () => {
    return (
        <div className="container mx-auto flex justify-between">

            <div className="mt-24 text-left">

                <h1 className="text-6xl font-bold">
                    Build Your Ideal
                </h1>

                <span className="block bg-linear-to-r from-[#FF512F] via-[#DD2476] to-[#8B5CF6] bg-clip-text text-transparent text-6xl font-bold">
                    Development Stack
                </span>

                <p className="w-112.5 py-4 text-[20px] text-gray-500">
                    Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that
                    fits your next project.
                </p>

                <div className="flex flex-row gap-4 pt-4 justify-start">

                    <button className="btn rounded-lg bg-linear-to-r from-[#f87020] to-[#ed4b91] text-white text-xl p-6">
                        Explore Technologies
                    </button>

                    <button className="btn rounded-lg text-xl p-6">
                        Learn More
                    </button>

                </div>
            </div>

            <img
                src={bannerImage}
                alt=""
                className="w-131.5"
            />

        </div>
    );
};

export default Banner;