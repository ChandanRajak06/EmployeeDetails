import React , {Component} from "react"
import Calculator from "./Calculator";

class Employe extends Component(){
    constructor(){
        super();
        this.state={
            Employee:[
                {Id:101,name:"Raju",city:"indore",salary:23563},
                {Id:101,name:"Raju",city:"indore",salary:23563},
                {Id:101,name:"Raju",city:"indore",salary:23563},
                {Id:101,name:"Raju",city:"indore",salary:23563},
                {Id:101,name:"Raju",city:"indore",salary:23563}
                    ]
                   }
                 }

    render(){
        return(
            <div>
               <table>
                <tr className="heading">
                    <th>ID</th>
                    <th>Name</th>
                    <th>City</th>
                    <th>Salary</th>
                </tr>
                {this.state.Employee.map((emp,index) =>{
                return(
                    <tr>
                    <td>{emp.Id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.city}</td>
                    <td>{emp.salary}</td>
                </tr>
                );
            })}
                
               </table>
               <Calculator />
            </div>
        )
    }    
}
export default Employe;
