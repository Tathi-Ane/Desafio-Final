import styled from "styled-components";

export const Section = styled.section`
display: flex;
align-items: center;
justify-content: space-around;
height: 80vh;
color:  #fff;
padding: 0 5% 0 4%;
background-color: #1E3932;
`

export const Div = styled.div`

width: 40%;


h2{
    font-size: 40px;
    margin-bottom: 15px;
    font-family: "Poppins", sans-serif;
    
}

h3 {
    font-family: "Inter", serif;  
    font-size: 20px;
    color: #ffffff
  }

  p{
    font-size: 20px;
    line-height: 1.5;
    font-family: "Poppins", sans-serif;

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