import React from 'react'

const Navbar = () => {
    return (
        <div className='sticky top-0'>
            <nav className="sticky justify-between items-center top-0 left-0 w-full bg-gray-900 text-white shadow-lg h-[50px] z-50 ">
                <div className="container sticky top-0 mx-auto flex justify-between items-center px-6">
                    {/* Logo */}
                    <div className="text-2xl font-bold text-blue-400">Hassaan Optics</div>

                    {/* Navigation Links */}
                    <div className="flex gap-5 mr-14 ">
                        <a href="/" className="hover:text-blue-400 m-2 p-2 transition">Home</a>
                        <a href="https://github.com/HassaanMemon026" target='_blank' className="hover:text-blue-400 m-2 p-2 transition">About</a>
                        <a href="/" className="hover:text-blue-400 m-2 p-2 transition">Services</a>
                        <a href="https://hassaanraza026@gmail.com" target='_blank' className="hover:text-blue-400 m-2 p-2 transition">Contact</a>
                    </div>


                    {/* CTA Button
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition">
                    Get Started
                </button> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar
