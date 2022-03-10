import { Avatar, Container, makeStyles, Typography } from "@material-ui/core";
import { AvatarGroup } from "@material-ui/lab";
import { styled } from "@material-ui/core";
import { Badge } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
  title:{
    fontSize:18,
    fontWeight:500,
    color:"#555"
  }
}));

// const StyledBadge = styled(Badge)(({ theme }) => ({
//   "& .MuiBadge-badge": {
//     backgroundColor: "#44b700",
//     color: "#44b700",
//     boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
//     "&::after": {
//       position: "absolute",
//       top: 0,
//       left: 0,
//       width: "100%",
//       height: "100%",
//       borderRadius: "50%",
//       animation: "ripple 1.2s infinite ease-in-out",
//       border: "1px solid currentColor",
//       content: '""',
//     },
//   },
//   "@keyframes ripple": {
//     "0%": {
//       transform: "scale(.8)",
//       opacity: 1,
//     },
//     "100%": {
//       transform: "scale(2.4)",
//       opacity: 0,
//     },
//   },
// }));

function Rightbar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <Typography className={classes.title} gutterBottom>
        Online Friends
      </Typography>
      <AvatarGroup total={24}  spacing={2}>
        {/* <StyledBadge
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
    </Container>
  );
}

export default Rightbar;
