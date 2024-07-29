import { useState } from 'react';
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";

const Nav = ({SearchVideo}) => {

    const [Search, setSearch] = useState()
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className=' flex flex-row'>
                    <div className=' w-72 h-96  overflow-hidden'>
                        <div className=' font-bold text-stone-800 flex jus'>
                            <div className=' relative top-1 text-2xl my-3 p-2'>
                                <MdOutlineSlowMotionVideo className=' hover:size-10 duration-300 size-8' /></div>
                            <div className=' hover:text-3xl duration-300 text-2xl my-3 p-2'>VideshiVibes</div>
                        </div>
                        <div className='flex justify-center'>
                            <Link to='/Saved' className='flex gap-2 relative top-6'>
                                <div className=''>
                                    <MdOutlineVideoLibrary className=' size-6' />
                                </div>
                                <div>Saved Videos</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </List>
        </Box>
    );

    const handleSearch = () => {
        SearchVideo(Search)
        setSearch('')
    }
    const handleText = (e) => {
        setSearch(e.target.value)
    }
    
    return (
        <div>
            <div className=' flex justify-between bg-sky-400 py-5'>
                <div>
                    <div>
                    </div>
                    <div className=' font-bold text-stone-800 flex gap-4'>
                        <button className=' relative left-6'>
                            <MenuIcon
                                onClick={
                                    toggleDrawer("left", true)
                                }
                            />
                            <Drawer
                                anchor={"left"}
                                open={state["left"]}
                                onClose={toggleDrawer("left", false)}
                            >
                                {list("left")}
                            </Drawer>
                        </button>
                        <Link to="/" className='flex gap-4'>
                            <div className=' relative top-1 text-2xl left-20'>
                                <MdOutlineSlowMotionVideo className=' hover:size-10 duration-300 size-8' /></div>
                            <div className=' hover:text-3xl duration-300 text-2xl relative left-20'>VideshiVibes</div>
                        </Link>
                    </div>
                </div>
                <div className=' relative bottom-1'>
                    <input value={Search} onChange={handleText} type="text" className=' rounded-3xl text-center py-1' placeholder='Search' 
                    onKeyDown={(e)=>{ if (e.key == "Enter") {
                        handleSearch()
                    }}} />
                    <button onClick={()=>handleSearch()} className=' relative right-8 top-1'><IoMdSearch className=' size-6' /></button>
                </div>
                <ul className=' flex gap-5 relative right-10'>
                    <li><Link to="/" className=' hover:font-bold duration-200'>Home</Link></li>
                    <li><Link to="" className=' hover:font-bold duration-200'>About Us</Link></li>
                    <li><Link to="" className=' hover:font-bold duration-200'>Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default Nav
