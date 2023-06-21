import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import './todo.css';
import Todolistitem from './Todolistitem';
import EditNoteIcon from '@mui/icons-material/EditNote';

const TodousingMaterial = () => {

    const [inputList, setinputList] = useState("");
    const [items, setitems] = useState([]);
    const [togglesubmit, settogglesubmit] = useState(true);
    const [isitem, setIseditItem] = useState(null);

    const itemEvents = (event) => {
        setinputList(event.target.value);
    };

    const btnclick = () => {

        if (!inputList) {
            alert('Please enter something to add !')
        }
        else if (inputList && !togglesubmit) {
            setitems(
                items.map((elem) => {
                    if (elem.id === isitem) { return { ...elem, name: inputList } }
                    return elem;
                })

            )
            settogglesubmit(true);
            setinputList("");
            setIseditItem(null);
        }
        else {
            const allinputData = { id: new Date().getTime().toString(), name: inputList }
            setitems((olditems) => {
                return [...olditems, allinputData];
            })
            setinputList("");    // This is added to make the input empty again after adding the item in the list
        }
    }

    const editItem = (id) => {
        console.log('editing');


        const neweditItem = items.find((elem) => {           //this is doen to fetch the item that needs to be editted.
            return elem.id === id;
        });
        console.log(neweditItem);
        settogglesubmit(false);
        setinputList(neweditItem.name);
        setIseditItem(neweditItem.id);
    }




    const deleteItem = (id) => {
        console.log("deleted")
        setitems((olditems) => {
            return olditems.filter((elem) => {
                return elem.id !== id;
            })
        })
    }

    return (
        <>
            <div className='main_div'>
                <div className='center_div'>

                    <br />
                    <h1 style={{ color: "white" }}>Add your List here</h1>
                    <br />
                    <input type="text" name="inputItem" placeholder='Add your item here' onChange={itemEvents} value={inputList} className='input' />
                    {
                        togglesubmit ? <span className="plusicon" tittle="Add" onClick={btnclick}><AddIcon /></span> :
                            <span className="plusicon" tittle="Update" onClick={btnclick}><EditNoteIcon /></span>
                    }
                    <div className='list'>
                        <ol>

                            {
                                items.map((elem) => {
                                    return <Todolistitem key={elem.id} id={elem.id} text={elem.name} onSelect={deleteItem} oneditSelect={editItem} />;   // using props of text and sending the value of text 
                                })
                            }
                        </ol>
                    </div>

                </div>
            </div>
        </>
    )
}

export default TodousingMaterial;