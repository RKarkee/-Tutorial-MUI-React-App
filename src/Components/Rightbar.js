import {
  Avatar,
  Container,
  Divider,
  ImageList,
  ImageListItem,
  Link,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
// import { styled } from "@material-ui/core";
// import { Badge } from "@material-ui/core";
// import { withStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  title: {
    fontSize: 16,
    fontWeight: 500,
    color: "#555",
    marginBottom: theme.spacing(1),
    marginTop:theme.spacing(1)
  },
  imageList: {
    marginBottom: 20,
  },
  link:{
    fontSize:18,
    fontWeight:400,
    color:"#555",
    // marginBottom:10
    marginRight:theme.spacing(2)
  }
}));

// const StyledBadge = withStyles((theme) => ({
//   badge: {
//     backgroundColor: '#44b700',
//     color: '#44b700',
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     '&::after': {
//       position: 'absolute',
//       top: 0,
//       left: 0,
//       width: '100%',
//       height: '100%',
//       borderRadius: '50%',
//       animation: '$ripple 1.2s infinite ease-in-out',
//       border: '1px solid currentColor',
//       content: '""',
//     },
//   },
//   '@keyframes ripple': {
//     '0%': {
//       transform: 'scale(.8)',
//       opacity: 1,
//     },
//     '100%': {
//       transform: 'scale(2.4)',
//       opacity: 0,
//     },
//   },
// }))(Badge);

function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup total={24} style={{ marginBottom: 10 }}>
        {/* 
        <StyledBadge
          overlap="circular"
          anchorOrigin = {{ vertical: "bottom", horizontal: "right" }}
          variant="dot"
          > */}
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        {/* </StyledBadge> */}

        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/6.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/7.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/8.jpg"
        />
      </AvatarGroup>
      <Typography className={classes.title} gutterBottom>
        Gallery
      </Typography>
      <ImageList rowHeight={160} className={classes.imageList} cols={2}>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/breakfast.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/burgers.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/camera.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/olive.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/mushroom.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/vegetables.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/morning.jpg"
            alt=""
          />
        </ImageListItem>
        <ImageListItem>
          <img
            src="https://v4.mui.com/static/images/image-list/bike.jpg"
            alt=""
          />
        </ImageListItem>
      </ImageList>
      <Typography className={classes.title} gutterBottom>
        Catogories
      </Typography>
      <Link href="#" variant="body2" className={classes.link}>Sports</Link>
      <Link href="#" variant="body2" className={classes.link}>Movies</Link>
      <Link href="#" variant="body2" className={classes.link}>Food</Link>
      <Divider flexItem style={{marginBottom:10}}/>
      <Link href="#" variant="body2" className={classes.link}>Job</Link>
      <Link href="#" variant="body2" className={classes.link}>Advertismentk</Link>
      <Link href="#" variant="body2" className={classes.link}>LinkedIn</Link>
      <Divider flexItem style={{marginBottom:10}}/>
      <Link href="#" variant="body2" className={classes.link}>Gmail</Link>
      <Link href="#" variant="body2" className={classes.link}>Twitter</Link>
      <Link href="#" variant="body2" className={classes.link}>Youtube</Link>
    </Container>
  );
}

export default Rightbar;
