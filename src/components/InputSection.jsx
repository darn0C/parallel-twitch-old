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

function InputSection() {

    const [isFirstMenuOpen, setIsFirstMenuOpen] = useState(false);
    const [firstMenuAnchorEl, setFirstMenuAnchorEl] = useState(false);
    const [firstStreamInput, setFirstStreamInput] = useState("");
    const [isFirstStreamReady, setIsFirstStreamReady] = useState(false);

    const [isSecondMenuOpen, setIsSecondMenuOpen] = useState(false);
    const [secondMenuAnchorEl, setSecondMenuAnchorEl] = useState(false);
    const [secondStreamInput, setSecondStreamInput] = useState("");
    const [isSecondStreamReady, setIsSecondStreamReady] = useState(false);

    const [isThirdMenuOpen, setIsThirdMenuOpen] = useState(false);
    const [thirdMenuAnchorEl, setThirdMenuAnchorEl] = useState(false);
    const [thirdStreamInput, setThirdStreamInput] = useState("");
    const [isThirdStreamReady, setIsThirdStreamReady] = useState(false);

    const [isFourthMenuOpen, setIsFourthMenuOpen] = useState(false);
    const [fourthMenuAnchorEl, setFourthMenuAnchorEl] = useState(false);
    const [fourthStreamInput, setFourthStreamInput] = useState("");
    const [isFourthStreamReady, setIsFourthStreamReady] = useState(false);

    let [streamCount, setStreamCount] = useState(0);

    function openFirstMenu(event) {
        setIsFirstMenuOpen(!isFirstMenuOpen)
        setFirstMenuAnchorEl(event.currentTarget)
    }

    function handleFirstStreamInput(event) {
        setFirstStreamInput(event.target.value)
    }

    function lockFirstStream() {
        if (firstStreamInput.length === 0) {
            alert("You have to input something before you want to set it")
        } else if (firstStreamInput.length >= 1) {
            setIsFirstStreamReady(true)
            setStreamCount(streamCount + 1)
            setIsFirstMenuOpen(false)
        }
    }

    function openSecondMenu(event) {
        setIsSecondMenuOpen(!isSecondMenuOpen)
        setSecondMenuAnchorEl(event.currentTarget)
    }

    function handleSecondStreamInput(event) {
        setSecondStreamInput(event.target.value)
    }

    function lockSecondStream() {
        if (secondStreamInput.length === 0) {
            alert("You have to input something before you want to set it")
        } else if (secondStreamInput.length >= 1) {
            setIsSecondStreamReady(true)
            setStreamCount(streamCount + 1)
            setIsSecondMenuOpen(false)
        }
    }

    function openThirdMenu(event) {
        setIsThirdMenuOpen(!isThirdMenuOpen)
        setThirdMenuAnchorEl(event.currentTarget)
    }

    function handleThirdStreamInput(event) {
        setThirdStreamInput(event.target.value)
    }

    function lockThirdStream() {
        if (thirdStreamInput.length === 0) {
            alert("You have to input something before you want to set it")
        } else if (thirdStreamInput.length >= 1) {
            setIsThirdStreamReady(true)
            setStreamCount(streamCount + 1)
            setIsThirdMenuOpen(false)
        }
    }

    function openFourthMenu(event) {
        setIsFourthMenuOpen(!isFourthMenuOpen)
        setFourthMenuAnchorEl(event.currentTarget)
    }

    function handleFourthStreamInput(event) {
        setFourthStreamInput(event.target.value)
    }

    function lockFourthStream() {
        if (fourthStreamInput.length === 0) {
            alert("You have to input something before you want to set it")
        } else if (fourthStreamInput.length >= 1) {
            setIsFourthStreamReady(true)
            setStreamCount(streamCount + 1)
            setIsFourthMenuOpen(false)
        }
    }

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

    const classes = useStyles()

    return (
        <Grid container direction="column" justify="space-evenly" alignItems="center" className={classes.root}>

            <h1>{streamCount}</h1>

            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                First Stream
            </Typography>
            <IconButton onClick={openFirstMenu} className={classes.addStreamIcon}>
                {isFirstMenuOpen ? <RemoveIcon/> : <AddIcon/>}
            </IconButton>
            <Popper open={isFirstMenuOpen} anchorEl={firstMenuAnchorEl}>
                <TextField disabled={isFirstStreamReady} onChange={handleFirstStreamInput} value={firstStreamInput}
                           className={classes.streamInput}/>
                <Button disabled={isFirstStreamReady} onClick={lockFirstStream}
                        className={classes.inputButton}>SET</Button>
            </Popper>

            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                Second Stream
            </Typography>
            <IconButton onClick={openSecondMenu} className={classes.addStreamIcon}>
                {isSecondMenuOpen ? <RemoveIcon/> : <AddIcon/>}
            </IconButton>
            <Popper open={isSecondMenuOpen} anchorEl={secondMenuAnchorEl}>
                <TextField disabled={isSecondStreamReady} onChange={handleSecondStreamInput} value={secondStreamInput}
                           className={classes.streamInput}/>
                <Button disabled={isSecondStreamReady} onClick={lockSecondStream}
                        className={classes.inputButton}>SET</Button>
            </Popper>

            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                Third Stream
            </Typography>
            <IconButton onClick={openThirdMenu} className={classes.addStreamIcon}>
                {isThirdMenuOpen ? <RemoveIcon/> : <AddIcon/>}
            </IconButton>
            <Popper open={isThirdMenuOpen} anchorEl={thirdMenuAnchorEl}>
                <TextField disabled={isThirdStreamReady} onChange={handleThirdStreamInput} value={thirdStreamInput}
                           className={classes.streamInput}/>
                <Button disabled={isThirdStreamReady} onClick={lockThirdStream}
                        className={classes.inputButton}>SET</Button>
            </Popper>

            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                Fourth Stream
            </Typography>
            <IconButton onClick={openFourthMenu} className={classes.addStreamIcon}>
                {isFourthMenuOpen ? <RemoveIcon/> : <AddIcon/>}
            </IconButton>
            <Popper open={isFourthMenuOpen} anchorEl={fourthMenuAnchorEl}>
                <TextField disabled={isFourthStreamReady} onChange={handleFourthStreamInput} value={fourthStreamInput}
                           className={classes.streamInput}/>
                <Button disabled={isFourthStreamReady} onClick={lockFourthStream}
                        className={classes.inputButton}>SET</Button>
            </Popper>
        </Grid>
    )

}

export default InputSection