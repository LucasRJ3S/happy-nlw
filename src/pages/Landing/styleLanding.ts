import styled from "styled-components";
import landingImg from '../../images/landing.svg';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #baced1 0%, #00c7c7 100%);

  display: flex;
  justify-content: center;
  align-items: center;


&::content, .content-wrapper {
  position: relative;

  width: 100%;
  max-width: 1100px;

  height: 100%;
  max-height: 600px;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
}

.content-wrapper {
  background: url(${ landingImg }) no-repeat 80% center;
  background-size: 500px;
  
  img{

  }

  main {
    max-width: 350px;
    h1 {
      font-size: 76px;
      font-weight: 900;
      line-height: 70px;
    }
    p {
      margin-top: 40px;
      font-size: 24px;
      line-height: 34px;
    }
  }


.location {
    position: absolute;
    right: 0;
    top: 0;

    font-size: 24px;
    line-height: 34px;

    display: flex;
    flex-direction: column;
    text-align: right;
    
    strong{
      font-weight: 800;
    }
    p{
      font-weight: 800;
    }
  }

.enter-app {
    position: absolute;
    right: 0;
    bottom: 0;

    width: 80px;
    height: 80px;
    background: #ffd666;
    border-radius: 30px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.5s;
    transition: 1s;
  &:hover {
      background-color: #96FEFF;
      transform: translateX(10px);
    }
  }
}
`;
