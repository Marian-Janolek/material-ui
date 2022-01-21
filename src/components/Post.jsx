import { makeStyles } from '@material-ui/core';
import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  Button,
  CardActions,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  media: {
    height: '250px',
    [theme.breakpoints.down('sm')]: {
      height: '150px',
    },
  },
  card: {
    marginBottom: theme.spacing(5),
  },
}));

const Post = () => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.pexels.com/photos/7319337/pexels-photo-7319337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          title="My Post"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            My First Post
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque,
            tenetur velit? Ad excepturi maxime voluptatum voluptates error
            explicabo porro temporibus quidem mollitia in adipisci optio cum
            dolore dolorum deleniti hic culpa alias neque magni, suscipit
            repellendus voluptatibus aliquam! Nihil, hic.
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
};

export default Post;
