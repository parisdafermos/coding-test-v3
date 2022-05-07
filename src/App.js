import "./App.css";
import Header from "./components/Header";
import {
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  Typography,
  Box,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
function App() {
  const url = "http://localhost:8080/products";
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [inputValue, setInputValue] = useState("");
  useEffect(() => {
    fetch(`${url}?q=${inputValue}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const transformedData = data.map((apiData) => {
          return {
            name: apiData.name,
            id: apiData.id,
            description: apiData.description,
            image: apiData.defaultImage,
            price: apiData.price,
          };
        });
        setProducts(transformedData);
      });
  }, [inputValue]);

  const handleInputChange = (event) => {
    let userInput = event.target.value;
    setInputValue(userInput);
  };
  return (
    <>
      <Header />
      <Box mt={1}>
        <Grid
          alignItems="center"
          container
          direction="column"
          justify="center"
          spacing={3}
        >
          <Grid item md={6} sm={9} xs={12}>
            <TextField
              label="Search"
              color="primary"
              onChange={handleInputChange}
            />
          </Grid>

          <Grid
            item
            md={6}
            sm={9}
            xs={12}
            direction="row"
            container
            justify="center"
            alignItems="center"
          >
            {products.map((product) => (
              <Card sx={{ maxWidth: 345, m: 2 }} key={product.id}>
                <CardMedia
                  component="img"
                  height="140"
                  image={product.image}
                  alt={product.name}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Typography size="small">£{product.price}</Typography>
                  <Button size="small">Add to Cart</Button>
                </CardActions>
              </Card>
            ))}
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
