import React from 'react';
import Access from '../../Access'; 
import { Calendar, Check, Banknote, MessagesSquare, Video, Bell, GraduationCap } from 'lucide-react'; 
import StNav from '../MinComponens/StNav';
import StFooter from '../MinComponens/StFooter';
import { path } from 'framer-motion/m';
import { useNavigate } from 'react-router-dom';

function StHome() {
    const navigation=useNavigate()

    const studentName = "Sarah Connor"; 

    const subjects = [
        { id: 1, name: "Mathematics", image: "https://img.icons8.com/color/96/math.png", path: "/stsubject" },
        { id: 2, name: "Science", image: "https://img.icons8.com/color/96/physics.png", path: "/stsubject" },
        { id: 3, name: "English", image: "https://img.icons8.com/color/96/book.png", path: "/stsubject" },
        { id: 4, name: "Computer Science", image: "https://img.icons8.com/color/96/laptop.png", path: "/stsubject" },
        { id: 5, name: "Social Studies", image: "https://img.icons8.com/color/96/globe--v1.png", path: "/stsubject" },
        { id: 6, name: "Art & Design", image: "https://img.icons8.com/color/96/paint-palette.png", path: "/stsubject" },
    ];

    /*const handleNavigation = (path) => {
        console.log(`Navigating to: ${path}`);
    };*/

    const handleNavigation = (path) => {
    navigation(path);
};

    return (
        <div className="min-h-screen bg-gray-50 font-sans overflow-hidden ">
           <StNav/>
            <main className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                
                <section className="mb-12 pt-15">
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Your Subjects
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {subjects.map((sub) => (
                            <a
                                key={sub.id}
                                href={sub.link} 
                                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 
                                           transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl 
                                           cursor-pointer flex flex-col items-start group" 
                                onClick={()=>(navigation(sub.path))}
                            >
                                <div className="mb-4 bg-indigo-50 p-2 rounded-full">
                                    <img 
                                        src={sub.image} 
                                        alt={`${sub.name} icon`} 
                                        className="w-8 h-8 object-contain" 
                                    />
                                </div>
                                
                                <h3 className="text-xl font-semibold text-gray-800 group-hover:text-indigo-600 transition">
                                    {sub.name}
                                </h3>
                                
                            </a>
                        ))}
                    </div>
                </section>

                <section className='pb-15'>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Quick Actions
                    </h2>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                       
                        <Access 
                            Icon={Calendar} 
                            text="View Timetable" 
                            onClick={() => handleNavigation("/timetable")}
                        />
                        <Access 
                            Icon={Check} 
                            text="View Attendance" 
                            onClick={() => handleNavigation("/attendance")}
                        />
                        <Access 
                            Icon={Banknote} 
                            text="View Fees" 
                            onClick={() => handleNavigation("/fees")}
                        />
                        <Access 
                            Icon={MessagesSquare} 
                            text="Chat with Teacher" 
                            onClick={() => handleNavigation("/chat")}
                        />
                        <Access 
                            Icon={Video} 
                            text="Attend Class" 
                            onClick={() => handleNavigation("/live-class")}
                        />
                        <Access 
                            Icon={Bell} 
                            text="Notifications" 
                            onClick={() => handleNavigation("/notifications")}
                        />
                    </div>
                </section>
            </main>
            <StFooter/>
        </div>
    );
}

export default StHome;