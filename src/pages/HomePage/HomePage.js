import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import portada from "../../images/rick-and-morty-portada.jpg" //
export const HomePage = ({setCharacter,setStatus2}) => {      
    const [input="", setInput] = React.useState();  
    const [input2="", setInput2] = React.useState();  
    const [estate=true, setEstate] = React.useState();  
    
    const history = useHistory();
    
        function handleSearchClick() {
          setCharacter(input.toLowerCase());
          if(estate===false){
            setStatus2(input2.toLowerCase());
          }         
          history.replace("/card");
        }
 
    function handleInputChange(event) {       
          setInput(event.target.value);
    }
    function handleChange(event) {       
      setInput2(event.target.value);
    }
    function handleChangeVisibiliti() {       
      if(estate===true){
      setEstate(false);
      }else{
        setEstate(true);
      } 
    }
    return(

<Home width="20px" >

      <Wrapper> 
        <Myh1>U can search for a character name , or state: dead-alive-unknow, or gender: male-female-genderless . Double search needs character name + state </Myh1>     
        <SearchBar
          type="text"
          placeholder="Search a character"
          value={input}
          onChange={handleInputChange}         
        />
        <SearchBar
          disabled={estate}        
          type="text"
          placeholder="Search character and status"
          value={input2}
          onChange={handleChange}  
                
        />
        <ButtonsWrapper>
          <button  onClick={handleSearchClick}>Search</button>            
          <button  onClick={handleChangeVisibiliti}>Status Mode</button>    
        </ButtonsWrapper>          
      </Wrapper>
    </Home>

)
}

const Home = styled.div` 
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url(${portada}); 
  background-size: cover;
  
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
`;
const Myh1= styled.h1`
  color: red;
  margin-bottom: 15px;
`;
const SearchBar = styled.input`
  width: 100%;
  margin-bottom: 20px;
`;

 const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  button {
    cursor: pointer;
    
    padding: 10px;
    font-weight: 600;
    background-color: green ;
    border: none;
    border-radius: 6px;
    transition: all ease-out 0.3s;

    &:hover {
      filter: brightness(0.8);
      transform: translateY(-4px);
    }

    &:first-child {
      width: 70%;
    }

    &:last-child {
      width: 30%;
    }
  }
`;


