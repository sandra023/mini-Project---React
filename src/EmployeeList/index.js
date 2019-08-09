import React from 'react'


const Employees =(props) => {
    console.log('props in Employee List -> ',props)

    const employeeList = props.employees.map((employee)=>{
        return(
            <li key={employee._id}>
                <span>{employee.name}</span><br/>
                <span>{employee.position}</span><br/>
                <span>{employee.birthDate}</span><br/>
                <span>{employee.department}</span><br/>
                <span>${employee.annualSalary}</span><br/>
                <button>Delete Employee</button><br/>
                <button>Edit Employee</button>
            </li>
        )
    })

    return (
        <div>
            <h3>Employee List</h3>
            <ul>
                {employeeList}
            </ul>
        </div>
    )
}

export default Employees