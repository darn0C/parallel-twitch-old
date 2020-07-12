import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";

function StreamPage(props) {

    const useStyles = makeStyles(() => ({
        root: {
            height: "100vh",
            width: "100vw",
            backgroundColor: "#262626",
        },
        streamContainer: {
            height: "50vh",
            width: "50vw",
            display: "inline-block",
            padding: "0"
        }
    }))

    const classes = useStyles()

    function renderStreams() {
        if (props.howManyStreams === 1) {
            return (
                <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
                    <CssBaseline/>
                    <iframe
                        title="First stream"
                        src={"https://player.twitch.tv/?channel=" + props.firstStream + "&parent=darn0c.github.io"}
                        height="100%"
                        width="100%"
                        frameBorder="0"
                        scrolling="no"
                        allowFullScreen="true">
                    </iframe>
                </Grid>
            )
        } else if (props.howManyStreams === 2) {
            return (
                <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
                    <CssBaseline/>
                    <div className={classes.streamContainer}>
                        <iframe
                            title="First stream"
                            src={"https://player.twitch.tv/?channel=" + props.firstStream + "&parent=darn0c.github.io"}
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true">
                        </iframe>
                    </div>
                    <div className={classes.streamContainer}>
                        <iframe
                            title="Second stream"
                            src={"https://player.twitch.tv/?channel=" + props.secondStream + "&parent=darn0c.github.io"}
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true">
                        </iframe>
                    </div>
                </Grid>
            )
        } else if (props.howManyStreams === 3) {
            return (
                <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
                    <CssBaseline/>
                    <div className={classes.streamContainer}>
                        <iframe
                            title="First stream"
                            src={"https://player.twitch.tv/?channel=" + props.firstStream + "&parent=darn0c.github.io"}
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true">
                        </iframe>
                    </div>
                    <div className={classes.streamContainer}>
                        <iframe
                            title="Second stream"
                            src={"https://player.twitch.tv/?channel=" + props.secondStream + "&parent=darn0c.github.io"}
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true">
                        </iframe>
                    </div>
                    <div className={classes.streamContainer}>
                        <iframe
                            title="Third stream"
                            src={"https://player.twitch.tv/?channel=" + props.thirdStream + "&parent=darn0c.github.io"}
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true">
                        </iframe>
                    </div>
                </Grid>

            )
        } else if (props.howManyStreams === 4) {
            return (
                <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
                    <CssBaseline/>
                    <div className={classes.streamContainer}>
                        <iframe
                            title="First stream"
                            src={"https://player.twitch.tv/?channel=" + props.firstStream + "&parent=darn0c.github.io"}
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true">
                        </iframe>
                    </div>
                    <div className={classes.streamContainer}>
                        <iframe
                            title="Second stream"
                            src={"https://player.twitch.tv/?channel=" + props.secondStream + "&parent=darn0c.github.io"}
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true">
                        </iframe>
                    </div>
                    <div className={classes.streamContainer}>
                        <iframe
                            title="Third stream"
                            src={"https://player.twitch.tv/?channel=" + props.thirdStream + "&parent=darn0c.github.io"}
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true">
                        </iframe>
                    </div>
                    <div className={classes.streamContainer}>
                        <iframe
                            title="Fourth stream"
                            src={"https://player.twitch.tv/?channel=" + props.fourthStream + "&parent=darn0c.github.io"}
                            height="100%"
                            width="100%"
                            frameBorder="0"
                            scrolling="no"
                            allowFullScreen="true">
                        </iframe>
                    </div>
                </Grid>
            )
        }
    }

    return (
        <div>
            {renderStreams()}
        </div>
    )

}

export default StreamPage