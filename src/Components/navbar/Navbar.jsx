import { NavLink } from "react-router-dom";
import { AppBar, Button, Drawer, Toolbar, IconButton, Typography, Box} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";

import MenuIcon from '@mui/icons-material/Menu';


export default function Navbar({navArrayLinks}){
    const [open, setOpen] = useState(false);

    return (<>
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    color="inherit"
                    size="large"
                    onClick={()=>{setOpen(true)}}
                    sx = {{diplay: {xs: "flex", sm: "none"}}}
                >
                <MenuIcon/>
                </IconButton>
                <Typography variant="h6" sx={{flexGrow:1}}>News</Typography>
                <Box sx={{display: {xs: "none", sm: "block"}}}>
                    {
                        navArrayLinks.map(item=>(
                            <Button 
                                color="inherit" 
                                key={item.title}
                                component={NavLink}
                                to={item.path}
                            >
                                {item.title}
                                
                            </Button>
                        ))
                    }
                </Box>
            </Toolbar>
        </AppBar>
        <Drawer
            open={open}
            anchor="left"
            onClose={()=> setOpen(false)}
            sx = {{diplay: {xs: "flex", sm: "none"}}}
        >
            <NavListDrawer 
                navArrayLinks={navArrayLinks} 
                NavLink = {NavLink}
                setOpen = {setOpen}
            />
        </Drawer>
    </>);
}