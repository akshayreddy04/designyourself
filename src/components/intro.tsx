import { Box, Button, styled } from "@mui/material";
import "./intro.css";
import Bgimage from "../assets/images/Bgimage.jpg";
import { Link } from "react-router-dom";

const Intro = () => {
  const Logins = styled(Box)(() => ({
    display: "flex",
    justifyContent: "space-between",
    width: "25%",
    paddingLeft: "30px",
    paddingTop: "20px",
  }));

  return (
    <div>
      <div className="main" style={{ backgroundImage: `url(${Bgimage})` }}>
        <h1 className="welcome">
          Welcome To<br></br>Our Universe<br></br>Of{" "}
          <span className="fashion">Fashion</span>
        </h1>
        <p className="paragraph">
          Fashion is an ever-evolving expression of individuality and culture, a
          dynamic <br /> art form that transcends time and boundaries. It serves
          as a powerful means <br /> of self-expression, allowing individuals to
          communicate their personalities, <br /> moods, and aspirations through
          clothing and accessories.
        </p>
        <Logins>
          <Link to="/loginpage">
            <Button
              style={{ width: "150px" }}
              variant="outlined"
              color="error"
              size="large"
            >
              Login
            </Button>
          </Link>
          <Link to="/loginpage">
            <Button style={{ width: "150px" }} variant="contained" size="large">
              signin
            </Button>
          </Link>
        </Logins>
      </div>
    </div>
  );
};

export default Intro;
