import {
  Box,
  Button,
  FormControl,
  ImageList,
  ImageListItem,
  InputLabel,
  MenuItem,
  Select,
  styled,
} from "@mui/material";
import iphone1 from "../assets/images/iphone1.png";
import hoodie from "../assets/images/hoodie1.png";
import hoodie2 from "../assets/images/hoodie2.png";
import hoodie3 from "../assets/images/hoodie3.png";
import tshirt from "../assets/images/tshirt1.png";
import tshirt2 from "../assets/images/tshirt2.png";
import tshirt3 from "../assets/images/tshirt3.png";
import cup from "../assets/images/cup.png";
import cup2 from "../assets/images/cup.png";
import cup3 from "../assets/images/cup.png";
import bags from "../assets/images/bags.png";
import bags2 from "../assets/images/bags.png";
import bags3 from "../assets/images/bags.png";
import a from "../assets/images/1.png";
import b from "../assets/images/2.png";
import c from "../assets/images/3.png";
import d from "../assets/images/4.png";
import e from "../assets/images/5.png";
import f from "../assets/images/6.png";
import g from "../assets/images/7.png";
import h from "../assets/images/8.png";
import i from "../assets/images/9.png";
import j from "../assets/images/10.png";
import k from "../assets/images/11.png";
import l from "../assets/images/12.png";
import "../components/design.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useradddata } from "../features/loginslice";

const Design = () => {
  const dispatch: any = useDispatch();
  const [imagecolor, setImageColor] = useState("");
  const [imageclass, setImageClass] = useState("");
  const [item, setDesignImage] = useState<string>("../assets/images/1.png");
  const image = useSelector((state: any) => state.type.catType + imagecolor);
  const [images, setImages] = useState("");
  const [sizedata, setsizedata] = useState("");
  const imageMap: any = {
    hoodie,
    hoodie2,
    hoodie3,
    tshirt,
    tshirt2,
    tshirt3,
    cup,
    cup2,
    cup3,
    bags,
    bags2,
    bags3,
  };
  const cartData = {
    img1: imageMap[image],
    img2: item,
    type: "",
    size: sizedata,
    quantity: 0,
    price: "$10",
  };
  const [cartdataarr, setCartdataarr] = useState<any>([]);

  const addimage = (item: any) => {
    cartData.img1 = imageMap[image];
    cartData.img2 = item;
  };
  const select = (siz: any) => {
    setsizedata(siz);
  };
  const quantity = (event: any) => {
    cartData.quantity = event.target.value;
  };
  const addtocart = (event: any) => {
    event.preventDefault;
    setCartdataarr((cartdataarr: any) => [...cartdataarr, cartData]);
    dispatch(useradddata([...cartdataarr, cartData]));
  };
  const changeColor = (color: any, type: any) => {
    if (color === "black") {
      setImageColor("");
    }
    if (color === "brown") {
      setImageColor("2");
    }
    if (color === "green") {
      setImageColor("3");
    }
  };

  const displayDesign = (index: any) => {
    if (image === "hoodie") {
      setImageClass("hoodie");
    }
    if (image === "tshirt") {
      setImageClass("tshirt");
    }
    if (image === "cup") {
      setImageClass("cup");
    }
    if (image === "bags") {
      setImageClass("bags");
    }
    setDesignImage(itemData[index].img);
  };

  const itemData: any = [
    {
      img: a,
      title: "Breakfast",
    },
    {
      img: b,
      title: "Burger",
    },
    {
      img: c,
      title: "Camera",
    },
    {
      img: d,
      title: "Coffee",
    },
    {
      img: e,
      title: "Hats",
    },
    {
      img: f,
      title: "Honey",
    },
    {
      img: g,
      title: "Basketball",
    },
    {
      img: h,
      title: "Fern",
    },
    {
      img: i,
      title: "Mushrooms",
    },
    {
      img: j,
      title: "Tomato basil",
    },
    {
      img: k,
      title: "Sea star",
    },
    {
      img: l,
      title: "Bike",
    },
  ];

  const DesignPage = styled(Box)(() => ({
    display: "flex",
    width: " 92.5em",
    height: " 800px",
  }));
  const IphoneTheme = styled(Box)(() => ({
    backgroundImage: `url(${iphone1})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "600px",
    fill: "red",
    marginTop: "10px",
  }));
  const StylingCredentials = styled(Box)(() => ({
    marginLeft: "200px",
    marginTop: "10px",
  }));
  const ColorButton = styled(Box)(() => ({
    display: "flex",
    marginTop: "50px",
  }));
  const Image = styled(Box)(() => ({
    marginLeft: "85px",
    marginTop: "100px",
  }));
  const DesignImage = styled(Box)(() => ({}));
  console.log(typeof image);
  return (
    <>
      <DesignPage>
        <IphoneTheme>
          <Image>
            <div id="img">
              <img
                style={{ height: "34em", width: "400px" }}
                className="type"
                src={imageMap[image]}
                alt=""
              />
              {/* <img src={} alt="" /> */}
              <img
                className={imageclass}
                srcSet={`${item}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item}?w=164&h=164&fit=crop&auto=format`}
                loading="lazy"
                onLoad={() => addimage(item)}
              />
            </div>
            <img src={images} alt="" />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "26em",
                height: "50px",
              }}
            >
              <h1 style={{ paddingTop: "10px" }}>$10</h1>
              <Button
                variant="outlined"
                style={{ marginTop: "20px", height: "50px" }}
                onClick={addtocart}
              >
                Add to cart
              </Button>
            </div>

            <ColorButton>
              <Button
                style={{
                  backgroundColor: "black",
                  height: "20px",
                  width: "140px",
                }}
                onClick={() => changeColor("black", imageMap[image].key)}
              ></Button>
              <Button
                style={{
                  backgroundColor: "brown",
                  height: "20px",
                  width: "140px",
                }}
                onClick={() => changeColor("brown", imageMap[image].key)}
              ></Button>
              <Button
                style={{
                  backgroundColor: "green",
                  height: "20px",
                  width: "140px",
                }}
                onClick={() => changeColor("green", imageMap[image].key)}
              ></Button>
            </ColorButton>
          </Image>
        </IphoneTheme>
        <StylingCredentials>
          <h1>Templates</h1>
          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={250}>
            {itemData.map((item: any, index: number) => (
              <ImageListItem key={index}>
                <img
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  alt={item.title}
                  loading="lazy"
                  onClick={() => displayDesign(index)}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <h1 style={{ marginTop: "0" }}>Size-{sizedata}</h1>
          <div
            style={{
              display: "flex",
              height: "40px",
              width: "237px",
              justifyContent: "space-between",
            }}
          >
            <button onClick={() => select("S")}>S</button>
            <button onClick={() => select("M")}>M</button>
            <button onClick={() => select("L")}>L</button>
            <button onClick={() => select("XL")}>XL</button>
            <button onClick={() => select("XXL")}>XXL</button>
          </div>
          <h1 style={{ marginBottom: "0" }}>Quantity</h1>
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Quantity</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Quantity"
              onChange={quantity}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
            </Select>
          </FormControl>
        </StylingCredentials>
      </DesignPage>
    </>
  );
};

export default Design;
