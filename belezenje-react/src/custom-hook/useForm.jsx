import React, {useState} from 'react';

const useForm = (initialState = {}) => {
    const [formData, setFormData] = useState(initialState);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    return { formData, handleChange };
}

export default useForm;