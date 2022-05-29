import React from 'react'
import { MenuButton, MenuButtonClicked } from './StudentMenuStyles'

export const StudentMenuButton = ({isClicked = false, text = ""}) => {
    if (isClicked) {
        return (<MenuButtonClicked>{text}</MenuButtonClicked>)
    } else {
        return (<MenuButton>{text}</MenuButton>)
    }
}
