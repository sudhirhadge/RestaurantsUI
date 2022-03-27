import React, { useState } from 'react'
import SingleCard from './SingleCard'
import Menu from './myMenuAPI'
import Navbar from './Navbar';

// const uniqueList = Menu.map((curElem)=>{
//     return curElem.category ; 
// }) this is used for all existing categories 

// const uniqueList = new Set(Menu.map((curElem) => {
//     return curElem.category;
// }));  this is object

const uniqueList = [...new Set(Menu.map((curElem) => {
    return curElem.category;
})), "All"]; //This is an array

/* Alternate solution to ...new Set  => how to find unique elements in Array ?

 let a = ["1", "1", "2", "3", "3", "1","4"];
 let unique = a.filter((curElem, index, curArr) => curArr.indexOf(curElem) === index);
 console.log(unique); */

console.log(uniqueList);

const MenuCards = () => {
    const [menuCardsData, SetMenuCardsData] = useState(Menu);
    const [menuList, SetmenuList] = useState(uniqueList);

    const filterItem = (cate) => {
        if (cate === "All") {
            return SetMenuCardsData(Menu)
        }
        const updateList = Menu.filter((curElem) => {
            return curElem.category === cate;
        })
        SetMenuCardsData(updateList);
    }

    return (
        <>
            <Navbar filterItem={filterItem} menuList={menuList} />
            <SingleCard MenuAsProps={menuCardsData} />
        </>
    )
}

export default MenuCards
