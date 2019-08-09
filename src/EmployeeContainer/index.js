import React, {Component} from 'react'
import CreateEmpolyee from '../CreateEmployee'
import EmployeeList from '../EmployeeList'
import EditEmployee from '../EditEmployee'

class EmployeeContainer extends Component {
    constructor(){
        super()

        this.state = {
            employees: [],
            employeeToEdit: {
                _id: null,
                name: '',
                position: '',
                birthDate: '', //needs to be a date??
                department: '',
                annualSalary: ''
            } 
        }
    }

    componentDidMount(){
        this.getEmployees();
    }

    addEmployee = async (employee, e) => {
        e.preventDefault();
        console.log(employee, e, 'inside of addEmployee')

        try{
            const createEmployee = await fetch('http://localhost:9000/api/v1/employee',{
                method: 'POST',
                // credentials: 'include'
                body: JSON.stringify(employee),
                headers: {
                    'Content-Type': 'application/json'
                }
            })  
            console.log(createEmployee,'<createEmployee fetch')
            if(createEmployee.status !== 200){
                throw Error('Resource Not Found')
            }
        }catch(err){
            console.log('addEmployee err:', err)
            return err
        }
    }

    getEmployees = async () => {
        try{
            const responseGetEmployees = await fetch('http://localhost:9000/api/v1/employee',{
                method: 'GET',
                // credentials: 'include'
            })
            console.log('responseGetEmployees -> ',responseGetEmployees)
            
            if(responseGetEmployees.status !== 200){
                throw Error('404 from server')
            }
            const employeeResponse = await responseGetEmployees.json();
            console.log('employeeResponse -> ',employeeResponse)

            this.setState({
                employees: [...employeeResponse.data]
            });
        }catch (err){
            console.log('getEmployee err -> ', err)
            return err
        }
    }

    render(){
        console.log(this.state, 'state in render')
        return(
            <div>
                <CreateEmpolyee addEmployee={this.addEmployee}/>
                <EmployeeList employees={this.state.employees}/>
            </div>
        )
    }
    
}

export default EmployeeContainer