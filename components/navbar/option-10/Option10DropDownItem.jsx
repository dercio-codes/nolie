import {
  Box,
  Grid,
  Fade,
  Grow,
  Typography,
  Badge,
  Button,
  Paper,
  Divider,
} from "@mui/material";
import CheckroomIcon from "@mui/icons-material/Checkroom";

const Option10DropDownItem = ({ data , image, gender }) => {
  console.log(data)
  const color = "#386C5F";

    return (
      <Grid container>
        <Grid
          item
          xs={12}
          sx={{
            height: "100%",
            transition: "800ms",
            color: "#eee",
            textAlign: "center",
                    borderLeft:'0.1rem solid #eee',
                    padding: "9px 0px",
            background:color,
            "&:hover": {
              background:"#00A879",
              color: "#eee",
            },
          }}
        >
          <Typography
            variant="p"
            sx={{
              fontWeight: "100",
              fontSize: "28px",
              margin: "21px 0px",
              textAlign: "center",
            }}
          >
            {gender}
          </Typography>
          <Divider sx={{ width:'32px' , background:"#eee" , margin:'8px auto 0px' }}/>
          <Grid container>
            {data.map((item, index) => {
              console.log(item)
              return (
                <Grid
                  key={item}
                  item
                  xs={6}
                  sx={{
                    height: "148px",
                    padding: {
                      xs: "0px",
                    },
                    transform: "scale(0.7)",
                    transition: "800ms",
                    filter: "blur(0.5px)",
                    "&:hover": {
                      transition: "800ms",
                      transform: "scale(0.75)",
                    },
                  }}
                >
                  <Button
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <Paper
                      elevation={3}
                      sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        alignItems: "center",
                        width: "100%",
                        "&:hover": {
                          transform: "rotateY(360deg)",
                        },
                      }}
                    >
                      <img src={item.icon} style={{ width:'50px' , height:'50p' }} alt="" />
                      <Typography fontSize={"18px"}>{item.title}</Typography>
                    </Paper>
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    );
  };

  export default Option10DropDownItem ;