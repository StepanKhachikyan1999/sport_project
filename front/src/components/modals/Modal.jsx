// styles
import "./modals.scss"


import * as React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

// custom imports
import closeButton from '../../images/closeIcon.svg'
import {goAddTechnician} from "../../redux/actions/addTechnicianAction";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function NestedModal() {
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [error, setError] = useState(false)
    const [data, setData] = useState({
        username: '',
        password: ''
    })

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };


    const onChangeHandler = event => {
        data[event.target.name] = event.target.value;
        setData(data)
    }

    const addTechnicianHandler = e => {
        e.preventDefault()
        if (!data.username || !data.password.trim()) {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
        } else {
            dispatch(goAddTechnician(data))
            handleClose()
        }
    }


    return (
        <div>
            <Button className="link" onClick={handleOpen}>+ Add new technic</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >

                    <div className="container_modal">
                        <form onChange={onChangeHandler} onSubmit={addTechnicianHandler} id="contact">
                            <h3>Add new Technic</h3>
                            <fieldset>
                                <input
                                    placeholder="Username Technic"
                                    type="text"
                                    tabIndex="1"
                                    name='username'
                                    required
                                    autoFocus/>
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Email"
                                    type="email"
                                    tabIndex="2"
                                    required/>
                            </fieldset>
                            <fieldset>
                                <input
                                    placeholder="Password"
                                    type="text"
                                    name='password'
                                    tabIndex="3"
                                    required/>
                            </fieldset>
                            <fieldset>
                                <button type="submit" id="contact-submit">
                                    Save
                                </button>
                            </fieldset>
                            <div onClick={handleClose} className="closeBtn">
                                <img src={closeButton} alt="close icon"/>
                            </div>
                        </form>
                    </div>
            </Modal>
        </div>
    );
}