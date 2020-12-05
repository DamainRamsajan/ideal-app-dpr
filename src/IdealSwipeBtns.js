import React from 'react'
import "./IdealSwipeBtns.css";
import ReplayIcon from "@material-ui/icons/Replay";
import CloseIcon from "@material-ui/icons/Close";
import StarRateIcon from "@material-ui/icons/StarRate";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import IconButton from "@material-ui/core/IconButton";

function IdealSwipeBtns() {
    return (
        <div className = "swipeButtons">
            <IconButton className = "swipeButtonsRepeat">
                <ReplayIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtonslEFT">
                <CloseIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtonsStar">
                <StarRateIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtonsRight">
                <FavoriteIcon fontSize = "large" />
            </IconButton>
            <IconButton className = "swipeButtonsLightning">
                <FlashOnIcon fontSize = "large" />
            </IconButton>

            
        </div>
    )
}

export default IdealSwipeBtns
