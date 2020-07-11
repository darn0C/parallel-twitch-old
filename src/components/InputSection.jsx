import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";

function InputSection() {

    const useStyles = makeStyles((theme) => ({
        root: {
            height: "100vh",
            width: "25vw"
        },
        streamInputHeader: {
            color: "#b9a3e3"
        },
        addStreamIcon: {
            backgroundColor: "#6441a5",
            color: "#b9a3e3",
            "&:hover": {
                backgroundColor: "#b9a3e3",
                color: "#6441a5"
            }
        }
    }))

    const classes = useStyles()

    return (
        <Grid container direction="column" justify="space-evenly" alignItems="center" className={classes.root}>
            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                First Stream
            </Typography>
            <IconButton className={classes.addStreamIcon}>
                <AddIcon/>
            </IconButton>
            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                Second Stream
            </Typography>
            <IconButton className={classes.addStreamIcon}>
                <AddIcon/>
            </IconButton>
            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                Third Stream
            </Typography>
            <IconButton className={classes.addStreamIcon}>
                <AddIcon/>
            </IconButton>
            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                Fourth Stream
            </Typography>
            <IconButton className={classes.addStreamIcon}>
                <AddIcon/>
            </IconButton>
        </Grid>
    )

}

export default InputSection