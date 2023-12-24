import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto py-8 px-5 flex flex-wrap flex-col sm:flex-row">
                <div className="flex-1 mb-8 sm:mb-0">
                    <h2 className="text-xl font-bold mb-4">Explore</h2>
                    <nav className="grid grid-cols-2 gap-4">
                        <a className="hover:text-gray-400" href="#">Store</a>
                        <a className="hover:text-gray-400" href="#">Mac</a>
                        <a className="hover:text-gray-400" href="#">iPad</a>
                        <a className="hover:text-gray-400" href="#">iPhone</a>
                        <a className="hover:text-gray-400" href="#">Watch</a>
                        <a className="hover:text-gray-400" href="#">Vision</a>
                    </nav>
                </div>
                <div className="flex-1 mb-8 sm:mb-0">
                    <h2 className="text-xl font-bold mb-4">Apple Store</h2>
                    <nav className="grid grid-cols-2 gap-4">
                        <a className="hover:text-gray-400" href="#">Find a Store</a>
                        <a className="hover:text-gray-400" href="#">Genius Bar</a>
                        <a className="hover:text-gray-400" href="#">Today at Apple</a>
                        <a className="hover:text-gray-400" href="#">Apple Camp</a>
                        <a className="hover:text-gray-400" href="#">Apple Store App</a>
                        <a className="hover:text-gray-400" href="#">Certified Refurbished</a>
                    </nav>
                </div>
                <div className="flex-1 mb-8 sm:mb-0">
                    <h2 className="text-xl font-bold mb-4">Apple Values</h2>
                    <nav className="grid grid-cols-2 gap-4">
                        <a className="hover:text-gray-400" href="#">Accessibility</a>
                        <a className="hover:text-gray-400" href="#">Education</a>
                        <a className="hover:text-gray-400" href="#">Environment</a>
                        <a className="hover:text-gray-400" href="#">Inclusion and Diversity</a>
                        <a className="hover:text-gray-400" href="#">Privacy</a>
                        <a className="hover:text-gray-400" href="#">Racial Equity and Justice</a>
                    </nav>
                </div>
                <div className="flex-1 mb-8 sm:mb-0">
                    <h2 className="text-xl font-bold mb-4">For Business</h2>
                    <nav className="grid grid-cols-2 gap-4">
                        <a className="hover:text-gray-400" href="#">Apple and Business</a>
                        <a className="hover:text-gray-400" href="#">Shop for Business</a>
                    </nav>
                </div>
                <div className="flex-1 mb-8 sm:mb-0">
                    <h2 className="text-xl font-bold mb-4">For Healthcare</h2>
                    <nav className="grid grid-cols-2 gap-4">
                        <a className="hover:text-gray-400" href="#">Apple in Healthcare</a>
                        <a className="hover:text-gray-400" href="#">Health on Apple Watch</a>
                        <a className="hover:text-gray-400" href="#">Health Records on iPhone</a>
                    </nav>
                </div>
                <div className="flex-1">
                    <h2 className="text-xl font-bold mb-4">Account</h2>
                    <nav className="grid grid-cols-2 gap-4">
                        <a className="hover:text-gray-400" href="#">Manage Your Apple ID</a>
                        <a className="hover:text-gray-400" href="#">Apple Store Account</a>
                        <a className="hover:text-gray-400" href="#">iCloud.com</a>
                    </nav>
                </div>
            </div>
            <div className="border-t border-gray-800">
                <div className="container mx-auto py-4 flex flex-wrap justify-between items-center">
                    <div className="w-full sm:w-1/2 mb-4 sm:mb-0">
                        <label htmlFor="footer-field" className="text-sm text-gray-400">Subscribe to our Newsletter</label>
                        <div className="flex mt-2">
                            <input type="text" id="footer-field" name="footer-field" placeholder="Your email" className="w-full bg-gray-800 border border-gray-700 rounded-l py-2 px-3 focus:outline-none" />
                            <button className="bg-indigo-500 border border-indigo-600 rounded-r px-4 hover:bg-indigo-600 focus:outline-none">Subscribe</button>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-facebook"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <i className="fab fa-linkedin"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800">
                <div className="container mx-auto py-4 flex flex-wrap justify-between items-center">
                    <p className="text-sm text-gray-400">&copy; 2023 Ankit Gaurav —
                        <a href="https://twitter.com/knyttneve" className="text-indigo-500 ml-1" target="_blank" rel="noopener noreferrer">ankitgaurav5139@gmail.com</a>
                    </p>
                    
                </div>
            </div>
        </footer>
    );
}

export default Footer;
