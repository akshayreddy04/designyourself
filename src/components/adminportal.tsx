import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  SpeedDial,
  SpeedDialIcon,
  Typography,
  styled,
} from "@mui/material";
import "./adminportal.css";
import EditIcon from "@mui/icons-material/Edit";
import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import { useState } from "react";
import { adminadddata } from "../features/loginslice";
import { useDispatch } from "react-redux";

const AdminPortal = () => {
  const dispatch: any = useDispatch();
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState<string>("");
  const data = {
    img: image,
    type: "",
    quantity: 0,
    price: 0,
  };
  const [dataarr, setDataarr] = useState<any>([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const takeImage = (event: any) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  };
  const setType = (event: any) => {
    data.type = event.target.value;
  };
  const setPrice = (event: any) => {
    data.price = event.target.value;
  };
  const setQuantity = (event: any) => {
    data.quantity = event.target.value;
  };
  const done = () => {
    setDataarr((dataarr: any) => [...dataarr, data]);
    dispatch(adminadddata([...dataarr, data]));
    setImage("");
  };

  const remove = (ind: any) => {
    const updatedData = dataarr.filter(
      (item: any, index: number) => index !== ind
    );
    setDataarr(updatedData);
    dispatch(adminadddata(dataarr));
  };

  const DesignedData = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    width: "92em",
    height: "150px",
    marginTop: "20px",
    backgroundColor: "rgb(109, 164, 170)",
    paddingTop: "20px",
    color: "white",
  }));
  const InputData = styled(Box)(() => ({
    marginLeft: "20px",
  }));

  const Admindata = styled(Box)(() => ({
    marginTop: "20px",
    display: "flex",
    paddingTop: "20px",
  }));
  return (
    <>
      <DesignedData>
        <Typography
          style={{
            fontSize: "30px",
            paddingLeft: "20px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Products Designed <br />
          200
        </Typography>
        <Typography
          style={{ fontSize: "30px", textAlign: "center", marginTop: "20px" }}
        >
          Products Ordered <br />
          150
        </Typography>
        <Typography
          style={{
            fontSize: "30px",
            paddingRight: "20px",
            textAlign: "center",
            marginTop: "20px",
          }}
        >
          Customer Rating <br />
          <Rating name="text-feedback" value={4.5} readOnly precision={0.5} />
        </Typography>
      </DesignedData>
      <center>
        <h1>Designs</h1>
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
              image={val.img}
              title="green iguana"
            />
            <CardContent style={{ color: "black" }}>
              <Typography gutterBottom variant="h5" component="div">
                {val.type}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {val.quantity}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {val.price}
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

      <React.Fragment>
        <Box
          sx={{
            height: 32,
            transform: "translateZ(0px)",
            flexGrow: 1,
          }}
          onClick={handleClickOpen}
        >
          <SpeedDial
            ariaLabel="SpeedDial openIcon example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon openIcon={<EditIcon />} />}
          ></SpeedDial>
        </Box>

        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{
            component: "form",
            onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const formData = new FormData(event.currentTarget);
              const formJson = Object.fromEntries((formData as any).entries());
              const email = formJson.email;
              handleClose();
            },
            style: {
              width: "500px", // Set the desired width
              height: "500px",
              position: "relative",
            },
          }}
        >
          <InputData>
            <h2>Image </h2>
            <input
              type="file"
              onChange={takeImage}
              style={{ width: "250px", height: "30px" }}
            />
            {image ? <img src={image} alt="" className="imagess" /> : null}
            <h2>Price</h2>
            <input
              type="text"
              style={{ width: "250px", height: "30px" }}
              onChange={setPrice}
            />
            <h2>Quantity</h2>
            <input
              type="text"
              style={{ width: "250px", height: "30px" }}
              onChange={setQuantity}
            />
            <h2>Type</h2>
            <input
              type="text"
              style={{ width: "250px", height: "30px" }}
              onChange={setType}
            />
          </InputData>

          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" onClick={done}>
              Done
            </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    </>
  );
};

export default AdminPortal;
