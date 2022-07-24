// // import Button from "@mui/core/Button";
// import {
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Typography,
// } from "@mui/material";
// // import makeStyles from "@mui/material/styles";
// // import Card from "@material-ui/core/Card";
// // import Typography from "@mui/core/Typography";

// const useStyles = {
//   root: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)",
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// };

// const ProductCard = ({
//   key,
//   category,
//   name,
//   seller,
//   wholePrice,
//   priceFraction,
//   stock,
//   star,
//   starCount,
//   img,
//   url,
//   features,
//   price,
//   shipping,
// }) => {
//   const classes = useStyles;
//   const bull = <span className={classes.bullet}>•</span>;
//   return (
//     <>
//       <Card className={classes.root}>
//         <CardContent>
//           <Typography
//             className={classes.title}
//             color="textSecondary"
//             gutterBottom
//           >
//             Word of the Day
//           </Typography>
//           <Typography variant="h5" component="h2">
//             be{bull}nev{bull}o{bull}lent
//           </Typography>
//           <Typography className={classes.pos} color="textSecondary">
//             adjective
//           </Typography>
//           <Typography variant="body2" component="p">
//             well meaning and kindly.
//             <br />
//             {'"a benevolent smile"'}
//           </Typography>
//         </CardContent>
//         <CardActions>
//           <Button size="small">Learn More</Button>
//         </CardActions>
//       </Card>
//     </>
//   );
// };

// export default ProductCard;

import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
// import { makeStyles } from "@mui/styles";

// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
// });

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
    <Card style={{ maxWidth: "300px", margin: "10px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          //   height="100%"
          image={img}
          title={name}
          style={{ margin: "5px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
