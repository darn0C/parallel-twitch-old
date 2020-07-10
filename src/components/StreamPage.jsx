import React, {useState} from "react";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove"
import AddIcon from '@material-ui/icons/Add';
import Popper from "@material-ui/core/Popper";
import TextField from "@material-ui/core/TextField";

function StreamPage() {

    const [isFirstMenuOpen, setIsFirstMenuOpen] = useState(false);
    const [isSecondMenuOpen, setIsSecondMenuOpen] = useState(false);
    const [isThirdMenuOpen, setIsThirdMenuOpen] = useState(false);
    const [isFourthMenuOpen, setIsFourthMenuOpen] = useState(false);
    const [firstAnchorEl, setFirstAnchorEl] = useState(false);
    const [secondAnchorEl, setSecondAnchorEl] = useState(false);
    const [thirdAnchorEl, setThirdAnchorEl] = useState(false);
    const [fourthAnchorEl, setFourthAnchorEl] = useState(false);

    function handleFirstMenu (event) {
        setFirstAnchorEl(event.currentTarget)
        setIsFirstMenuOpen(!isFirstMenuOpen)
    }

    function handleSecondMenu (event) {
        setSecondAnchorEl(event.currentTarget)
        setIsSecondMenuOpen(!isSecondMenuOpen)
    }

    function handleThirdMenu (event) {
        setThirdAnchorEl(event.currentTarget)
        setIsThirdMenuOpen(!isThirdMenuOpen)
    }

    function handleFourthMenu (event) {
        setFourthAnchorEl(event.currentTarget)
        setIsFourthMenuOpen(!isFourthMenuOpen)
    }

    const useStyles = makeStyles((theme) => ({
        root: {
            height: "100vh",
            backgroundColor: "gray",
        },
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
        addButton: {
            backgroundColor: "#6441a5",
            color: "#b9a3e3",
            "&:hover": {
                backgroundColor: "#b9a3e3",
                color: "#6441a5"
            }
        },

    }))

    const classes = useStyles()

    return (
        <Grid container direction="row" className={classes.root}>
            <CssBaseline/>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.firstUpperSection}>
                <IconButton onClick={handleFirstMenu} className={classes.addButton}>
                    {isFirstMenuOpen ? <RemoveIcon/> : <AddIcon/>}
                </IconButton>
                <Popper open={isFirstMenuOpen} anchorEl={firstAnchorEl}>
                    <div>
                        <TextField id="first-stream"/>
                    </div>
                </Popper>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.secondUpperSection}>
                <IconButton onClick={handleSecondMenu} className={classes.addButton}>
                    {isSecondMenuOpen ? <RemoveIcon/> : <AddIcon/>}
                </IconButton>
                <Popper open={isSecondMenuOpen} anchorEl={secondAnchorEl}>
                    <div>
                        <TextField id="second-stream" className={classes.inputMenu}/>
                    </div>
                </Popper>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.firstBottomSection}>
                <IconButton onClick={handleThirdMenu} className={classes.addButton}>
                    {isThirdMenuOpen ? <RemoveIcon/> : <AddIcon/>}
                </IconButton>
                <Popper open={isThirdMenuOpen} anchorEl={thirdAnchorEl}>
                    <div>
                        <TextField id="third-stream"/>
                    </div>
                </Popper>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.secondBottomSection}>
                <IconButton onClick={handleFourthMenu} className={classes.addButton}>
                    {isFourthMenuOpen ? <RemoveIcon/> : <AddIcon/>}
                </IconButton>
                <Popper open={isFourthMenuOpen} anchorEl={fourthAnchorEl}>
                    <div>
                        <TextField id="fourth-stream"/>
                    </div>
                </Popper>
            </Grid>
            <iframe
                title="First stream"
                src="https://player.twitch.tv/?channel=coscu&parent=darn0c.github.io"
                height="50%"
                width="50%"
                frameBorder="0"
                scrolling="no"
                allowFullScreen="true">
            </iframe>
        </Grid>
    )

}

export default StreamPage