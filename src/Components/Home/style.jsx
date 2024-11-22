import styled from "styled-components";

export const StyledHome = styled.main`

main {
    height: 80vh;
}

section {
    display: flex;
    justify-content: space-between;

}

#texto1 {
    padding: 7vh 0 7vh 3vw;
    height: 40vh;
}

h2{
    font-weight: 300;
    font-size: 2.5rem;
    font-family: "Inter";


}

h1 {
    font-family: "Poppins";
    font-weight: 300;
    font-size: 2.5rem;
    
    
    span {
      color: #037143;
      display: inline;
      font: 700 60px "Poppins", sans-serif;
    }
  }

  #texto2 { width: 400px; }

p {
    font-size: 1.1rem;
    font-family: "Poppins", serif;
    margin-bottom: 25px;
}


#elipse {
    border-radius: 1050px;
    width: 1000px;
    height: 1000px;
    position: relative;
    left: 500px;
    top: 200px;
    z-index: -1;
    img{
        height: 50vh;
    }
}

#variedades {
    display: flex;
    justify-content: center;
    height: 10vh;
    margin: 5vh 0;
  }

  button.sabores{
    background-color: #00000000;
    border: none;
    margin: 0 1%;

    img { 
      height: 12vh; 
      
      &:hover{
        cursor: pointer;
        transform: rotate(10deg) translateY(-10px);
        transition: transform 0.2s;
      }
    }
  }

  button#bt {

 background-color: #037143;
 color: white;
 border: none;
 padding: 10px 30px;
 font-weight: bold;
 border-radius: 30px;
    
    
    height: 5vh;
    font: "Inter", sans-serif;

   
    &:hover {
      cursor: pointer;
      background-color: #04643c;
    }
  }



`
