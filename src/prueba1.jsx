import { Button } from "@mui/material";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Box } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
export default function App() {
  return (
    <>
      <Container sx={{border: 5, borderStyle:"solid", borderColor:"blue"}}>
        <h1>Hello, world!</h1>
        <h2>Goodbye, world!</h2>
        <Typography variant="h1">Este es un H1</Typography>
        <Typography variant="h2">Este es un H2</Typography>
        <Typography variant="h1" component="span" color="red">Este es un span</Typography>
        <Button 
          variant="contained"
          color="success"
          endIcon={<ArrowForwardIcon />}
        >
            mi primer boton
        </Button>
        <Box
          sx={{
            display: " flex",
            flexDirection: "column",
          }}
        >
          <Button endIcon={<ArrowForwardIcon/>}></Button>
        </Box>
        <Typography variant="p" component="p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quaerat perferendis quos consequatur blanditiis nisi. Tenetur nisi recusandae, ipsa, omnis ex enim molestias, autem dignissimos eius quos voluptate nam similique?</Typography>
        <Box
          sx={{
            border: 2,
            borderColor: "peru",
            p: 2,
            bgcolor: "#111",
            color: "white",
          }}
        />
      
      </Container>
    </>
  );
}