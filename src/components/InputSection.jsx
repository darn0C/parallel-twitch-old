import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import Popper from "@material-ui/core/Popper";
import TextField from "@material-ui/core/TextField";

function InputSection() {

    const [isFirstMenuOpen,setIsFirstMenuOpen] = useState(false);
    const [firstMenuAnchorEl,setFirstMenuAnchorEl] = useState(false);
    const [isSecondMenuOpen,setIsSecondMenuOpen] = useState(false);
    const [secondMenuAnchorEl,setSecondMenuAnchorEl] = useState(false);
    const [isThirdMenuOpen,setIsThirdMenuOpen] = useState(false);
    const [thirdMenuAnchorEl,setThirdMenuAnchorEl] = useState(false);
    const [isFourthMenuOpen,setIsFourthMenuOpen] = useState(false);
    const [fourthMenuAnchorEl,setFourthMenuAnchorEl] = useState(false);

    function openFirstMenu (event) {
        setIsFirstMenuOpen(!isFirstMenuOpen)
        setFirstMenuAnchorEl(event.currentTarget)
    }

    function openSecondMenu (event) {
        setIsSecondMenuOpen(!isSecondMenuOpen)
        setSecondMenuAnchorEl(event.currentTarget)
    }

    function openThirdMenu (event) {
        setIsThirdMenuOpen(!isThirdMenuOpen)
        setThirdMenuAnchorEl(event.currentTarget)
    }

    function openFourthMenu (event) {
        setIsFourthMenuOpen(!isFourthMenuOpen)
        setFourthMenuAnchorEl(event.currentTarget)
    }

    const useStyles = makeStyles((theme) => ({
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
        }
    }))

    const classes = useStyles()

    return (
        <Grid container direction="column" justify="space-evenly" alignItems="center" className={classes.root}>

            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                First Stream
            </Typography>
            <IconButton onClick={openFirstMenu} className={classes.addStreamIcon}>
                <AddIcon/>
            </IconButton>
            <Popper open={isFirstMenuOpen} anchorEl={firstMenuAnchorEl}>
                <TextField className={classes.streamInput}/>
            </Popper>

            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                Second Stream
            </Typography>
            <IconButton onClick={openSecondMenu} className={classes.addStreamIcon}>
                <AddIcon/>
            </IconButton>
            <Popper open={isSecondMenuOpen} anchorEl={secondMenuAnchorEl}>
                <TextField className={classes.streamInput}/>
            </Popper>

            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                Third Stream
            </Typography>
            <IconButton onClick={openThirdMenu} className={classes.addStreamIcon}>
                <AddIcon/>
            </IconButton>
            <Popper open={isThirdMenuOpen} anchorEl={thirdMenuAnchorEl}>
                <TextField className={classes.streamInput}/>
            </Popper>

            <Typography component="h1" variant="h5" className={classes.streamInputHeader}>
                Fourth Stream
            </Typography>
            <IconButton onClick={openFourthMenu} className={classes.addStreamIcon}>
                <AddIcon/>
            </IconButton>
            <Popper open={isFourthMenuOpen} anchorEl={fourthMenuAnchorEl}>
                <TextField className={classes.streamInput}/>
            </Popper>
        </Grid>
    )

}

export default InputSection