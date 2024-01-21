import {Button, Paper, Typography} from "@mui/material";
import styled from "@emotion/styled"
import { Box } from "@mui/material";

export default function Product1(){
    const Img = styled("img")({
        width:200,
        height: "100%",
        objectFit: "cover",
        objectPosition: "center"
    });
    
    return (
        <>
            <Paper
                sx={{ 
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    overflow: "hidden",
                    mt: 5,
                 }}
            >
            <Img 
                src="https://via.placeholder.com/200"
                alt="mi hermosa imagen con styled"
            />
            <Box sx={{flexGrow:1}}>
                 <Typography variant="h4">Product name</Typography>
                 <Typography variant="body1">Product Descriptor</Typography>
                 <Button variant="contained" color="success">Add to cart</Button>
            </Box>
            <Box sx={{mr:2}}>
                $19.89
            </Box>
            </Paper>
        </>
    );
}