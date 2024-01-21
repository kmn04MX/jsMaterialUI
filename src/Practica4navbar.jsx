import Navbar from "./Components/navbar/Navbar";
import { Container } from "@mui/material";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Home from "./Pages/Home";

import { Routes, Route } from "react-router-dom";

import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon  from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';

const navArrayLinks = [
    {
        title: "home",
        path:"/",
        icon: <InboxIcon/>
    },
    {
        title: "login",
        path:"/login",
        icon: <DraftsIcon/>
    },
    {
        title: "register",
        path:"/register",
        icon: <MenuIcon/>
    }
]


export default function Practica4navbar(){
    return (<>
        <Navbar navArrayLinks={navArrayLinks}/>
        <Container sx={{mt:5}}>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </Container>
            
    </>);
}