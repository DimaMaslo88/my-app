import React, {ChangeEvent, KeyboardEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send'

type TextAreaPropsType = {
    messageText: string
    sendText: () => void
    updateText: (text: string) => void
}
export const TextArea = ({messageText, sendText, updateText}: TextAreaPropsType) => {


    const onClickHandler = () => {

        sendText()

    }
    const onKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
           sendText()
        }
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value;
        updateText(text)
    }
    return (


        <Box sx={{'& > :not(style)': {m: 1}}}>

            <TextField
                id="input-with-icon-textfield"
                label="Enter Your Message"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <AccountCircle/>
                        </InputAdornment>
                    ),
                }}
                variant="standard"
                value={messageText}
                onChange={onChangeHandler}
                onKeyPress={onKeyPress}
            />
            <div>
                <Button variant="contained" onClick={onClickHandler} endIcon={<SendIcon/>}>
                    Send Message
                </Button>
            </div>
        </Box>


    );


}