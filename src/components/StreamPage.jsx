// IMPORT STATEMENTS

import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from '@material-ui/icons/Add';
import Popper from "@material-ui/core/Popper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

// COMPONENT FUNCTION

function StreamPage() {

    // REACT HOOKS

    // MENU STATE HOOKS

    const [isFirstMenuOpen, setIsFirstMenuOpen] = useState(false);
    const [isSecondMenuOpen, setIsSecondMenuOpen] = useState(false);
    const [isThirdMenuOpen, setIsThirdMenuOpen] = useState(false);
    const [isFourthMenuOpen, setIsFourthMenuOpen] = useState(false);

    // MENU PLACEMENT HOOKS

    const [firstAnchorEl, setFirstAnchorEl] = useState(false);
    const [secondAnchorEl, setSecondAnchorEl] = useState(false);
    const [thirdAnchorEl, setThirdAnchorEl] = useState(false);
    const [fourthAnchorEl, setFourthAnchorEl] = useState(false);

    // MENU INPUT HOOKS

    const [firstStreamInput, setFirstStreamInput] = useState("");

    // HANDLE MENU FUNCTIONS

    function handleFirstMenu(event) {
        setFirstAnchorEl(event.currentTarget)
        setIsFirstMenuOpen(!isFirstMenuOpen)
    }

    function handleSecondMenu(event) {
        setSecondAnchorEl(event.currentTarget)
        setIsSecondMenuOpen(!isSecondMenuOpen)
    }

    function handleThirdMenu(event) {
        setThirdAnchorEl(event.currentTarget)
        setIsThirdMenuOpen(!isThirdMenuOpen)
    }

    function handleFourthMenu(event) {
        setFourthAnchorEl(event.currentTarget)
        setIsFourthMenuOpen(!isFourthMenuOpen)
    }

    // HANDLE INPUT FUNCTIONS

    function handleFirstInput(event) {
        setFirstStreamInput(event.target.value)
    }

    // MATERIAL UI CUSTOM STYLING


    const useStyles = makeStyles((theme) => ({

        // ROOT COMPONENT

        root: {
            height: "100vh",
            backgroundColor: "gray",
        },

        // STREAM SECTIONS

        firstUpperSection: {
            width: "50%",
            height: "50%",
            display: "flex",
            backgroundColor: "#262626",
        },
        secondUpperSection: {
            width: "50%",
            height: "50%",
            display: "flex",
            backgroundColor: "white"
        },
        firstBottomSection: {
            width: "50%",
            height: "50%",
            display: "flex",
            backgroundColor: "white"
        },
        secondBottomSection: {
            width: "50%",
            height: "50%",
            display: "flex",
            backgroundColor: "#262626",
        },

        // STREAM SECTION MENU BUTTON

        addButton: {
            backgroundColor: "#6441a5",
            color: "#b9a3e3",
            "&:hover": {
                backgroundColor: "#b9a3e3",
                color: "#6441a5"
            }
        },

        // STREAM MENU INPUT

        streamInput: {
            backgroundColor: "#b9a3e3",
        },

        // STREAM MENU BUTTON

        streamInputButton: {
            backgroundColor: "#6441a5",
            height: "32px",
            "&:hover": {
                backgroundColor: "#b9a3e3"
            }
        }

    }))

    const classes = useStyles()

    // RETURN COMPONENT

    return (

        // ROOT GRID

        <Grid container direction="row" className={classes.root}>
            <CssBaseline/>

            {/*FIRST UPPER SECTION*/}

            <Grid container direction="row" justify="center" alignItems="center" className={classes.firstUpperSection}>

                {/*FIRST UPPER SECTION MENU BUTTON*/}

                <IconButton onClick={handleFirstMenu} className={classes.addButton}>
                    {isFirstMenuOpen ? <RemoveIcon/> : <AddIcon/>}
                </IconButton>

                {/*FIRST UPPER SECTION POPPER*/}

                <Popper open={isFirstMenuOpen} anchorEl={firstAnchorEl}>

                    {/*FIRST UPPER SECTION POPPER INPUT*/}

                    <TextField id="first-stream" onChange={handleFirstInput} className={classes.streamInput}
                               value={firstStreamInput}/>

                    {/*FIRST UPPER SECTION POPPER BUTTON */}

                    <Button className={classes.streamInputButton}/>
                </Popper>
            </Grid>

            {/*SECOND UPPER SECTION*/}

            <Grid container direction="row" justify="center" alignItems="center" className={classes.secondUpperSection}>

                {/*SECOND UPPER SECTION MENU BUTTON*/}

                <IconButton onClick={handleSecondMenu} className={classes.addButton}>
                    {isSecondMenuOpen ? <RemoveIcon/> : <AddIcon/>}
                </IconButton>

                {/*SECOND UPPER SECTION POPPER*/}

                <Popper open={isSecondMenuOpen} anchorEl={secondAnchorEl}>

                    {/*SECOND UPPER SECTION POPPER INPUT*/}

                    <TextField id="second-stream" className={classes.streamInput}/>

                    {/*SECOND UPPER SECTION POPPER BUTTON */}

                    <Button className={classes.streamInputButton}/>
                </Popper>
            </Grid>

            {/*FIRST BOTTOM SECTION*/}

            <Grid container direction="row" justify="center" alignItems="center" className={classes.firstBottomSection}>

                {/*FIRST BOTTOM SECTION MENU BUTTON*/}

                <IconButton onClick={handleThirdMenu} className={classes.addButton}>
                    {isThirdMenuOpen ? <RemoveIcon/> : <AddIcon/>}
                </IconButton>

                {/*FIRST BOTTOM SECTION POPPER*/}

                <Popper open={isThirdMenuOpen} anchorEl={thirdAnchorEl}>

                    {/*FIRST BOTTOM SECTION POPPER INPUT*/}

                    <TextField id="third-stream" className={classes.streamInput}/>

                    {/*FIRST BOTTOM SECTION POPPER BUTTON*/}
                    <Button className={classes.streamInputButton}/>
                </Popper>
            </Grid>

            {/*SECOND BOTTOM SECTION*/}

            <Grid container direction="row" justify="center" alignItems="center"
                  className={classes.secondBottomSection}>

                {/*SECOND BOTTOM SECTION MENU BUTTON*/}

                <IconButton onClick={handleFourthMenu} className={classes.addButton}>
                    {isFourthMenuOpen ? <RemoveIcon/> : <AddIcon/>}
                </IconButton>

                {/*SECOND BOTTOM SECTION POPPER*/}

                <Popper open={isFourthMenuOpen} anchorEl={fourthAnchorEl}>

                    {/*SECOND BOTTOM SECTION POPPER INPUT*/}

                    <TextField id="fourth-stream" className={classes.streamInput}/>

                    {/*SECOND BOTTOM SECTION POPPER BUTTON*/}

                    <Button className={classes.streamInputButton}/>
                </Popper>
            </Grid>
        </Grid>
    )

}

export default StreamPage