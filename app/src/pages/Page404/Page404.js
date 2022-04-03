import React from 'react'
import { ImageContainer, PageMainContainer, TextContainer, SadFace, ErrorCode, PageNotFound, TextField } from './styled'
import sadface from '../../assets/sad_face.png'

const Page404 = () => {
    return (
        <PageMainContainer>
            <ImageContainer>
                <SadFace src={sadface} alt=" " />
            </ImageContainer>
            <TextContainer>
                <ErrorCode>4o4</ErrorCode>
                <PageNotFound>PAGE NOT FOUND</PageNotFound>
                <TextField>The page you are looking for may not exist.</TextField>
            </TextContainer>
        </PageMainContainer>
    )
}

export default Page404