import Link from 'next/link';
import { FaBriefcase, FaMapMarkerAlt, FaClock, FaGraduationCap, FaLaptopCode, FaChartLine, FaUsers, FaRegHeart, FaEnvelope, FaPhoneAlt, FaGlobe } from 'react-icons/fa';
import { MdVerified, MdWork } from 'react-icons/md';

export const metadata = {
  title: "Dragon News - Career Opportunities",
};

const CarrierPage = () => {
    const jobOpenings = [
        {
            id: 1,
            title: "Senior News Reporter",
            department: "Editorial",
            location: "Dhaka, Bangladesh",
            type: "Full-time",
            experience: "3-5 years",
            description: "Cover breaking news stories, conduct interviews, and write compelling articles.",
            icon: <FaBriefcase className="text-blue-600" />
        },
        {
            id: 2,
            title: "Digital Content Creator",
            department: "Digital Media",
            location: "Remote / Dhaka",
            type: "Full-time",
            experience: "2-4 years",
            description: "Create engaging digital content for social media and web platforms.",
            icon: <FaLaptopCode className="text-blue-600" />
        },
        {
            id: 3,
            title: "Video Journalist",
            department: "Multimedia",
            location: "Dhaka, Bangladesh",
            type: "Full-time",
            experience: "2-3 years",
            description: "Produce and edit video news stories for broadcast and digital platforms.",
            icon: <FaChartLine className="text-blue-600" />
        },
        {
            id: 4,
            title: "Social Media Manager",
            department: "Marketing",
            location: "Remote",
            type: "Full-time",
            experience: "3+ years",
            description: "Manage social media presence and engagement across all platforms.",
            icon: <FaUsers className="text-blue-600" />
        },
        {
            id: 5,
            title: "Fact-Checker",
            department: "Editorial",
            location: "Dhaka, Bangladesh",
            type: "Full-time",
            experience: "1-3 years",
            description: "Verify facts and sources to ensure accuracy of published content.",
            icon: <MdVerified className="text-blue-600" />
        },
        {
            id: 6,
            title: "Junior Web Developer",
            department: "Technology",
            location: "Dhaka, Bangladesh",
            type: "Full-time",
            experience: "1-2 years",
            description: "Maintain and improve the news website and digital platforms.",
            icon: <FaLaptopCode className="text-blue-600" />
        }
    ];

    const benefits = [
        { icon: <FaRegHeart className="text-2xl" />, title: "Health Insurance", desc: "Comprehensive medical coverage" },
        { icon: <FaGraduationCap className="text-2xl" />, title: "Learning Budget", desc: "$1000/year for courses" },
        { icon: <FaClock className="text-2xl" />, title: "Flexible Hours", desc: "Work-life balance" },
        { icon: <FaChartLine className="text-2xl" />, title: "Growth Path", desc: "Clear career progression" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl overflow-hidden mb-12">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative z-10 p-8 md:p-12 text-white text-center">
                    <div className="inline-block p-3 bg-white/20 rounded-full mb-4">
                        <MdWork className="text-4xl" />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Join Our Team</h1>
                    <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-95">
                        Build Your Career in Journalism & Digital Media
                    </p>
                </div>
            </div>

            {/* Why Join Us Section */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Why Join Dragon News?</h2>
                <div className="grid md:grid-cols-4 gap-6">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="text-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                                {benefit.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                            <p className="text-gray-500 text-sm">{benefit.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Open Positions Section */}
            <div className="mb-16">
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 border-l-4 border-blue-600 pl-3">
                        Open Positions
                    </h2>
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                        {jobOpenings.length} Jobs Available
                    </span>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                    {jobOpenings.map((job) => (
                        <div key={job.id} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-blue-300 group">
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                        {job.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                                        <p className="text-blue-600 text-sm">{job.department}</p>
                                    </div>
                                </div>
                                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                                    {job.type}
                                </span>
                            </div>
                            <div className="space-y-2 mb-4">
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <FaMapMarkerAlt className="text-blue-500" />
                                    <span>{job.location}</span>
                                </div>
                                <div className="flex items-center gap-2 text-gray-500 text-sm">
                                    <FaGraduationCap className="text-blue-500" />
                                    <span>Experience: {job.experience}</span>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                            <button className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-blue-500 text-white py-2 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all font-medium">
                                Apply Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Culture Section */}
            <div className="grid md:grid-cols-2 gap-10 mb-16 items-center bg-gradient-to-br from-blue-50 to-sky-100 rounded-2xl p-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4 border-l-4 border-blue-600 pl-3">Our Culture</h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        At Dragon News, we foster a culture of innovation, integrity, and collaboration. 
                        We believe in empowering our employees with the tools and environment they need to excel.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center gap-2">✓ Collaborative and inclusive environment</li>
                        <li className="flex items-center gap-2">✓ Continuous learning and development</li>
                        <li className="flex items-center gap-2">✓ Work-life balance and flexible hours</li>
                        <li className="flex items-center gap-2">✓ Commitment to journalistic excellence</li>
                    </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-xl text-center">
                        <div className="text-3xl mb-2">🏆</div>
                        <div className="font-semibold text-gray-800">Award Winning</div>
                        <div className="text-sm text-gray-500">News Organization</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl text-center">
                        <div className="text-3xl mb-2">🌍</div>
                        <div className="font-semibold text-gray-800">Global Reach</div>
                        <div className="text-sm text-gray-500">International Coverage</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl text-center">
                        <div className="text-3xl mb-2">📈</div>
                        <div className="font-semibold text-gray-800">Fast Growth</div>
                        <div className="text-sm text-gray-500">Career Advancement</div>
                    </div>
                    <div className="bg-white p-4 rounded-xl text-center">
                        <div className="text-3xl mb-2">💡</div>
                        <div className="font-semibold text-gray-800">Innovation</div>
                        <div className="text-sm text-gray-500">Modern Tools & Tech</div>
                    </div>
                </div>
            </div>

            {/* Application Process */}
            <div className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">How to Apply</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center relative">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3 relative z-10">1</div>
                        <div className="absolute top-5 left-1/2 w-full h-0.5 bg-blue-200 hidden md:block"></div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Submit Application</h3>
                        <p className="text-gray-500 text-sm">Send your CV and portfolio</p>
                    </div>
                    <div className="text-center relative">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">2</div>
                        <div className="absolute top-5 left-1/2 w-full h-0.5 bg-blue-200 hidden md:block"></div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Initial Interview</h3>
                        <p className="text-gray-500 text-sm">Phone/video screening call</p>
                    </div>
                    <div className="text-center">
                        <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">3</div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">Final Interview</h3>
                        <p className="text-gray-500 text-sm">In-person/technical interview</p>
                    </div>
                </div>
            </div>

            {/* Contact Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Don't See the Right Role?</h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                    We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="flex items-center gap-2 text-gray-600">
                        <FaEnvelope className="text-blue-600" />
                        <span>careers@dragonnews.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <FaPhoneAlt className="text-blue-600" />
                        <span>+880 1234 567890</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <FaGlobe className="text-blue-600" />
                        <span>www.dragonnews.com/careers</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarrierPage;