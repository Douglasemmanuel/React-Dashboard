import React from 'react'
import Logo from "../../imgs/logo.png"
import './Sidebar.css'
import {useState} from 'react'
import { UilBars } from "@iconscout/react-unicons";
import { SidebarData } from '../../Data/Data'
import { motion } from 'framer-motion';
const Sidebar = () => {
    const [selected,setselected] = useState(0)
    const [expanded,setExpanded] = useState(true)
    const sidebarVariants ={
        true:{
        left:'0'
        },
        false:{
        left:'-60%'
        }
    }
  return (
    <>
    <div className='bars' style={expanded?{left:'60%'}:{left:'5%'}}
    onClick={()=>{setExpanded(!expanded)}}
    >
        <UilBars />
    </div>
    <motion.div className="sidebar"
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
        {/* LOGO */}
        <div className="logo">
            <img src={Logo} alt="" />
            <span className='lolo'>
                Sh<span>o</span>ps
            </span>
        </div>
        {/* menu */}
        <div className="menu">
           {SidebarData.map((item,index)=>{
            return(
                <div className={selected === index?'menuItem active':'menuItem'}
                key = {index}
                onClick={()=>setselected(index)}
                >
                    <item.icon/>
                    <span>
                        {item.heading}
                    </span>
                </div>
            )
           })}
        </div>
    </motion.div>
    </>
  )
}

export default Sidebar