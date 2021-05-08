import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Fab, makeStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';

const FormDialog = ({ onSubmit }) => {
    const [open, setOpen] = React.useState(false);
    const [note, setNote] = useState({
        title: '',
        description: ''
    })
    const classes = useStyles();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const submitHandler = () => {
        onSubmit(note.title, note.description);
        setOpen(false);
    }

    return (
        <div className={classes.fab}>
            <Fab style={{ background: '#fff' }} aria-label="add" onClick={handleClickOpen}>
                <AddIcon />
            </Fab>
            <Dialog maxWidth='sm' fullWidth={true} open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add a Note</DialogTitle>
                <DialogContent>
                    <TextField
                        onChange={(e) => setNote({ ...note, title: e.target.value })}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Enter text"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        onChange={(e) => setNote({ ...note, description: e.target.value })}
                        multiline
                        rows='4'
                        margin="dense"
                        id="name"
                        label="Enter text"
                        type="text"
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="green">
                        Cancel
                    </Button>
                    <Button onClick={submitHandler} color="primary">
                        Add
                    </Button>
                </DialogActions>
            </Dialog>
        </div >
    );
}

const useStyles = makeStyles({
    fab: {
        position: 'fixed',
        bottom: '3rem',
        right: '3rem'
    }
});

export default FormDialog;