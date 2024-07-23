import React , {Component} from "react"

class Todo extends Component{
    constructor(){
        super();
        this.state={
            todo :[
                {Todolist1:"Hello"},
                {Todolist2:"Hyy"},
                {Todolist3:"Byy"}
            ]
        }
    }
    add = () =>{
        var ob={
            todobox:this.todobox.value
        }
        this.setState({todo:[...this.state.todo,ob]})
    }
    render(){
        return(
            <div>
                <h1>Todo List</h1>
                <input ref={c=>this.todobox=c} placeholder="Create Todo"></input>
                <button onClick={this.add}>Submit</button>
                {this.state.todo.map((todo,index)=>{
                    return(
                        <table>
                            <tr>
                                <td>{index+1}</td>
                                <td>{todo.Todolist1}</td>
                                <td>{todo.Todolist2}</td>
                                <td>{todo.Todolist3}</td>
                                
                            </tr>
                        </table>
                    )
                })}
            </div>
        )
    }
}

export default Todo;