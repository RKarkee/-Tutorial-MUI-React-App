import { Grid, makeStyles } from "@material-ui/core";
import Rightbar from "./Components/Rightbar"
import Feed from "./Components/Feed";
import Leftbar from "./Components/Leftbar";
import Navbar from "./Components/Navbar";
import Addpost from "./Components/Addpost";


const useStyles = makeStyles((theme)=>({
  rightbar:{
    [theme.breakpoints.down("sm")]:{
      display:"none"
    }
    
  }
}))
function App() {
  const classes = useStyles()
  return (
    <div>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
        <Leftbar />
        </Grid>
        <Grid item sm={7} xs={10}>
        <Feed />
        </Grid>
        <Grid item sm={3} className={classes.rightbar}>
        <Rightbar />
        </Grid>
        </Grid>
        <Addpost/>

    </div>
  );
}

export default App;
