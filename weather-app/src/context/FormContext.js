import { createContext, useState, useEffect, useContext } from "react";

const FormContext = createContext();

export const FormrProvider = ({ children }) => {
    const [form, setForm] = useState("");

    const values = {
        form,
        setForm,
    };
    console.log(form)
    return <FormContext.Provider value={values}>{children}</FormContext.Provider>

}

export const useForm = () => useContext(FormContext);