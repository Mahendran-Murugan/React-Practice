import React, {useState} from 'react'

export const ListRendering = () => {
    const[list, setList] = useState([])
    const[object, setObject] = useState(
        {
            fname:"",
            lname:"",
            age:0,
        }
    )

    function handleChange(e){
        setObject({...object , [e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        setList([...list,object])
        console.log(list)
        e.preventDefault();
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input type='text' name = "fname" value = {object.fname} onChange={handleChange}/><br/>
        <label>Last Name:</label>
        <input type='text' name = "lname" value = {object.lname} onChange={handleChange}/><br/>
        <label>Age:</label>
        <input type='number' name = "age" value = {object.age} onChange={handleChange}/><br/>
        <button type='submit'>Submit</button>
        </form>
        <table>
            <thead>
                <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {   list.map(x => (
                    <tr>
                    <td>{x.fname}</td>
                    <td>{x.lname}</td>
                    <td>{x.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}
