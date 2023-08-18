
//what if we want to show a list of names or colors and we don't want to create a seperate 
//list or component : we use props or propreties
//import { MouseEvent } from "react";
// { items: [], heading: string }
//we use interface to define the shape or the interface of an object
  //let selectedIndex = 0;
  //Hook : is a function that allows us to tap into built-ins in react
  //arr[0] //variable(selected index variable)
  //arr[1] //updater function(update the variable)  
  //const handleClick = (event: MouseEvent) => console.log(event);
  //const [name, setName] = useState('');// we don't need a name

import { useState } from "react";
import style from './ListGroup.module.css'
import styled from 'styled-components'

const List = styled.ul`
list-style: none;
padding: 0;
`;
interface ListItemProps{
  active: boolean;
}
const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${ props => props.active ? 'blue' : 'none'}
`
interface Props{
  items: string[];
  heading: string;
  onStelectItem: (item: string)=> void;
}
//import { MouseEvent } from "react";
  function ListGroup({items, heading, onStelectItem}: Props){
  
  
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  //event handler
  //const handleClick = (event : MouseEvent)=>console.log(event);
  //if (items.length === 0)
    // return<>
     //<h1>List</h1>
     //<p>No item found</p></>;
  
  
  
  return(
   <>
     <h1>{heading}</h1> 
     {items.length === 0 && <p>No item found</p>}
     <ul className="list-group" style={{ backgroundColor: 'yellow'}}>
     {items.map((item, index) => (
     <ListItem 
     active={index === selectedIndex}
     key={item} 
     onClick={() => {
    setSelectedIndex(index);
    onStelectItem(item);
    }}
     >
    {item}
    </ListItem>
     ))}
     </ul>
   </>
);
}





export default ListGroup;