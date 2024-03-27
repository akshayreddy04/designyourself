import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Rating,
  Typography,
  styled,
} from "@mui/material";
import "./userportal.css";
import sale from "../assets/images/sale.png";
import hoodies from "../assets/images/hoodies.png";
import tshirt from "../assets/images/tshirt.png";
import bag from "../assets/images/bag.png";
import cups from "../assets/images/cups.png";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { green, red, yellow } from "@mui/material/colors";
import { useState } from "react";
import { addType } from "../features/loginslice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const UserPortal = () => {
  const navigate = useNavigate();
  const dispatch: any = useDispatch();
  const dataarr = useSelector((state: any) => state.adminAddData.data);
  const assignType = (text: any) => {
    dispatch(addType(text));
    navigate("/design");
  };

  const SaleImg = styled(Box)(() => ({
    width: "92em",
    height: "600px",
    marginTop: "20px",
  }));

  const Category = styled(Card)(() => ({
    display: "flex",
    height: "300px",
  }));

  const Categorydata = styled(Box)(() => ({
    marginLeft: "100px",
  }));
  const ReviewSection = styled(Box)(() => ({
    display: "flex",
  }));

  const Userdata = styled(Box)(() => ({
    marginTop: "20px",
    display: "flex",
    paddingTop: "20px",
  }));
  console.log(dataarr);

  return (
    <>
      <SaleImg>
        <img src={sale} style={{ width: "92em" }} />
      </SaleImg>
      <center>
        <h1>Categories</h1>
      </center>

      <Category>
        <CardMedia
          component="img"
          sx={{ width: 600 }}
          image={hoodies}
          alt="Live from space album cover"
        />
        <Categorydata>
          <h1 style={{ fontSize: "50px" }}>Hoodies</h1>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Hoodies, the epitome of comfort and casual style, have seamlessly
            woven their way into contemporary fashion. <br /> With their
            versatile designs and cozy allure, hoodies effortlessly transition
            from laid-back loungewear to a staple streetwear essential.
          </Typography>
          <Button
            variant="contained"
            style={{ marginTop: "20px" }}
            onClick={() => {
              assignType("hoodie");
            }}
          >
            Customize
          </Button>
          <Button
            variant="text"
            style={{ marginTop: "20px", marginLeft: "0px", paddingLeft: "0px" }}
            onClick={() => assignType("hoodie")}
          >
            <DoubleArrowIcon></DoubleArrowIcon>
          </Button>
        </Categorydata>
      </Category>

      <Category style={{ marginTop: "20px" }}>
        <CardMedia
          component="img"
          sx={{ width: 530 }}
          image={tshirt}
          alt="Live from space album cover"
        />
        <Categorydata>
          <h1 style={{ fontSize: "50px" }}>T-Shirt</h1>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            The timeless simplicity of a T-shirt makes it a wardrobe cornerstone
            for people of all ages. With its short
            <br /> sleeves and crew neckline, the T-shirt's minimalist design is
            a canvas for self-expression through graphics <br />, logos, or
            plain hues
          </Typography>
          <Button
            variant="contained"
            style={{ marginTop: "20px" }}
            onClick={() => assignType("tshirt")}
          >
            Customize
          </Button>
          <Button
            variant="text"
            style={{ marginTop: "20px", marginLeft: "0px", paddingLeft: "0px" }}
            onClick={() => assignType("tshirt")}
          >
            <DoubleArrowIcon></DoubleArrowIcon>
          </Button>
        </Categorydata>
      </Category>

      <Category style={{ marginTop: "20px" }}>
        <CardMedia
          component="img"
          sx={{ width: 530 }}
          image={bag}
          alt="Live from space album cover"
        />
        <Categorydata>
          <h1 style={{ fontSize: "50px" }}>Carry Bags</h1>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Carry bags, the unsung heroes of convenience, play a pivotal role in
            our daily lives. From eco-friendly <br /> totes to sturdy shopping
            bags, these versatile companions effortlessly carry our essentials
            with flair.
          </Typography>
          <Button
            variant="contained"
            style={{ marginTop: "20px" }}
            onClick={() => assignType("bags")}
          >
            Customize
          </Button>
          <Button
            variant="text"
            style={{ marginTop: "20px", marginLeft: "0px", paddingLeft: "0px" }}
            onClick={() => assignType("bags")}
          >
            <DoubleArrowIcon></DoubleArrowIcon>
          </Button>
        </Categorydata>
      </Category>
      <Category style={{ marginTop: "20px" }}>
        <CardMedia
          component="img"
          sx={{ width: 530 }}
          image={cups}
          alt="Live from space album cover"
        />
        <Categorydata>
          <h1 style={{ fontSize: "50px" }}>Cups</h1>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
            Cups, vessels of simplicity yet profound utility, hold the essence
            of our daily rituals. Whether cradling a morning coffee or hosting a
            soothing evening tea, these humble containers bridge the gap between
            necessity and comfort. From sleek ceramic mugs to disposable paper
            cups
          </Typography>
          <Button
            variant="contained"
            style={{ marginTop: "20px" }}
            onClick={() => assignType("cup")}
          >
            Customize
          </Button>
          <Button
            variant="text"
            style={{ marginTop: "20px", marginLeft: "0px", paddingLeft: "0px" }}
            onClick={() => assignType("cup")}
          >
            <DoubleArrowIcon></DoubleArrowIcon>
          </Button>
        </Categorydata>
      </Category>
      <center>
        <h1>Designs</h1>
      </center>
      <Userdata>
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
          </Card>
        ))}
      </Userdata>

      <center>
        <h1>Reviews</h1>
      </center>
      <ReviewSection>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            title="Rosi"
            subheader="Jan 1, 2024"
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              The website's user-friendly interface made designing my custom
              pieces a breeze. The array of options for colors, styles, and
              graphics was impressive, allowing me to create truly unique
              garments. Navigating through the customization process was
              intuitive, and the preview feature ensured I could visualize the
              final product accurately.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: yellow[500] }} aria-label="recipe">
                M
              </Avatar>
            }
            title="Mark"
            subheader="Jan 14, 2024"
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              The website's user-friendly interface made designing my custom
              pieces a breeze. The array of options for colors, styles, and
              graphics was impressive, allowing me to create truly unique
              garments. Navigating through the customization process was
              intuitive, and the preview feature ensured I could visualize the
              final product accurately.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: green[500] }} aria-label="recipe">
                J
              </Avatar>
            }
            title="Jack"
            subheader="Jan 10, 2024"
          />

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              The website's user-friendly interface made designing my custom
              pieces a breeze. The array of options for colors, styles, and
              graphics was impressive, allowing me to create truly unique
              garments. Navigating through the customization process was
              intuitive, and the preview feature ensured I could visualize the
              final product accurately.
            </Typography>
          </CardContent>
        </Card>
      </ReviewSection>
    </>
  );
};

export default UserPortal;
