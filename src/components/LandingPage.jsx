// IMPORT STATEMENTS

import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import TutorialSection from "./TutorialSection"
import InputSection from "./InputSection";

// LANDING PAGE COMPONENT FUNCTION

function LandingPage() {

    // CUSTOM MATERIAL UI STYLING

    const useStyles = makeStyles(() => ({
        root: {
            height: "100vh",
            backgroundColor: "#262626",
        }
    }))

    // MATERIAL UI CLASS CALLING

    const classes = useStyles()

    // RETURN STATEMENT

    return (

        <div>

            {/*ROOT COMPONENT*/}

            <Grid container direction="column" justify="space-evenly" alignItems="center" className={classes.root}>
                <CssBaseline/>

                {/*RENDER TUTORIAL COMPONENT*/}

                <TutorialSection/>

                {/*RENDER INPUT COMPONENT*/}

                <InputSection/>
            </Grid>
        </div>
    )

}

// EXPORT STATEMENT

export default LandingPage