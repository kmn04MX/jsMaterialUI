import Container from "@mui/material/Container";
import Product1 from "./Components/Product1";
import BlueCard from "./Components/BlueCard";

export default function Practica3flexbox(){
    return (
        <>
            <Container sx={{
                mt: 5,
                mb: 5,
            }}
            >
                <Product1/>
                <BlueCard/>
            </Container>
        </>
    );
}