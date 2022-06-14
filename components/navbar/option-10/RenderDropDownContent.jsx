import React from "react";
import {
  Box,
  Grid,
  Fade,
  Stack,
  Typography,
  Badge,
  Divider,
  Avatar,
} from "@mui/material";
import Option10DropDownItem from "./Option10DropDownItem";
import ParticlesBg from "particles-bg";

const RenderDropDownContent = ({ openCategory, data }) => {
  const links = [ "Tommy Hilfiger", "Christian Dior", "Martin Mason Margiela", "Coco Chanel", "Micheal Amiri" ,"Nike Kicks", "Puma Jerseys", "Adidas Track Pants",];
  switch (openCategory) {
    case "New In":
      return (
        <Grid container>
          <Grid item xs={12} md={4} sx={{ transition: "3ms" }}>
            <Option10DropDownItem data={data} gender={"Children"} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Option10DropDownItem data={data} gender={"Female"} />
          </Grid>
          <Grid item xs={12} md={4}>
            <Option10DropDownItem data={data} gender={"Men"} />
          </Grid>
        </Grid>
      );
    case "Sale":
      return (
        <Grid container>
          <Grid
            item
            sx={{
              transition: "3ms",
              display: "flex",
              jusitfyContent: "space-evenly",
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            <ParticlesBg
              type="fountain"
              bg={{
                height: "100vh",
                width: "100%",
                opacity: "0.1",
              }}
            ></ParticlesBg>
            <Box
              sx={{
                width: "100%",
                height: "100vh",
                background: "",
                zIndex: "10000",
                position: "absolute",
                padding: "8px 0px",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "100",
                  fontSize: "32px",
                  padding: "0px 32px",
                  color: "#eee",
                }}
              >
                SALE
              </Typography>
              <Divider
                sx={{ width: "32px", background: "#eee", margin: "8px 32px" }}
              />
              <Grid container>
                {links.map((item) => {
                  return (
                    <Grid index={item} item xs={3} sx={{ padding: "28px" , textAlign:'center' }}>
                      {/* <img
                        src="https://images.pexels.com/photos/3905874/pexels-photo-3905874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        style={{
                          width: "100%",
                          objectFit: "contain",
                        }}
                      /> */}
                      <Avatar sx={{ width:'50%' , height:'112px' ,margin:'0px auto 16px' }} src="https://images.pexels.com/photos/3905874/pexels-photo-3905874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=" alt="HEelp Me" />
                      <Typography
                        variant="p"
                        sx={{
                          fontWeight: "100",
                          fontSize: "16px",
                          textAlign: "center",
                          color: "#eee",
                        }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            {/*  Third Row */}
          </Grid>
        </Grid>
      );
    case "Summer":
      return (
        <Grid container>
          <Grid
            item
            sx={{
              transition: "3ms",
              display: "flex",
              jusitfyContent: "space-evenly",
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            <ParticlesBg
              type="square"
              bg={{
                height: "100vh",
                width: "100%",
                opacity: "0.1",
              }}
            ></ParticlesBg>
            <Box
              sx={{
                width: "100%",
                height: "100vh",
                background: "",
                zIndex: "10000",
                position: "absolute",
                padding: "8px 0px",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "100",
                  fontSize: "32px",
                  padding: "0px 32px",
                  color: "#eee",
                }}
              >
                SUMMER
              </Typography>
              <Divider
                sx={{ width: "32px", background: "#eee", margin: "8px 32px" }}
              />
              <Grid container>
                {links.map((item) => {
                  return (
                    <Grid index={item} item xs={3} sx={{ padding: "28px" }}>
                      <img
                        src="https://images.pexels.com/photos/1022473/pexels-photo-1022473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        style={{
                          width: "100%",
                          objectFit: "contain",
                        }}
                      />
                      <Typography
                        variant="p"
                        sx={{
                          fontWeight: "100",
                          fontSize: "16px",
                          // textAlign: "center",
                          color: "#eee",
                        }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
            {/*  Third Row */}
          </Grid>
        </Grid>
      );
    case "Winter":
      return (
        <Grid container>
          <Grid
            item
            sx={{ transition: "3ms", display: "flex", position: "relative" }}
          >
            {" "}
            <ParticlesBg
              type="tadpole"
              bg={{
                height: "100vh",
                width: "100%",
                opacity: "0.1",
              }}
            ></ParticlesBg>
            <Box
              sx={{
                width: "100%",
                height: "100vh",
                background: "",
                zIndex: "10000",
                position: "absolute",
                padding: "8px 0px",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "100",
                  fontSize: "32px",
                  padding: "0px 32px",
                  color: "#eee",
                }}
              >
                WINTER
              </Typography>
              <Divider
                sx={{ width: "32px", background: "#eee", margin: "8px 32px" }}
              />
              <Grid container>
                {links.map((item) => {
                  return (
                    <Grid index={item} item xs={3} sx={{ padding: "28px" }}>
                      <img
                        src="https://images.pexels.com/photos/4048182/pexels-photo-4048182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        style={{
                          width: "100%",
                          objectFit: "contain",
                        }}
                      />
                      <Typography
                        variant="p"
                        sx={{
                          fontWeight: "100",
                          fontSize: "16px",
                          textAlign: "center",
                          color: "#eee",
                        }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      );
    case "Autumn":
      return (
        <Grid container>
          <Grid
            item
            sx={{
              transition: "3ms",
              display: "flex",
              jusitfyContent: "space-evenly",
              flexWrap: "wrap",
              position: "relative",
            }}
          >
            <ParticlesBg
              type="line"
              bg={{
                height: "100vh",
                width: "100%",
                opacity: "0.1",
              }}
            ></ParticlesBg>
            <Box
              sx={{
                width: "100%",
                height: "100vh",
                background: "",
                zIndex: "10000",
                position: "absolute",
                padding: "8px 0px",
              }}
            >
              <Typography
                variant="p"
                sx={{
                  fontWeight: "100",
                  fontSize: "32px",
                  padding: "0px 32px",
                  color: "#eee",
                }}
              >
                Autumn
              </Typography>
              <Divider
                sx={{ width: "32px", background: "#eee", margin: "8px 32px" }}
              />
              <Grid container>
                {links.map((item) => {
                  return (
                    <Grid index={item} item xs={3} sx={{ padding: "28px" }}>
                      <img
                        src="https://images.pexels.com/photos/3776557/pexels-photo-3776557.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt=""
                        style={{
                          width: "100%",
                          objectFit: "contain",
                        }}
                      />
                      <Typography
                        variant="p"
                        sx={{
                          fontWeight: "100",
                          fontSize: "16px",
                          textAlign: "center",
                          color: "#eee",
                        }}
                      >
                        {item}
                      </Typography>
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      );
    case "All Categories":
      return (
        <Grid container>
          <Grid item xs={12} md={4} sx={{ transition: "3ms", padding: "32px" , height:'fit-content' }}>
            <Stack>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "100",
                  fontSize: "32px",
                  color: "#eee",
                }}
              >
                Children
              </Typography>
              <Divider
                sx={{ width: "32px", background: "#eee", margin: "8px 0px" }}
              />
              {data.map((item, index) => {
                return (
                  <Typography
                    key={index}
                    variant="p"
                    sx={{
                        fontWeight: "100",
                        fontSize: "16px",
                        margin: "8px 0px",
                        width:'fit-content',
                        cursor:'pointer',
                        color: "#eee",
                        borderBottom:'1px solid transparent',
                        "&:hover":{
                            transition:'800ms',
                            transform:'translateX(12px)',
                            borderBottom:'1px solid #eee',
                      }
                    }}
                  >
                    {item.title}
                  </Typography>
                );
              })}
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} sx={{ transition: "3ms", padding: "32px" , height:'fit-content' }}>
            <Stack>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "100",
                  fontSize: "32px",
                  color: "#eee",
                }}
              >
                Women
              </Typography>
              <Divider
                sx={{ width: "32px", background: "#eee", margin: "8px 0px" }}
              />
              {data.map((item, index) => {
                return (
                  <Typography
                    key={index}
                    variant="p"
                    sx={{
                        fontWeight: "100",
                        fontSize: "16px",
                        margin: "8px 0px",
                        width:'fit-content',
                        cursor:'pointer',
                        color: "#eee",
                        borderBottom:'1px solid transparent',
                        "&:hover":{
                            transition:'800ms',
                            transform:'translateX(12px)',
                            borderBottom:'1px solid #eee',
                      }
                    }}
                  >
                    {item.title}
                  </Typography>
                );
              })}
            </Stack>
          </Grid>
          <Grid item xs={12} md={4} sx={{ transition: "3ms", padding: "32px" , height:'fit-content' }}>
            <Stack>
              <Typography
                variant="p"
                sx={{
                  fontWeight: "300",
                  fontSize: "32px",
                  color: "#eee",
                }}
              >
                Men
              </Typography>
              <Divider
                sx={{ width: "32px", background: "#eee", margin: "8px 0px" }}
              />
              {data.map((item, index) => {
                return (
                  <Typography
                    key={index}
                    variant="p"
                    sx={{
                      fontWeight: "100",
                      fontSize: "16px",
                      margin: "8px 0px",
                      width:'fit-content',
                      cursor:'pointer',
                      color: "#eee",
                      borderBottom:'1px solid transparent',
                      "&:hover":{
                          transition:'800ms',
                          transform:'translateX(12px)',
                          borderBottom:'1px solid #eee',
                      }
                    }}
                  >
                    {item.title}
                  </Typography>
                );
              })}

            </Stack>
          </Grid>
          <Box sx={{
              display:'flex',
              width:'100%',
              justifyContent:'space-evenly',
          }}>

              <Box sx={{
                  backgroundImage:"url(https://www.activefm.co.za/ads/ad-5.gif)",
                  backgroundSize:'contain',
                  width:'45%',
                  height:'130px',
              }}>

              </Box>
              <Divider orientation={"vertical"} />
              <Box sx={{
                  backgroundImage:"url(https://www.activefm.co.za/ads/ad-1.jpeg                  )",
                  backgroundSize:'contain',
                  width:'45%',
                  height:'130px',
              }}>

              </Box>
          </Box>
        </Grid>
      );
    default:
      return (
        <Grid container>
          <Grid item> Default</Grid>
        </Grid>
      );
  }
};
export default RenderDropDownContent;
