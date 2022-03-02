import React, {useState} from 'react';

function Contact() {
    const [formState, setFormState] = useState({name: '', email: '', message: ''})
    const {name, email, message} = formState;

    const handleChange = (event) => {
        setFormState({...formState, [event.target.name]: event.target.value})

        console.log(formState);
    }
    
    function handleSubmit(event) {
        event.preventDefault();
        console.log(formState)
    }

    return (
        <section>
            <h1>Contact Me</h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name</label>
                        <br></br>
                        <input type='text' defaultValue={name} name="name" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <br></br>
                        <input type='text' defaultValue={email} name="email" onChange={handleChange}/>
                    </div>
                    <div>
                        <label htmlFor='message'>Message</label>
                        <br></br>
                        <textarea type='text' defaultValue={message} name="message" onChange={handleChange}/>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;
