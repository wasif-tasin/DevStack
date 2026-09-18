import Logo from '../assets/logo-text.png'

const Footer = () => {
    return (
        <footer className="border-t border-gray-100 mt-20">
            <div className="container mx-auto px-5 py-10">

                <div className="grid grid-cols-4 gap-8">

                    <div>
                        <img src={Logo} alt="DevStack" />

                        <p className="text-sm text-gray-500 mt-4 max-w-xs">
                            Curated tools, technologies, and resources for
                            developers building modern software.
                        </p>

                        <div className="flex gap-5 mt-6 text-sm">
                            <a href="" className="hover:text-pink-500">GitHub</a>
                            <a href="" className="hover:text-pink-500">Twitter</a>
                            <a href="" className="hover:text-pink-500">LinkedIn</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm">PRODUCT</h3>

                        <div className="flex flex-col gap-3 mt-4 text-sm text-gray-500">
                            <a href="">Home</a>
                            <a href="">Technologies</a>
                            <a href="">Projects</a>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-sm">COMPANY</h3>

                        <div className="flex flex-col gap-3 mt-4 text-sm text-gray-500">
                            <a href="">About</a>
                            <a href="">Contact</a>
                            <a href="">Careers</a>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-sm">LEGAL</h3>

                        <div className="flex flex-col gap-3 mt-4 text-sm text-gray-500">
                            <a href="">Privacy Policy</a>
                            <a href="">Terms of Service</a>
                        </div>
                    </div>

                </div>

                <div className="border-t border-gray-100 mt-12 pt-6 flex flex-row justify-between gap-3 text-xs text-gray-400">
                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex gap-6">
                        <a href="">Privacy</a>
                        <a href="">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;