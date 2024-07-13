import React from 'react';

const NavBar = () => {
    return (
        <section className='h-12 md:h-16 bg-white'>
            <div className='w-full pr-4 pl-4 md:max-w-7xl mx-auto bg-white flex justify-between'>
                {/* Logo */}
                <svg width="215" height="75" viewBox="0 0 215 75" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M214.505 0L57.6344 66.5427C44.5737 72.0839 33.5865 74.8486 24.7325 74.8486C14.7701 74.8486 7.51288 71.3332 3.05605 64.3143C-2.72353 55.2576 -0.197201 40.6954 9.71747 25.3229C15.6043 16.3378 23.088 8.09142 30.381 0.202586C28.665 2.99109 13.5189 28.1948 30.083 40.0638C33.3601 42.4472 38.0195 43.615 43.7515 43.615C48.3513 43.615 53.6304 42.8643 59.4338 41.3508L214.505 0Z" fill="black"/>
</svg>

            </div>
            
        </section>
    );
}

export default NavBar;