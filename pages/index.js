import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div style={{ width:"100%" , height:'100vh' , display:'flex' , alignItems:'center' , flexDirection:'column', justifyContent:'center'}}>
    <img height={"250px"} src="https://img.icons8.com/color/344/worker-with-roadblock.png" alt="" />
      <Typography fontSize={"32px"} fontWeight={"600"}>Website Under Construction</Typography>
      <Typography color={"#222"}>We will be up and running soon.</Typography>
    </div>
  );
}
