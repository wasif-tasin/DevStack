import Logo from '../assets/logo-text.png'
import { FaBars } from 'react-icons/fa';

const Nav = () => {
    return (
        <div>
              <nav className="bg-[#fffefe] mt-4">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <img
                    src={Logo}
                    alt=""
                    className="w-32 md:w-auto"
                />

                <ul className="hidden md:flex gap-4 items-center">
                    <li>Home</li>
                    <li>Technologies</li>
                    <li>Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>

                <div className="hidden md:flex items-center">
                    <button className="pr-4">
                        Sign In
                    </button>

                    <button className="btn btn-active btn-error text-white bg-[#d81b7f] rounded-4xl">
                        Sign Up
                    </button>
                </div>

                <button className="md:hidden text-2xl">
                    <FaBars />
                </button>

            </div>
        </nav>
        </div>
    );
};

export default Nav;
