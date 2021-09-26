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
    return (
        <form>
            <label>NAME:</label>
            <input name="name" value={formData.name}/>
            <label>EMAIL:</label>
            <input name="email" value={formData.email} />
            <label>PHONE NUMBER:</label>
            <input name="phone" value={formData.phone} />
            <label>SUBJECT:</label>
            <input name="subject" value={formData.subject} />
            <textarea name="message" value={formData.message}/>
            <input type='submit'/>
        </form>
    )
}
