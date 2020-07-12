// IMPORT STATEMENTS

import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// TUTORIAL SECTION COMPONENT FUNCTION

function TutorialSection() {

    // CUSTOM MATERIAL UI STYLING

    const useStyles = makeStyles((theme) => ({

        root: {
            height: "100vh",
            textAlign: "center",
            alignItems: "center"
        },
        disclaimer: {
            width: "35vw",
            color: "#b9a3e3",
            fontSize: "1rem",
        },
        guideStep: {
            color: "#6441a5",
            fontSize: "1.5rem"
        },
        guideStepContent: {
            color: "#b9a3e3",
            fontSize: "1rem",
            width: "50vw",
            marginTop: theme.spacing(2)
        }

    }))

    // MATERIAL UI CLASS CALLING

    const classes = useStyles()

    // RETURN STATEMENT

    return (

        <div>

            {/*ROOT COMPONENT*/}

            <Grid container direction="column" justify="space-evenly" alignItems="center" className={classes.root}>

                {/*DISCLAIMER*/}

                <Typography component="h1" variant="h4" className={classes.disclaimer}>
                    Hello, this is a web app built by Conrado Remon for educational purposes and not for commercial use,
                    however, you are able to use it if you want and you can access the source code in my GitHub.
                </Typography>

                {/*FIRST TUTORIAL STEP*/}

                <Typography component="h1" variant="h3" className={classes.guideStep}>
                    1. Search the streams you want to watch
                    <Typography component="h1" variant="h6" className={classes.guideStepContent}>
                        Let's say you want to watch both Caps and Faker at the same time, but they are not group
                        streaming.
                    </Typography>
                </Typography>

                {/*SECOND TUTORIAL STEP*/}

                <Typography component="h1" variant="h3" className={classes.guideStep}>
                    2. Copy to your clipboard their Twitch names
                    <Typography component="h1" variant="h6" className={classes.guideStepContent}>
                        For example, if you want to watch Caps, writing or copying the "caps" part will suffice.<br/>
                        <strong>twitch.tv/caps</strong>
                    </Typography>
                </Typography>

                {/*THIRD TUTORIAL STEP*/}

                <Typography component="h1" variant="h3" className={classes.guideStep}>
                    3. Paste it into the stream input
                    <Typography component="h1" variant="h6" className={classes.guideStepContent}>
                        Once you have the twitch streamer name, click the button to open the input and paste it in
                        there, click "SET", then you can close it.
                    </Typography>
                </Typography>

                {/*FOURTH TUTORIAL STEP*/}

                <Typography component="h1" variant="h3" className={classes.guideStep}>
                    4. Initiate the streams
                    <Typography component="h1" variant="h6" className={classes.guideStepContent}>
                        Once you have all the streams set, click the "STREAM" button to start watching.
                    </Typography>
                </Typography>
            </Grid>
        </div>

    )

}

// EXPORT STATEMENT

export default TutorialSection