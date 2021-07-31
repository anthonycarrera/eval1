import React from "react"
import styled from "styled-components"
import "../App.css"

const CardContainer = styled.div`
    background-image: url(images/background.png) ;
    height: 100vh;
    width: 100%;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    min-height:100%;
    display:flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100%;
      }

`
const ContainerMinor = styled.div`
    background-color: #FFFFFF;
    width: 350px;
    height: 374px;
    position: relative;
    box-shadow: 0px 50px 100px -20px rgba(8, 70, 94, 0.504835);
    border-radius: 15px;

    @media (max-width: 768px) {
        width: 50%;
      }  
`

const ContainerCover = styled.div`
    border-bottom: 1px solid #E8E9EC;
`

const Card= styled.img`
    position: relative;
    display: flex;
    align-items: flex-start
    width: 350px;
    height: 140px;
    width: 100%;
`

const ContainerUser = styled.div`
    display: flex;
    justify-content: center;
    gap: 1%;
    align-items: center;
    text-align: center;
    margin-bottom: 5%;
    margin-top:20%;

`
const Username= styled.p`
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #2E3349;
`

const UserPhoto = styled.img`
    position:fixed;
    // z-index: 99999;
    width: 96px;
    height: 96px;
    left: calc(50% - 96px/2);
    top: calc(50% - 96px/2 - 47px);

`

const Age = styled.p`
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 400;
    font-size: 18px;
    color:  #6B7082;

`

const City = styled.h1`
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
    color:  #6B7082;
    text-align: center;
    margin-bottom: 10%;
`

const Info = styled.div`
    display:grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: space-around;
    margin-top: 8%;
`
const Container = styled.div``

const Cuantity = styled.h1`
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #2E3349;
`

const Paragraph = styled.h1`
    font-family: "Kumbh Sans", sans-serif;
    font-weight:400;
    font-size: 10px;
    line-height: 10,06px;
    color: #6B7082;
    style: normal;
    letter: 1.5px;
    margin-top: 1%;
    text-align: center;
`


const Main = () => {
    return(
        <>
            <CardContainer>
                <ContainerMinor>
                    <ContainerCover>
                    <Card  src="/images/card.png" alt="portada"/>
                    <UserPhoto src="/images/photo.png" alt="user"/>
                    <ContainerUser>
                        <Username>Victor Crest</Username>
                        <Age>26</Age>
                    </ContainerUser>
                    <City>London</City>
                    </ContainerCover>
                    <Info>
                        <Container>
                            <Cuantity>80K</Cuantity>
                            <Paragraph>Followers</Paragraph>
                        </Container>
                        <Container>
                            <Cuantity>803K</Cuantity>
                            <Paragraph>Likes</Paragraph>
                        </Container>
                        <Container>
                            <Cuantity>1.4K</Cuantity>
                            <Paragraph>Photos</Paragraph>
                        </Container>
                    </Info>
                </ContainerMinor>
            </CardContainer>
        </>

    )
}

export default Main