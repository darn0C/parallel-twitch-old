import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from '@material-ui/icons/Add';

function StreamPage() {

    const useStyles = makeStyles((theme) => ({
        root: {
            height: "100vh",
            backgroundColor: "gray",
        },
        firstUpperSection: {
            width: "50%",
            height: "50%",
            display: "flex",
            backgroundColor: "#262626",
        },
        secondUpperSection: {
            width: "50%",
            height: "50%",
            display: "flex",
            backgroundColor: "white"
        },
        firstBottomSection: {
            width: "50%",
            height: "50%",
            display: "flex",
            backgroundColor: "white"
        },
        secondBottomSection: {
            width: "50%",
            height: "50%",
            display: "flex",
            backgroundColor: "#262626",
        },
        addButton: {
            backgroundColor: "#6441a5",
            color: "#b9a3e3",
            "&:hover": {
                backgroundColor: "#b9a3e3",
                color: "#6441a5"
            }
        },

    }))

    const classes = useStyles()

    return (
        <Grid container direction="row" className={classes.root}>
            <CssBaseline/>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.firstUpperSection}>
                <IconButton className={classes.addButton}>
                    <AddIcon/>
                </IconButton>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.secondUpperSection}>
                <IconButton className={classes.addButton}>
                    <AddIcon/>
                </IconButton>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.firstBottomSection}>
                <IconButton className={classes.addButton}>
                    <AddIcon/>
                </IconButton>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.secondBottomSection}>
                <IconButton className={classes.addButton}>
                    <AddIcon/>
                </IconButton>
            </Grid>
            <iframe
                src="https://player.twitch.tv/?channel=coscu&parent=localhost:3000"
                height="50%"
                width="50%"
                frameBorder="0"
                scrolling="no"
                allowFullScreen="true">
            </iframe>
        </Grid>
    )

}

export default StreamPage