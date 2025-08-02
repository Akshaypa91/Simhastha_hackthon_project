import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className="bg-orange-600 p-6">
            <div className="container mx-auto flex items-start justify-end space-x-10 text-white">
                <a href="" className='font-extrabold'>Sponsers</a>
                <a href="" className='font-bold'>About</a>
                <a href="" className='font-bold'>Login/SignUp</a>
            </div>
        </nav>
    )
}
export default Navbar;