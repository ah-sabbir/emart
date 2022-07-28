import { Grid, MenuItem } from "@mui/material";

const classes = {
  List: {
    minWidth: "15%",
  },
  menuItems: {
    width: "100%",
  },
};

const SideBar = ({ category }) => {
  // const {
  //   data: productsData,
  //   error,
  //   isError,
  //   isLoading,
  // } = useQuery(["category"], products);

  // const [category, setCategory] = useState([]);

  // useMemo(() => {
  //   if (productsData) {
  //     setCategory([...new Set(productsData.map((item) => item.category))]);
  //   }
  // }, [productsData]);

  // if (isError) return <>Error Loading...</>;
  // if (isLoading) return <>Loading...</>;

  return (
    <Grid>
      {category.map((item, index) => {
        return (
          <MenuItem key={index} style={classes.menuItems}>
            {item}
          </MenuItem>
        );
      })}
    </Grid>
  );
};

export default SideBar;
