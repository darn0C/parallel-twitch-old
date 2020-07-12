// IMPORT STATEMENTS

import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Popper from "@material-ui/core/Popper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// INPUT SECTION COMPONENT FUNCTION

function InputSection() {

    // REACT STATE HOOKS

    // FIRST INPUT MENU STATE AND PLACEMENT

    const [isFirstMenuOpen, setIsFirstMenuOpen] = useState(false);
    const [firstMenuAnchorEl, setFirstMenuAnchorEl] = useState(false);

    // FIRST INPUT TRACKING AND LOCKING

    const [firstStreamInput, setFirstStreamInput] = useState("");
    const [isFirstStreamReady, setIsFirstStreamReady] = useState(false);

    // SECOND INPUT MENU STATE AND PLACEMENT

    const [isSecondMenuOpen, setIsSecondMenuOpen] = useState(false);
    const [secondMenuAnchorEl, setSecondMenuAnchorEl] = useState(false);

    // SECOND INPUT TRACKING AND LOCKING

    const [secondStreamInput, setSecondStreamInput] = useState("");
    const [isSecondStreamReady, setIsSecondStreamReady] = useState(false);

    // THIRD INPUT MENU STATE AND PLACEMENT

    const [isThirdMenuOpen, setIsThirdMenuOpen] = useState(false);
    const [thirdMenuAnchorEl, setThirdMenuAnchorEl] = useState(false);

    // THIRD INPUT TRACKING AND LOCKING

    const [thirdStreamInput, setThirdStreamInput] = useState("");
    const [isThirdStreamReady, setIsThirdStreamReady] = useState(false);

    // FOURTH INPUT MENU STATE AND PLACEMENT

    const [isFourthMenuOpen, setIsFourthMenuOpen] = useState(false);
    const [fourthMenuAnchorEl, setFourthMenuAnchorEl] = useState(false);

    // FOURTH INPUT TRACKING AND LOCKING

    const [fourthStreamInput, setFourthStreamInput] = useState("");
    const [isFourthStreamReady, setIsFourthStreamReady] = useState(false);

    // LOCKED STREAMS COUNTER FOR POSTERIOR RENDERING

    let [streamCount, setStreamCount] = useState(0);

    // OPEN FIRST MENU FUNCTION
    // This is for handling all the buttons that open menus, keeping track
    // of their state and being able to show corresponding icons.

    function openFirstMenu(event) {
        setIsFirstMenuOpen(!isFirstMenuOpen)
        setFirstMenuAnchorEl(event.currentTarget)
    }

    // HANDLE FIRST MENU INPUT FUNCTION
    // This if for keeping track of the value the user inputs and then
    // render it's corresponding stream.

    function handleFirstStreamInput(event) {
        setFirstStreamInput(event.target.value)
    }

    // LOCK FIRST STREAM INPUT FUNCTION
    // This is used for locking the input once the user has set the
    // name of the streamer, adding it to the stream counter, and
    // for easier handling of how many streams have to render.
    // If the user tries to input nothing, it shows an alert
    // saying that's not possible, making the user not able
    // to manipulate and break the stream counter.

    function lockFirstStream() {
        if (firstStreamInput.length === 0) {
            alert("You have to input something before you want to set it")
        } else if (firstStreamInput.length >= 1) {
            setIsFirstStreamReady(true)
            setStreamCount(streamCount + 1)
            setIsFirstMenuOpen(false)
        }
    }

    // OPEN SECOND MENU FUNCTION
    // Idem first menu function

    function openSecondMenu(event) {
        setIsSecondMenuOpen(!isSecondMenuOpen)
        setSecondMenuAnchorEl(event.currentTarget)
    }

    // HANDLE SECOND MENU INPUT FUNCTION
    // Idem first menu input handler function

    function handleSecondStreamInput(event) {
        setSecondStreamInput(event.target.value)
    }

    // LOCK SECOND STREAM INPUT FUNCTION
    // Idem first input lock function

    function lockSecondStream() {
        if (secondStreamInput.length === 0) {
            alert("You have to input something before you want to set it")
        } else if (secondStreamInput.length >= 1) {
            setIsSecondStreamReady(true)
            setStreamCount(streamCount + 1)
            setIsSecondMenuOpen(false)
        }
    }

    // OPEN THIRD MENU FUNCTION
    // Idem first menu function

    function openThirdMenu(event) {
        setIsThirdMenuOpen(!isThirdMenuOpen)
        setThirdMenuAnchorEl(event.currentTarget)
    }

    // HANDLE THIRD MENU INPUT FUNCTION
    // Idem first menu input handler function

    function handleThirdStreamInput(event) {
        setThirdStreamInput(event.target.value)
    }

    // LOCK THIRD STREAM INPUT FUNCTION
    // Idem first input lock function

    function lockThirdStream() {
        if (thirdStreamInput.length === 0) {
            alert("You have to input something before you want to set it")
        } else if (thirdStreamInput.length >= 1) {
            setIsThirdStreamReady(true)
            setStreamCount(streamCount + 1)
            setIsThirdMenuOpen(false)
        }
    }

    // OPEN FOURTH MENU FUNCTION
    // Idem first menu function

    function openFourthMenu(event) {
        setIsFourthMenuOpen(!isFourthMenuOpen)
        setFourthMenuAnchorEl(event.currentTarget)
    }

    // HANDLE FOURTH MENU INPUT FUNCTION
    // Idem first menu input handler function

    function handleFourthStreamInput(event) {
        setFourthStreamInput(event.target.value)
    }

    // LOCK FOURTH STREAM INPUT FUNCTION
    // Idem first input lock function

    function lockFourthStream() {
        if (fourthStreamInput.length === 0) {
            alert("You have to input something before you want to set it")
        } else if (fourthStreamInput.length >= 1) {
            setIsFourthStreamReady(true)
            setStreamCount(streamCount + 1)
            setIsFourthMenuOpen(false)
        }
    }

    // CUSTOM MATERIAL UI STYLING

    const useStyles = makeStyles(() => ({
        root: {
            height: "100vh",
            width: "25vw",
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
        },
        streamInput: {
            backgroundColor: "#b9a3e3"
        },
        inputButton: {
            backgroundColor: "#6441a5",
            color: "#b9a3e3",
            fontWeight: "400",
            height: "32px",
            "&:hover": {
                backgroundColor: "#b9a3e3",
                color: "#6441a5"
            }
        }
    }))

    // MATERIAL UI CLASS CALLING

    const classes = useStyles()

    // RETURN STATEMENT

    return (

        // ROOT COMPONENT

        <Grid container direction="column" justify="space-evenly" alignItems="center" className={classes.root}>

            {/*CURRENT STREAM COUNTER TO RENDER*/}
            {/*This is for keeping track of how many streams need to render, and making sure
            it's all working how it should.

            <h1>{streamCount}</h1>*/}

            {/*FIRST STREAM INPUT HEADER*/}

            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                First Stream
            </Typography>

            {/*FIRST STREAM MENU BUTTON*/}

            <IconButton onClick={openFirstMenu} className={classes.addStreamIcon}>
                {isFirstMenuOpen ? <RemoveIcon/> : <AddIcon/>}
            </IconButton>

            {/*FIRST STREAM MENU POPPER*/}

            <Popper open={isFirstMenuOpen} anchorEl={firstMenuAnchorEl}>

                {/*FIRST STREAM MENU POPPER INPUT*/}

                <TextField disabled={isFirstStreamReady} onChange={handleFirstStreamInput} value={firstStreamInput}
                           className={classes.streamInput}/>

                {/*FIRST STREAM MENU POPPER BUTTON */}

                <Button disabled={isFirstStreamReady} onClick={lockFirstStream}
                        className={classes.inputButton}>SET</Button>
            </Popper>

            {/*SECOND STREAM INPUT HEADER*/}

            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                Second Stream
            </Typography>

            {/*SECOND STREAM MENU BUTTON*/}

            <IconButton onClick={openSecondMenu} className={classes.addStreamIcon}>
                {isSecondMenuOpen ? <RemoveIcon/> : <AddIcon/>}
            </IconButton>

            {/*SECOND STREAM MENU POPPER*/}

            <Popper open={isSecondMenuOpen} anchorEl={secondMenuAnchorEl}>

                {/*SECOND STREAM MENU POPPER INPUT*/}

                <TextField disabled={isSecondStreamReady} onChange={handleSecondStreamInput} value={secondStreamInput}
                           className={classes.streamInput}/>

                {/*SECOND STREAM MENU POPPER BUTTON*/}

                <Button disabled={isSecondStreamReady} onClick={lockSecondStream}
                        className={classes.inputButton}>SET</Button>
            </Popper>

            {/*THIRD STREAM INPUT HEADER*/}

            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                Third Stream
            </Typography>

            {/*THIRD STREAM MENU BUTTON*/}

            <IconButton onClick={openThirdMenu} className={classes.addStreamIcon}>
                {isThirdMenuOpen ? <RemoveIcon/> : <AddIcon/>}
            </IconButton>

            {/*THIRD STREAM MENU POPPER*/}

            <Popper open={isThirdMenuOpen} anchorEl={thirdMenuAnchorEl}>

                {/*THIRD STREAM MENU POPPER INPUT*/}

                <TextField disabled={isThirdStreamReady} onChange={handleThirdStreamInput} value={thirdStreamInput}
                           className={classes.streamInput}/>

                {/*THIRD STREAM MENU POPPER BUTTON*/}

                <Button disabled={isThirdStreamReady} onClick={lockThirdStream}
                        className={classes.inputButton}>SET</Button>
            </Popper>

            {/*FOURTH STREAM INPUT HEADER*/}

            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                Fourth Stream
            </Typography>

            {/*FOURTH STREAM MENU BUTTON*/}

            <IconButton onClick={openFourthMenu} className={classes.addStreamIcon}>
                {isFourthMenuOpen ? <RemoveIcon/> : <AddIcon/>}
            </IconButton>

            {/*FOURTH STREAM MENU POPPER*/}

            <Popper open={isFourthMenuOpen} anchorEl={fourthMenuAnchorEl}>

                {/*FOURTH STREAM MENU POPPER INPUT*/}

                <TextField disabled={isFourthStreamReady} onChange={handleFourthStreamInput} value={fourthStreamInput}
                           className={classes.streamInput}/>

                {/*FOURTH STREAM MENU POPPER BUTTON*/}

                <Button disabled={isFourthStreamReady} onClick={lockFourthStream}
                        className={classes.inputButton}>SET</Button>
            </Popper>
        </Grid>
    )

}

// EXPORT STATEMENT

export default InputSection