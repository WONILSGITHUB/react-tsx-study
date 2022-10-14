import React, {useState} from "react";

interface GreetingsProps {
    onSubmit: (form: {name: string, description: string}) => void;
};

function Greetings({onSubmit}: GreetingsProps) {
    const [form, setForm] = useState({
        name: '',
        description: ''
    });
    const {name, description} = form;

    function onChange(e:React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    }

    function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        onSubmit(form);
        setForm({
            name: '',
            description: ''
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={name} onChange={onChange} />
            <input name="description" value={description} onChange={onChange} />
            <button type="submit">등록</button>
        </form>
    );
}

Greetings.defaultProps = {
    mask: '!!'
};

export default Greetings;