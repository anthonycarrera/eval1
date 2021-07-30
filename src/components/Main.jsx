import React from "react"
import styled from "styled-components"
import "../App.css"
// import card from "../../images/card.png"

const CardContainer = styled.div`
    background-image: url(images/background.png);
    background-size: cover;
    background-attachment: fixed;
    width: 100%;
    display:flex;
    justify-content: center;
    align-items: center;

`
const ContainerMinor = styled.div`
    background-color: #FFFFFF;
    // z-index: 2; 
    position: relative;
    box-shadow: 0px 50px 100px -20px rgba(8, 70, 94, 0.504835);
    border-radius: 15px;
`

const Card= styled.img`
    position: relative;
    display: flex;
    align-items: flex-start
    // width: 350px;
    // height: 140px;
    width: 100%;

`

const ContainerUser = styled.div`
    display: flex;
    justify-contet: space-around;
    gap: 1%;
    align-items: center;

`
const Username= styled.p`
    font-family: "Kumbh Sans", sans-serif;
    font-weight: 700;
    font-size: 18px;
    color: #2E3349;

`

const UserPhoto = styled.img``

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
`



const Info = styled.div`
    display:grid;
    grid-template-columns: auto auto auto;
    align-items: center;
    justify-content: space-around;
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
`




const Main = () => {
    return(
        <>
<CardContainer>
    <ContainerMinor>
    <Card width="30%" src="/images/card.png" alt="portada"/>
    <UserPhoto src="/images/photo.png"/>
    <ContainerUser>
    <Username>Victor Crest</Username>
    <Age>26</Age>
    </ContainerUser>
    <City>London</City>
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