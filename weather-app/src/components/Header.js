import { useState } from 'react'
import { userForm } from '../context/FormContext';

function Header() {
    const [form, setForm] = userForm();
    return (
        <div className="dropdown">
            <select name="city" id="" >
                <option value="istanbul">İstanbul</option>
                <option value="ankara">Ankara</option>
                <option value="izmir">İzmir</option>
            </select>
        </div>
    )
}

export default Header
