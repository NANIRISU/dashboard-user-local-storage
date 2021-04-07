import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { BsPeople } from 'react-icons/bs';
import { CgNotes } from 'react-icons/cg';
import { VscGraph } from 'react-icons/vsc';
import { RiCalendarLine } from 'react-icons/ri';
import {FaUsers} from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
    {
        name: "Dashboard",
        icon: <BiHomeAlt />,
        link:"/"
    },
    {
        name: "Recruitment",
        icon: <BsPeople />,
        link:"/recruitment"
    },
    {
        name: "Onboarding",
        icon: <CgNotes />,
        link:"/onboarding"
    },

    {
        name: "Reports",
        icon: <VscGraph />,
        link:"/reports"

    },
    {
        name: "Calendar",
        icon: <RiCalendarLine />,
        link:"/calendar"
    },
    {
        name: "Users",
        icon: <FaUsers/>,
        link:"/settings"
    },
    // {
    //     name:"Users",
    //     icon:<FaUsers/>,
    //     link:"/usernav"
    // }
]

const DashboardLayout = ({children}) => {
   // console.log(props)
   const location=useLocation();
   //console.log(location)
    return (
        <div className="dashboard">
            <nav className="side-nav-bar">
                <div className="logo-container">
                    <h3>CATALYST HR</h3>
                </div>
                <div className="nav-container">
                    {navItems.map((navItems, index) => (
                        <Link key={index} to={navItems.link}>
                            <div  className={`nav-item ${navItems.link===location.pathname ? 'selected':' '}`}>   
                                                   {/* this line if navitem&link is on  path is same page  i.e. page  :: both are same link path needs be  */}
                                {navItems.icon}
                                <label className="item-name">{navItems.name}</label>

                            </div>
                        </Link>
                    ))}
                </div>
                <div className="image-container">
                  vector here
                </div>

            </nav>
            <div className="main-container">
                {children}
        
        </div>

        </div>
    )
}
export default DashboardLayout; 