import React from 'react'

export default function TeamForm(props) {

    const {values, update, submit} = props

    const onChange = evt => {
        const {name, value} = evt.target
        update(name, value);
    }

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    return (
        <form className='form-container' onSubmit={onSubmit}>
            <div className='form-group inputs'>
                <label>Name</label>
                <input 
                name='memberName'
                type='text'
                value={values.memberName}
                onChange={onChange}
                />
                <label>Email</label>
                <input
                name='email'
                type='email'
                value={values.email}
                onChange={onChange}
                />
                <label>Role</label>
                <select name='role' value={values.role} onChange={onChange}>
                    <option value=''>----Select Role----</option>
                    <option value='backend'>Back End</option>
                    <option value='frontend'>Front End</option>
                    <option value='fullstack'>Full Stack</option>
                </select>
                <div className='submit'>
                    <button>Submit</button>
                </div>
            </div>
        </form>
    )
}