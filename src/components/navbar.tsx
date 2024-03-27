import {
  AppBar,
  Avatar,
  Box,
  InputBase,
  Toolbar,
  Typography,
  alpha,
  styled,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#FFC63A",
  });
  const nav = () => {
    navigate("/");
  };
  const cart = () => {
    navigate("/cart");
  };
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const Iocns = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    width: "10%",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "black",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "40ch",
      },
    },
  }));

  return (
    <>
      <AppBar position="static">
        <StyledToolbar>
          <Typography style={{ color: "black" }} variant="h4">
            DESIGN YOURSELF
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Iocns style={{ width: "300px" }}>
            <i onClick={nav}>Home</i>
            <i onClick={cart}>
              <ShoppingCartIcon></ShoppingCartIcon>
            </i>

            <FavoriteIcon style={{ color: "red" }}></FavoriteIcon>
            <Avatar
              sx={{ width: 24, height: 24 }}
              alt="Cindy Baker"
              src="/static/images/avatar/3.jpg"
            />
          </Iocns>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
