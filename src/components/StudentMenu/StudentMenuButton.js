import React from 'react'
import { MenuButton, MenuButtonClicked } from './StudentMenuStyles'

export const StudentMenuButton = ({isClicked = false, text = "", onClickMethod}) => {
    if (isClicked) {
        return (<MenuButtonClicked onClick={onClickMethod} >{text}</MenuButtonClicked>)
    } else {
        return (<MenuButton onClick={onClickMethod} >{text}</MenuButton>)
    }
}
