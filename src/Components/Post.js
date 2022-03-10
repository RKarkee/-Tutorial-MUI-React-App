import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  card: {
    // maxWidth: 500,
    marginBottom: theme.spacing(5),
  },
  media: {
    height: 250,
    [theme.breakpoints.down("sm")]:{
        height:150,
    }
  },
  cardcontent: {
    //   margin:theme.spacing(1),
    //   padding:theme.spacing(1)
  },
//   typopgraphy: {
//     marginBottom: theme.spacing(2),
//   },
}));
function Post() {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://media.istockphoto.com/photos/hand-flip-wooden-cube-with-word-change-to-chance-personal-development-picture-id871196052?s=612x612"
          title="Contemplative Reptile"
        />

        <CardContent className={classes.cardcontent}>
          <Typography className={classes.typopgraphy} gutterBottom variant="h5">
            My Blog Post
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            dolor perspiciatis deserunt ex, explicabo libero odit alias officia
            maxime omnis voluptates consequuntur unde velit earum! Optio
            doloribus autem totam porro. Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Autem, nulla ratione necessitatibus sapiente error
            veniam nemo? Odio ipsa consectetur, molestiae provident nulla in
            quasi iste velit! Reiciendis autem optio tenetur.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default Post;
