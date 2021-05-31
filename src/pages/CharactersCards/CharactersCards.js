import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

export const CharactersCards = ({character,status2,setStatus2}) => {
    let history = useHistory();
    const [status, setStatus] = React.useState("");
    const [characterData, setCharacterData] = React.useState();
    
    React.useEffect(() => {
        setStatus("loading");
        
        if(status2===""){
        if(character==="alive"||character==="dead")  {
            fetch(`https://rickandmortyapi.com/api/character/?status=${character}`)
            .then((data) => data.json() )                    
            .then(
              (data) => {
                if(data.results===undefined){
                        setStatus("error");
                    }else if(character===""){
                        setStatus("error");
                    }else{
                        setCharacterData(data);
                        setStatus("succes");
                    }
                }
            )
        }else if(character==="male"||character==="female"||character==="genderless"){

            fetch(`https://rickandmortyapi.com/api/character/?gender=${character}`)
            .then((data) => data.json() )        
          
        .then(
              (data) => {
                if(data.results===undefined){
                    setStatus("error");
                    }else if(character===""){
                        setStatus("error");
                    }else{
                        setCharacterData(data);
                        setStatus("succes");
                    }
                }
            )        
        }else{
            fetch(`https://rickandmortyapi.com/api/character/?name=${character}`)
            .then((data) => data.json() )        
           
        .then(
              (data) => {
                if(data.results===undefined){
                    setStatus("error");
                    }else if(character===""){
                        setStatus("error");
                    }else{
                        setCharacterData(data);
                        setStatus("succes");
                    }
                }
            )
        } 
    }else{
        fetch(`https://rickandmortyapi.com/api/character/?name=${character}&status=${status2}`)
        .then((data) => data.json() )        
       
    .then(
          (data) => {
            if(data.results===undefined){
                setStatus("error");
                }else if(character===""){
                    setStatus("error");
                }else{
                    setCharacterData(data);
                    setStatus2("");
                    setStatus("succes");
                }
            }
        )
    } 
    
      }, [character]);    
   

if (status === "succes" ){      
    const listItems = characterData.results.map((res) =>      
 

  <Myli key={res.id + res.name}> Name: {res.name} <br></br>Status: {res.status} <br></br> Species: {res.species} <br></br> Origin: {res.origin.name} <br></br> <img alt={res.id + res.name} src={res.image} /> </Myli>  
  
 
);
 
return(  
    <Home>
        <Mybutton onClick={() => history.push("./")}>Return</Mybutton >
    <Myul>    
        {listItems}
    </Myul>    
    </Home> 


);

}else if(status==="loading"){
    return "Cargando..."
}else {
    return (<>
    <Mybutton onClick={
        () => history.push("./")}>Return</Mybutton> 
    <h1>Ingrese correctamente el personaje</h1> </> )
}

}

const Home = styled.div`
background-color:  GreenYellow;
`;

const Myul = styled.ul`
    width: 100%;
    height: 100%;       
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
`;

const Myli = styled.li`
margin-bottom: 25px 
    
`;

const Mybutton = styled.button`
    cursor: pointer;
    margin-top:25px;
    margin-Left:25px;
    padding: 10px;
    font-weight: 600;
    background-color: Green;
    border: none;
    border-radius: 6px;
    transition: all ease-out 0.3s;

    &:hover {
      filter: brightness(0.8);
      transform: translateY(-4px);
    }
    `; 