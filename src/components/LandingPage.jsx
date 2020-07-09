import React from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";

function LandingPage() {

    const useStyles = makeStyles((theme) => ({
        root: {
            height: "100vh",
            backgroundColor: "#262626",
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
        },
        guideStepImage: {
            display: "block",
            marginTop: theme.spacing(1),
            margin: "auto auto"
        }
    }))

    const classes = useStyles()

    return (

        <div>
            <Grid container direction="column" justify="space-evenly" alignItems="center" className={classes.root}>
                <CssBaseline/>
                <Typography component="h1" variant="h4" className={classes.disclaimer}>
                    Hello, this is a web app built by Conrado Remon for educational purposes and not for commercial use,
                    however, you are able to use it if you want and you can access the source code in my GitHub.
                </Typography>
                <Typography component="h1" variant="h3" className={classes.guideStep}>
                    1. Search the streams you want to watch
                    <Typography component="h1" variant="h6" className={classes.guideStepContent}>
                        Let's say you want to watch both Caps and Faker at the same time, but they are not group
                        streaming.
                    </Typography>
                </Typography>
                <Typography component="h1" variant="h3" className={classes.guideStep}>
                    2. Copy to your clipboard their Twitch names
                    <Typography component="h1" variant="h6" className={classes.guideStepContent}>
                        For example, if you want to watch Caps, copying the "caps" part will suffice.<br/>
                        <strong>twitch.tv/caps</strong>
                    </Typography>
                </Typography>
                <Typography component="h1" variant="h3" className={classes.guideStep}>
                    3. Paste it into the stream input
                    <Typography component="h1" variant="h6" className={classes.guideStepContent}>
                        Once you have the twitch streamer name, click the button to open the input and paste it in
                        there.
                    </Typography>
                </Typography>
            </Grid>
        </div>

    )

}

export default LandingPage