import React from "react";
import {
  Box,
  Grid,
  Fade,
  Grow,
  Typography,
  Badge,
  Divider,
  Menu,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import RedeemIcon from "@mui/icons-material/Redeem";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import CheckroomIcon from "@mui/icons-material/Checkroom";
import Option10DropDownItem from "./Option10DropDownItem";
import RenderDropDownContent from "./RenderDropDownContent";
import ParticlesBg from "particles-bg";



const Option10 = () => {
  const navIcons = {
    icon: (
      <CheckroomIcon
        sx={{
          fontSize: "72px",
          fill: "#94F089",
        }}
      />
    ),
    title: "Kids",
  };
  const data = [
    {
      icon: "https://img.icons8.com/ios/344/shirt.png",
      title: "Shirts",
    },
    {
      icon: "https://img.icons8.com/ios/344/t-shirt--v1.png",
      title: "T-Shirts",
    },
    {
      icon: "https://img.icons8.com/ios/344/mens-hoodie--v2.png",
      title: "Hoodies",
    },
    {
      icon: "https://img.icons8.com/ios/344/trousers.png",
      title: "Pants & Shorts",
    },
    {
      icon: "https://img.icons8.com/external-photo3ideastudio-lineal-photo3ideastudio/344/external-shoes-travel-checklist-photo3ideastudio-lineal-photo3ideastudio.png",
      title: "Shoes",
    },
    {
      icon: "https://img.icons8.com/external-line-icons-royyan-wijaya/344/external-accesories-happy-new-year-everyone-line-line-icons-royyan-wijaya-2.png",
      title: "Accessories",
    },
  ];
  const categories = ["New In", "Sale", "Summer", "Winter", "Autumn" , "All Categories"];
  const [openNavbar, setOpenNavbar] = React.useState(false);
  const [openCategory, setOpenCategory] = React.useState("New In");

  return (
    <Box>
      <Paper
        elevation={2}
        sx={{
          minHeight: "79px",
          background: "white",
        }}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              height: { xs: "48px", md: "80px" },
              fontWeight: "100",
              fontSize: "21px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            APPWORLD - APPS
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              height: "79px",
              display: "flex",

              background: "",
            }}
          >
            <Box
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
              }}
            >
              <IconButton
                sx={{ margin: "0 21px" }}
                onClick={() => setOpenNavbar(!openNavbar)}
              >
                <MenuIcon />
              </IconButton>

              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Your Desired Products..."
                inputProps={{ "aria-label": "Search Your Desired Products..." }}
              />
              <IconButton sx={{ p: "10px" }} aria-label="search">
                <SearchIcon sx={{ marginTop: "3.5px" }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            sx={{
              height: "79px",
              background: "",
              display: {
                xs: "none",
                md: "flex",
              },
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <IconButton>
              <Badge badgeContent={""} variant="dot" color="primary">
                <RedeemIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={"2"} color="success">
                <ShoppingBasketOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={""} variant="dot" color="secondary">
                <FavoriteBorderOutlinedIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={""} variant="dot" color="primary">
                <AccountCircleOutlinedIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Paper>
      <Fade onCut={openNavbar} in={openNavbar} out={openNavbar}>
        <Box
          sx={{
            height: "87vh",
            // background: "#374B43",
            display: openNavbar ? "flex" : "none",
            // overflowY: "auto",
            // "::-webkit-scrollbar ": {
            //   width: "8px",
            // },
            // "::-webkitScrollbarTrack": {
            //   background: "#00A879",
            // },
            // "::-webkit-scrollbar-thumb": {
            //   background: "#00A879",
            // },
            // "::-webkit-scrollbar-thumb:hover": {
            //   background: "#555",
            // },
          }}
        >
          <Grid container>
            <Grid
              item
              xs={12}
              md={2}
              sx={{ minHeight: { xs: "auto", md: "85vh" }, background: "" }}
            >
              <Box
                sx={{
                  background: "",
                  display: {
                    md: "none",
                    xs: "flex",
                  },
                  margin: "8px 0",
                  width: "100%",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}
              >
                <IconButton>
                  <RedeemIcon />
                </IconButton>
                <IconButton>
                  <ShoppingBasketOutlinedIcon />
                </IconButton>
                <IconButton>
                  <FavoriteBorderOutlinedIcon />
                </IconButton>
                <IconButton>
                  <AccountCircleOutlinedIcon />
                </IconButton>
              </Box>
              <Box
                sx={{
                  height: "100%",
                  // background: "pink",
                }}
              >
                {categories.map((item, index) => {
                 if(item === "All Categories"){
                  return (
                    <MenuItem
                      onClick={() => {
                        setOpenCategory(item);
                      }}
                      key={index}
                      sx={{
                        padding: "21px",
                        background: openCategory === item ? "#386C5F" : "white",
                        color: openCategory === item ? "#eee" : "#111",
                        "&:hover": {
                          background: "#374B43",
                          color: "#111",
                        },
                      }}
                    >
                      {item}
                      <ChevronRightIcon sx={{ position:'absolute', right:'8px' }}/>
                    </MenuItem>
                  );
                 }else{
                  return (
                    <MenuItem
                      onClick={() => {
                        setOpenCategory(item);
                      }}
                      key={index}
                      sx={{
                        padding: "21px",
                        background: openCategory === item ? "#386C5F" : "white",
                        color: openCategory === item ? "#eee" : "#111",
                        "&:hover": {
                          background: "#374B43",
                          color: "#111",
                        },
                      }}
                    >
                      {item}
                    </MenuItem>
                  );
                 }
                })}
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={10}
              sx={{
                height: "86vh",
                background: "#386C5F",
                overflowY: "auto",
                "::-webkit-scrollbar ": {
                  width: "8px",
                },
                "::-webkitScrollbarTrack": {
                  background: "#00A879",
                },
                "::-webkit-scrollbar-thumb": {
                  background: "#00A879",
                },
                "::-webkit-scrollbar-thumb:hover": {
                  background: "#555",
                },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "65px",
                  background: "#00A879",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  padding: "8px",
                }}
              >
                <Typography
                  variant="p"
                  sx={{
                    color: `rgba(1,1,1,0.1)`,
                    fontSize: "12px",
                  }}
                >
                  SALE ENDS IN 28TH OF JULY 2022
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    color: `rgba(1,1,1,0.2)`,
                    fontSize: "12px",
                  }}
                >
                  SALE ENDS IN 28TH OF JULY 2022
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    color: `rgba(1,1,1,0.5)`,
                    fontWeight: "900",
                    fontSize: "12px",
                  }}
                >
                  SALE ENDS IN 28TH OF JULY 2022
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    color: `rgba(1,1,1,0.2)`,
                    fontSize: "12px",
                  }}
                >
                  SALE ENDS IN 28TH OF JULY 2022
                </Typography>
                <Typography
                  variant="p"
                  sx={{
                    color: `rgba(1,1,1,0.1)`,
                    fontSize: "12px",
                  }}
                >
                  SALE ENDS IN 28TH OF JULY 2022
                </Typography>
              </Box>
              <RenderDropDownContent openCategory={openCategory} data={data} />
            </Grid>
          </Grid>
        </Box>
      </Fade>
    </Box>
  );
};

export default Option10;
