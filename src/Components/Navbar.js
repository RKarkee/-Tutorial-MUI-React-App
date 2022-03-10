import {
  alpha,
  AppBar,
  Avatar,
  Badge,
  InputBase,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { Cancel, Mail, Notifications, Search } from "@material-ui/icons";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  // appbar:{
  //   position:"sticky",
  //   top:0,
  // },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
    position:"sticky",
    top:0,
    
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "flex",
    alignItems: "center",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    borderRadius: theme.shape.borderRadius,
    width: "50%",
    [theme.breakpoints.down("sm")]: {
      display: (props)=>(props.open?"flex":"none"),
    },
  },
  input: {
    color: "white",
    width:"100%",
    marginLeft: theme.spacing(1),
  },
  searchIcon: {
    padding: theme.spacing(0, 1),
  },
  icons:{
    // display:"flex",
    // padding:theme.spacing(0,2),
    alignItems:"center",
    display:(props)=>(props.open? "none":"flex"),
  },
  searchButton:{
    // display:"none",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  badge:{
    marginRight:theme.spacing(1),
  },
  cancel:{
    [theme.breakpoints.up("sm")]:{
      display:"none",
    }
  }
}));

function Navbar() {
  const [open,setOpen]=useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolBar}>
        <Typography variant="h6" className={classes.logoLg}>
          MANISH KARKI
        </Typography>
        <Typography variant="h6" className={classes.logoSm}>
          MANISH
        </Typography>
        <div className={classes.search}>
          <Search className={classes.searchIcon} />
          <InputBase placeholder="Search" className={classes.input} />
          <Cancel className={classes.cancel} onClick={()=>setOpen(false)} />
        </div>
        <div className={classes.icons}>
          <Search className={classes.searchButton} onClick={()=>setOpen(true)}/>
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
            <Mail/>
          </Badge>
          <Badge badgeContent={4} color="secondary" className={classes.badge}>
          <Notifications />
          </Badge>
          <Avatar alt="User Profile" src="../mega.jpg" />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
