import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import TutorialSection from "./TutorialSection"
import InputSection from "./InputSection";

function LandingPage() {

    const useStyles = makeStyles(() => ({
        root: {
            height: "100vh",
            backgroundColor: "#262626",
        }
    }))

    const classes = useStyles()

    return (

        <div>
            <Grid container direction="column" justify="space-evenly" alignItems="center" className={classes.root}>
                <CssBaseline/>
                <TutorialSection/>
                <InputSection/>
            </Grid>
        </div>
    )

}

export default LandingPage