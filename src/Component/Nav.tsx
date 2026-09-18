import Logo from '../assets/logo-text.png'
import { FaBars } from 'react-icons/fa';

const Nav = () => {
    return (
        <div className='sticky top-0 z-50'>
              <nav className="bg-[#fffefe] mt-4">
            <div className="container mx-auto flex justify-between items-center">
                <img
                    src={Logo}
                    alt=""
                    className="w-32 md:w-auto"
                />

                <ul className="hidden md:flex gap-4 items-center cursor-pointer">
                    <li className="hover:text-pink-500">Home</li>
                    <li className="hover:text-pink-500">Technologies</li>
                    <li className="hover:text-pink-500">Projects</li>
                    <li className="hover:text-pink-500">About</li>
                    <li className="hover:text-pink-500">Contact</li>
                </ul>

                <div className="hidden md:flex items-center ">
                    <button className="pr-4 cursor-pointer">
                        Sign In
                    </button>

                    <button className="btn btn-active btn-error text-white bg-[#d81b7f] rounded-4xl cursor-pointer">
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
