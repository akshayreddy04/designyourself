import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  styled,
} from "@mui/material";
import { useSelector } from "react-redux";
import { useradddata } from "../features/loginslice";
import { useDispatch } from "react-redux";

const Cart = () => {
  const dataarr = useSelector((state: any) => state.userAddData.data);
  const dispatch: any = useDispatch();
  const remove = (ind: any) => {
    const updatedData = dataarr.filter(
      (item: any, index: number) => index !== ind
    );

    dispatch(useradddata(updatedData));
  };
  const Admindata = styled(Box)(() => ({
    marginTop: "20px",
    display: "flex",
    paddingTop: "20px",
  }));
  console.log(typeof dataarr);

  return (
    <>
      <center>
        <h1>Cart</h1>
      </center>
      <Admindata>
        {dataarr.map((val: any, index: number) => (
          <Card
            sx={{
              backgroundColor: "white",
              color: "black",
              width: "250px",
              marginLeft: "10px",
            }}
            key={index}
          >
            <CardMedia
              sx={{ height: 200 }}
              style={{ position: "relative" }}
              image={val.img1}
              title="green iguana"
            />
            <CardMedia
              sx={{ height: 90, width: 100 }}
              style={{ position: "relative", top: "-159px", left: "77px" }}
              image={val.img2}
              title="green iguana"
            />
            <CardContent style={{ color: "black" }}>
              <Typography gutterBottom variant="h5" component="div">
                {val.price}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {val.size}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {val.quantity}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => remove(index)}>
                Remove
              </Button>
            </CardActions>
          </Card>
        ))}
      </Admindata>
    </>
  );
};

export default Cart;
