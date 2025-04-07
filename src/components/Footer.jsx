const Footer = () => {
    return (
        <footer className="bg-[#101828] text-white py-10 px-6">
            <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center">

                {/* Left Section */}
                <div className="mb-6 md:mb-0">
                    <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                        Hassaan Optics
                    </h2>
                    <p className="text-gray-400 mt-2">Best quality glasses and optical services.</p>
                </div>

                {/* Center Links */}
                <div className="flex flex-wrap gap-5 md:gap-10 text-gray-300">
                    <a href="/" className="hover:text-blue-400 transition">Home</a>
                    <a href="https://github.com/HassaanMemon026" target="_blank" className="hover:text-blue-400 transition">About</a>
                    <a href="/" className="hover:text-blue-400 transition">Services</a>
                    <a href="https://hassaanraza026@gmail.com" target="_blank" className="hover:text-blue-400 transition">Contact</a>
                </div>

                {/* Right Social Icons */}
                <div className="flex gap-4 mb-14 pb-5 mt-6 md:mt-0">
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                        <i className="fab fa-facebook text-2xl"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                        <i className="fab fa-twitter text-2xl"></i>
                    </a>
                    <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                        <i className="fab fa-instagram text-2xl"></i>
                    </a>
                </div>

            </div>

            {/* Bottom Section (Fixed at Bottom) */}
            <div className="fixed bottom-0 left-0 w-full bg-[#101828] border-t border-gray-700 pt-3.5 pb-2 text-center text-gray-400 text-sm">
                © {new Date().getFullYear()} Hassaan Optics. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
