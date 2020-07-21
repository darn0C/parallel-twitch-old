// IMPORT STATEMENTS

import React from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";

// MAIN COMPONENT FUNCTION

function StreamPage(props) {

    // CUSTOM MATERIAL UI STYLING

    const useStyles = makeStyles(() => ({
        root: {
            height: "100vh",
            width: "100vw",
            backgroundColor: "#262626",
        },
        streamContainer: {
            height: "50vh",
            width: "40vw",
            display: "inline-block",
            padding: "0"
        },
        chatContainer: {
            height: "100vh",
            width: "20vw",
            display: "inline-block",
            padding: "0"
        },
        chatButton: {
            backgroundColor: "#6441a5",
            color: "#b9a3e3",
        }
    }))

    // CUSTOM STYLING CLASS CALLING

    const classes = useStyles()

    // RENDER STREAMS FUNCTION
    // With the number of streams for rendering passed as a prop, this function
    // renders the corresponding number of stream components depending of
    // how many streams the user has set.

    function renderStreams() {
        if (props.howManyStreams === 1) {
            return (
                <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
                    <CssBaseline/>
                    <iframe
                        title="First stream"
                        src={"https://player.twitch.tv/?channel=" + props.firstStream + "&parent=darn0c.github.io"}
                        height="100%"
                        width="80%"
                        frameBorder="0"
                        scrolling="no"
                        allowFullScreen="true">
                    </iframe>
                    <div className={classes.chatContainer}>
                        <iframe
                            title="Chat window"
                            frameBorder="0"
                            scrolling="no"
                            id="chat_embed"
                            src={"https://www.twitch.tv/embed/" + props.firstStream + "/chat?parent=darn0c.github.io"}
                            height="100%"
                            width="100%">
                        </iframe>
                    </div>
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

    // RETURN STATEMENT
    // This is just a div for calling the function, the renderStream function
    // makes all the work.

    return (
        <div>
            {renderStreams()}
        </div>
    )

}

// EXPORT STATEMENT

export default StreamPage