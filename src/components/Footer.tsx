import { Link } from 'react-router-dom';
import Facebook from '../assets/images/facebook.svg';
import Instagram from '../assets/images/instagram.svg';
import Twitter from '../assets/images/twitterx.svg';
import LinkedIn from '../assets/images/linkedin.svg';

const Footer = () => {
  return (
    <footer className='w-full bg-text'>
      <div className='container mx-auto text-white p-10 md:p-15 grid gap-4 justify-center md:grid-cols-2 lg:grid-cols-4 md:justify-between'>
        {/* ----Logo-Email---- */}
        <div className='flex flex-col gap-6 items-center md:items-start'>
          <Link to={'/'} className='text-3xl font-Tienne font-bold'>
            Logo
          </Link>

          <p className='text-xl md:text-2xl lg:text-3xl font-medium'>
            Let's chat
            <br />
            abcd@xyz.com
          </p>
        </div>

        {/* ----Nav-Links---- */}
        <div className=''>
          <p className='text-md font-semibold leading-10 mb-2 text-center md:text-start'>
            Navigation
          </p>
          <div className='text-textLight leading-6 flex flex-col gap-y-3 items-center md:items-start'>
            <p className='hover:underline hover:text-white cursor-pointer'>
              Home
            </p>
            <p className='hover:underline hover:text-white cursor-pointer'>
              About
            </p>
            <p className='hover:underline hover:text-white cursor-pointer'>
              Services
            </p>
            <p className='hover:underline hover:text-white cursor-pointer'>
              Blogs
            </p>
            <p className='hover:underline hover:text-white cursor-pointer'>
              Contact
            </p>
          </div>
        </div>

        {/* ----Services---- */}
        <div>
          <p className='text-md font-semibold leading-10 mb-2 text-center md:text-start'>
            Services
          </p>
          <div className='text-textLight leading-6 flex flex-col gap-y-3 items-center md:items-start'>
            <p>Web Developement</p>
            <p>App Developement</p>
            <p>Seo</p>
            <p>Logo</p>
            <p>Marketing</p>
          </div>
        </div>

        {/* ----Socials---- */}
        <div className='flex gap-x-4 items-center justify-center md:justify-start lg:items-center'>
          <a
            href='#'
            className='hover:-translate-y-2 transition-all duration-200'
          >
            <img src={Twitter} alt='Twitter icon' />
          </a>
          <a
            href='#'
            className='hover:-translate-y-2 transition-all duration-200'
          >
            <img src={LinkedIn} alt='LinkedIn icon' />
          </a>
          <a
            href='#'
            className='hover:-translate-y-2 transition-all duration-200'
          >
            <img src={Facebook} alt='Facebook icon' />
          </a>
          <a
            href='#'
            className='hover:-translate-y-2 transition-all duration-200'
          >
            <img src={Instagram} alt='Instagram icon' />
          </a>
        </div>
      </div>

      {/* ----Copyright---- */}
      <div className='container mx-auto text-white p-6 flex items-center justify-center gap-3 sm:justify-between flex-wrap border-t text-sm'>
        <p>&copy; 2024 AMJ Team. All rights reserved.</p>

        <span className='flex gap-3'>
          <a href='#' className='hover:underline hover:text-textLight'>
            Privacy policy
          </a>
          <a href='#' className='hover:underline hover:text-textLight'>
            Terms of use
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
