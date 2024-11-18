import styled from "styled-components";

export const Section = styled.section`
display: flex;
align-items: center;
justify-content: space-around;
height: 80vh;
color:  #fff;
padding: 0 5%;
background-color: #1E3932;
`

export const Div = styled.div`
width: 30vw;


width: 40%;

h2{
    font-size: 40px;
    margin-bottom: 15px;
}

h3 {
    font-size: 15px;
    font-family: "Poppins", serif;
    color: #ffffff
  }

  p{
    font-size: 30px;
    line-height: 1.5;
  }


`;

export const Image = styled.div`
width: 40%;
display: flex;
justify-content: center;
align-items: center;


img{
    max-width: 100%;
    height: auto;
    object-fit: cover;
}

`;

export const Button= styled.button`
 background-color: #037143;
 color: white;
 border: none;
 padding: 10px 30px;
 font-weight: bold;
 border-radius: 30px;

 

`;