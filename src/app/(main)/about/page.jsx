import Image from 'next/image';
import Link from 'next/link';
import { FaNewspaper, FaUsers, FaTrophy, FaClock, FaEye, FaRegHeart, FaRocket, FaShieldAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

export const metadata = {
  title: "Dragon News - About Us",
};

const AboutPage = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl overflow-hidden mb-12">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10 p-8 md:p-12 text-white text-center">
                    <div className="inline-block p-3 bg-white/20 rounded-full mb-4">
                        <FaNewspaper className="text-4xl" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About Dragon News</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
                        Your Trusted Source for Truth, Integrity, and Excellence in Journalism
                    </p>
                </div>
            </div>

            {/* Mission Section */}
            <div className="grid md:grid-cols-2 gap-10 mb-16 items-center">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">Our Mission</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        At Dragon News, we are committed to delivering accurate, unbiased, and timely news that empowers our readers to make informed decisions. 
                        We believe in journalism without fear or favour, upholding the highest standards of integrity and ethics.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Our mission is to shine a light on the stories that matter most, giving voice to the voiceless and holding power accountable. 
                        We strive to be the most trusted news source in Bangladesh and beyond.
                    </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-sky-100 p-8 rounded-2xl border border-blue-200">
                    <div className="grid grid-cols-2 gap-6">
                        <div className="text-center">
                            <div className="text-blue-600 text-4xl mb-2">⭐</div>
                            <div className="font-bold text-2xl text-gray-800">100%</div>
                            <div className="text-sm text-gray-600">Unbiased News</div>
                        </div>
                        <div className="text-center">
                            <div className="text-blue-600 text-4xl mb-2">⚡</div>
                            <div className="font-bold text-2xl text-gray-800">24/7</div>
                            <div className="text-sm text-gray-600">Live Updates</div>
                        </div>
                        <div className="text-center">
                            <div className="text-blue-600 text-4xl mb-2">🌍</div>
                            <div className="font-bold text-2xl text-gray-800">Global</div>
                            <div className="text-sm text-gray-600">Coverage</div>
                        </div>
                        <div className="text-center">
                            <div className="text-blue-600 text-4xl mb-2">🔒</div>
                            <div className="font-bold text-2xl text-gray-800">Fact-Checked</div>
                            <div className="text-sm text-gray-600">Content</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Core Values</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <MdVerified className="text-3xl text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Truth & Accuracy</h3>
                        <p className="text-gray-600">We verify every fact before publication, ensuring our readers get the most accurate information available.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaShieldAlt className="text-3xl text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Independence</h3>
                        <p className="text-gray-600">We operate without external influence, remaining independent from political and commercial pressures.</p>
                    </div>
                    <div className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                        <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <FaRegHeart className="text-3xl text-blue-600" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Accountability</h3>
                        <p className="text-gray-600">We take responsibility for our reporting and are committed to correcting errors promptly and transparently.</p>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-8 mb-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">10K+</div>
                        <div className="text-sm opacity-90">Daily Readers</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">50+</div>
                        <div className="text-sm opacity-90">Expert Journalists</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">24/7</div>
                        <div className="text-sm opacity-90">News Coverage</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold mb-2">2015</div>
                        <div className="text-sm opacity-90">Year Founded</div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Leadership</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                            👨‍💼
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Md. Rahman</h3>
                        <p className="text-blue-600 mb-2">Editor-in-Chief</p>
                        <p className="text-gray-500 text-sm">20+ years of journalism experience</p>
                    </div>
                    <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                            👩‍💼
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Sultana Akter</h3>
                        <p className="text-blue-600 mb-2">Managing Editor</p>
                        <p className="text-gray-500 text-sm">Award-winning investigative journalist</p>
                    </div>
                    <div className="text-center">
                        <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                            👨‍💻
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800">Karim Hasan</h3>
                        <p className="text-blue-600 mb-2">Digital Director</p>
                        <p className="text-gray-500 text-sm">Digital media innovation expert</p>
                    </div>
                </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Join Our Community</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    Stay informed with the latest news and updates from Dragon News. Subscribe to our newsletter for daily digests.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 w-64"
                    />
                    <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all">
                        Subscribe Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;