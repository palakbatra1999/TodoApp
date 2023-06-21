import React, { useState } from 'react'
import './todo.css';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import EditNoteIcon from '@mui/icons-material/EditNote';


const Todolistitem = (props) => {

    const [line, setline] = useState(true);
    const checkaction = () => {
        if (line == false)
            setline(true);
        else setline(false);
    }


    return (
        <>
            <div className='todo_style'>
                <span onClick={checkaction}>{line ? <CheckBoxOutlineBlankIcon className='checkicon' /> : < CheckBoxIcon className='checkicon' />}</span>

                <li className='listitem' style={{ textDecoration: line ? "none" : "line-through" }}>{props.text}</li>
                {/* // conditional rendering  and we setting line's state using useState in inline styling  */}

                <div className='deleteicon'>
                    <DeleteOutlineOutlinedIcon onClick={() => {
                        props.onSelect(props.id)
                    }} />
                </div>
                <div className='editicon'>
                    <EditNoteIcon onClick={() => {
                        props.oneditSelect(props.id)
                    }} />
                </div>
            </div>
        </>
    )
};

export default Todolistitem;