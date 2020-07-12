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
            margin: "0",
            padding: "0"
        }
    }))

    const classes = useStyles()

    function renderStreams() {
        if (props.howManyStreams === 1) {
            return (
                <iframe
                    title="First stream"
                    src={"https://player.twitch.tv/?channel=" + props.firstStream + "&parent=darn0c.github.io"}
                    height="100%"
                    width="100%"
                    frameBorder="0"
                    scrolling="no"
                    allowFullScreen="true">
                </iframe>
            )
        } else if (props.howManyStreams === 2) {
            return (
                <div>
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
                </div>
            )
        } else if (props.howManyStreams === 3) {
            return (
                <div>
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
                </div>
            )
        } else if (props.howManyStreams === 4) {
            return (
                <div>
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
                </div>
            )
        }
    }

    return (
        <Grid container direction="row" justify="center"
              alignItems="center" className={classes.root}>
            <CssBaseline/>
            {renderStreams()}
        </Grid>
    )

}

export default StreamPage