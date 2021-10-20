import React, { useState } from 'react'

const initialState = {
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
}

export default function ContactForm() {
    const [formData, setFormData] = useState(initialState)
    const [success, setSuccess] = useState(false)


    const handleChange = (event: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>): void => {
        
        setFormData({
            ...formData,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    return (
        <div className="contact-form__container">
            {
                success
                    ? <h3>THANKS FOR CONTACTING US.  WE&apos;LL GET BACK TO YOU AS SOON AS WE CAN.</h3>
                    : < form className="contact-form" onSubmit={() => { }}>
                        <div>
                            <label>NAME:</label>
                            <input name="name" value={formData.name} onChange={handleChange} />
                        </div>
                        <div>
                            <label>EMAIL:</label>
                            <input name="email" value={formData.email} onChange={handleChange} />

                        </div>
                        <div>

                            <label>PHONE NUMBER:</label>
                            <input name="phone" value={formData.phone} onChange={handleChange} />
                        </div>
                        <div>
                            <label>SUBJECT:</label>
                            <input name="subject" value={formData.subject} onChange={handleChange} />
                        </div>
                        <div>
                            <label>MESSAGE:</label>
                            <textarea name="message" value={formData.message} onChange={handleChange} />
                        </div>
                        <input type='submit' />
                    </form >
            }
        </div>
    )
}
