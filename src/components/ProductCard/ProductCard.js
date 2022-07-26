import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";

const classes = {
  CardMedia: {
    padding: "5px",
  },
  Card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "15px",
    lineHeight: "28px",
    // alignItems: "center",
    maxWidth: "300px",
    margin: "10px",
  },
};

export default function ProductCard(props) {
  const {
    key,
    category,
    name,
    seller,
    wholePrice,
    priceFraction,
    stock,
    star,
    starCount,
    img,
    url,
    features,
    price,
    shipping,
  } = props.Product;
  //   console.log(name);
  return (
    <Card style={classes.Card}>
      <CardActionArea onClick={() => console.log("open url with params:", key)}>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          //   height="100%"
          image={img}
          title={name}
          style={classes.CardMedia}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="span"
            fontSize="16px"
            lineHeight="18px"
          >
            {name && name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {/* {seller} */}
            {/* <Rating name="read-only" value={star} readOnly />({starCount}) */}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Typography variant="body2" color="textSecondary" component="p">
        <Rating name="read-only" value={star} readOnly />({starCount})
      </Typography>

      <Typography variant="h2" color="textSecondary" component="p">
        ${price}
        {/* {priceFraction} */}
      </Typography>
      <Typography variant="span">In Stock: {stock}</Typography>
      <Typography variant="span">${shipping} shipping</Typography>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => console.log("add to cart : ", { key })}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
}
