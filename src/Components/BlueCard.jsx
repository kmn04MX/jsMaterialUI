import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

export default function BlueCard(){
    return (
        <>
            <Card sx={{
                mt:5,
                boxShadow: 10,
                transition: "0.2s",
                "&:hover":{
                    transform: "scale(1.05)",
                }
            }}>
                <CardMedia 
                    component="img"
                    image="https://via.placeholder.com/1000x200"
                    height="200"
                    alt="blue card"
                />
                <CardContent>
                    <Typography variant="h5">Card Title</Typography>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error et autem molestias consequatur recusandae quasi maxime ad ratione. Rerum expedita fuga, deserunt ipsam quaerat ex repellendus sequi recusandae necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error et autem molestias consequatur recusandae quasi maxime ad ratione. Rerum expedita fuga, deserunt ipsam quaerat ex repellendus sequi recusandae necessitatibus!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error et autem molestias consequatur recusandae quasi maxime ad ratione. Rerum expedita fuga, deserunt ipsam quaerat ex repellendus sequi recusandae necessitatibus! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis error et autem molestias consequatur recusandae quasi maxime ad ratione. Rerum expedita fuga, deserunt ipsam quaerat ex repellendus sequi recusandae necessitatibus!
                    </p>
                    
                </CardContent>
                <CardActions>
                    <Button variant="contained">ADD</Button>
                    <Button>rRemove</Button>
                </CardActions>
            </Card>
        </>
    );
}