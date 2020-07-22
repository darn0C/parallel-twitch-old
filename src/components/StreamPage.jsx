// IMPORT STATEMENTS

import React, {useState} from "react";
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";

// STREAM PAGE COMPONENT FUNCTION

function StreamPage(props) {

    // REACT STATE HOOKS

    const [currentChatInput, setCurrentChatInput] = useState(props.firstStream)

    // CUSTOM MATERIAL UI STYLING

    const useStyles = makeStyles(() => ({
        root: {
            height: "100vh",
            width: "100vw",
            backgroundColor: "#262626",
        },
        streamSection: {
            height: "100vh",
            width: "85vw",
        },
        streamContainer: {
            height: "50vh",
            width: "42.5vw",
            display: "inline-block",
            padding: "0"
        },
        chatSection: {
            height: "100vh",
            width: "15vw",
        },
        chatContainer: {
            height: "100vh",
            width: "15vw",
            display: "inline-block",
            padding: "0"
        },
        chatButton: {
            backgroundColor: "#6441a5",
            color: "#b9a3e3",
            height: "5vh",
            fontWeight: "900",
            fontSize: "11px",
            overflow: "hidden",
            "&:hover": {
                backgroundColor: "#b9a3e3",
                color: "#6441a5",
            }
        }
    }))

    // CUSTOM STYLING CLASS CALLING

    const classes = useStyles()

    // CHANGE CHAT RENDER FUNCTIONS
    // This is a simple function to handle the buttons
    // that change which chat are you currently at

    function handleFirstButton() {
        setCurrentChatInput(props.firstStream)
    }

    function handleSecondButton() {
        setCurrentChatInput(props.secondStream)
    }

    function handleThirdButton() {
        setCurrentChatInput(props.thirdStream)
    }

    function handleFourthButton() {
        setCurrentChatInput(props.fourthStream)
    }

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
                        width="85%"
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
                    <Grid container direction="column" justify="center" alignItems="center"
                          className={classes.chatSection}>
                        <div className={classes.chatContainer}>
                            <Button className={classes.chatButton} onClick={handleFirstButton}
                                    style={{width: "50%"}}>{props.firstStream}</Button>
                            <Button className={classes.chatButton} onClick={handleSecondButton}
                                    style={{width: "50%"}}>{props.secondStream}</Button>
                            <iframe
                                title="Chat window"
                                frameBorder="0"
                                scrolling="no"
                                id="chat_embed"
                                src={"https://www.twitch.tv/embed/" + currentChatInput + "/chat?parent=darn0c.github.io"}
                                height="95%"
                                width="100%">
                            </iframe>
                        </div>
                    </Grid>
                </Grid>
            )
        } else if (props.howManyStreams === 3) {
            return (
                <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
                    <CssBaseline/>
                    <Grid container direction="row" justify="center" alignItems="center"
                          className={classes.streamSection}>
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
                    <Grid container direction="column" justify="center" alignItems="center"
                          className={classes.chatSection}>
                        <div className={classes.chatContainer}>
                            <Button className={classes.chatButton} onClick={handleFirstButton}
                                    style={{width: "50%"}}>{props.firstStream}</Button>
                            <Button className={classes.chatButton} onClick={handleSecondButton}
                                    style={{width: "50%"}}>{props.secondStream}</Button>
                            <Button className={classes.chatButton} onClick={handleThirdButton}
                                    style={{width: "100%"}}>{props.thirdStream}</Button>
                            <iframe
                                title="Chat window"
                                frameBorder="0"
                                scrolling="no"
                                id="chat_embed"
                                src={"https://www.twitch.tv/embed/" + currentChatInput + "/chat?parent=darn0c.github.io"}
                                height="90%"
                                width="100%">
                            </iframe>
                        </div>
                    </Grid>
                </Grid>

            )
        } else if (props.howManyStreams === 4) {
            return (
                <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
                    <CssBaseline/>
                    <Grid container direction="row" justify="center" alignItems="center"
                          className={classes.streamSection}>
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
                    <Grid container direction="column" justify="center" alignItems="center"
                          className={classes.chatSection}>
                        <div className={classes.chatContainer}>
                            <Button className={classes.chatButton} onClick={handleFirstButton}
                                    style={{width: "50%"}}>{props.firstStream}</Button>
                            <Button className={classes.chatButton} onClick={handleSecondButton}
                                    style={{width: "50%"}}>{props.secondStream}</Button>
                            <Button className={classes.chatButton} onClick={handleThirdButton}
                                    style={{width: "50%"}}>{props.thirdStream}</Button>
                            <Button className={classes.chatButton} onClick={handleFourthButton}
                                    style={{width: "50%"}}>{props.fourthStream}</Button>
                            <iframe
                                title="Chat window"
                                frameBorder="0"
                                scrolling="no"
                                id="chat_embed"
                                src={"https://www.twitch.tv/embed/" + currentChatInput + "/chat?parent=darn0c.github.io"}
                                height="90%"
                                width="100%">
                            </iframe>
                        </div>
                    </Grid>
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