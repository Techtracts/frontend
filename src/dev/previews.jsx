import React from 'react'
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import AuthPage from "../features/auth/AuthPage.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/AuthPage">
                <AuthPage/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews