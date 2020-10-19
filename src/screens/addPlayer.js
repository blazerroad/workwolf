import React from "react"
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux';
import { Add } from "../store/actions/PlayerFacad"
import { Player } from "../store/models/Player"

import '../App.css';

export const AddPlayer = () => {
    const { register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = handleSubmit(({ firstName, lastname, birthDate, age, number }) => {
        dispatch(Add(new Player(firstName, lastname, birthDate, age, number)))
    });

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input className="Txt-field" type="text" placeholder="firstName" name="firstName" ref={register({ required: true })} />
            </div>
            <div>
                <input className="Txt-field" type="text" placeholder="lastname" name="lastname" ref={register({ required: true })} />
            </div>
            <div>
                <input className="Txt-field" type="datetime" placeholder="birthDate" name="birthDate" ref={register({ required: true })} />
            </div>
            <div>
                <input className="Txt-field" type="number" placeholder="age" name="age" ref={register({ required: true })} />
            </div>
            <div>
                <input className="Txt-field" type="number" placeholder="number" name="number" ref={register({ required: true })} />
            </div>
            <div>
                <select className="Txt-field" name="position" ref={register}>
                    <option value="Striker">Striker</option>
                </select>
            </div>

            <input className="Txt-field" type="submit" />
        </form>)
}