import {
  Fab,
  makeStyles,
  Tooltip,
  Modal,
  Container,
  TextField,
  MenuItem,
} from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
  },
  container: {
    width: '500px',
    height: '550px',
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: 'auto',
    [theme.breakpoints.down('sm')]: {
      width: '100vw',
      height: '100vh',
    },
  },
}));

const Add = () => {
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  return (
    <>
      <Tooltip title="Add" aria-label="add">
        <Fab
          color="primary"
          className={classes.fab}
          onClick={() => setOpen(true)}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form}>
            <div className={classes.item}>
              <TextField
                id="standard-basic"
                label="Title"
                size="small"
                style={{ width: '100%' }}
              />
            </div>
            <div className={classes.item}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Tell your story"
                variant="outlined"
                label="Description"
                size="small"
                style={{ width: '100%' }}
              />
            </div>
            <div className={classes.item}>
              <TextField select label="Visibility" value="Public">
                <MenuItem value="Public">Public</MenuItem>
                <MenuItem value="Private">Private</MenuItem>
                <MenuItem value="Unlisted">Unlisted</MenuItem>
              </TextField>
            </div>
          </form>
        </Container>
      </Modal>
    </>
  );
};

export default Add;
