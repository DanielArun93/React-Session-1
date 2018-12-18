import React, { Component } from 'react';
import './Form.css';
import Button from '../Button/Button';
import Input from '../Input/Input';


class Form extends Component {
   
    state = {
        tasks: [],
        task: ""
    }

    inputChangeHandler = (e) => {
        this.setState({
            task: e.target.value
        });

        //this.setState(prevState => ({ task: !prevState.task }));
    }

    submitHandler = () => {
  
        let final = [...this.state.tasks];
        if(this.state.task){
             final.push(this.state.task);
        }
        else{
            alert("No task Available");
        }
       
        this.setState({
            tasks: final
        })

        this.setState({
            task:""
        })
    }
    submit = (e) => {
        e.preventDefault();
    }

    deletehandler =(key) => {
        console.log(this);
        let dummy = [...this.state.tasks];
        console.log(dummy);
        dummy.splice(key,1);
        this.setState({
            tasks:dummy
        })
    }

    //bind of this sample

    // deletehandler(){
    //     console.log(this);
    // }

    render() {
        let displaytable = null;
        if (this.state.tasks.length !== 0) {
            displaytable = this.state.tasks.map((value, key) => {
                return (
                    <div key={key} className="slide">
                        <span>{value}</span><Button btntype="Danger" click={this.deletehandler.bind(key)}>Remove</Button>
                    </div>
                )
        })
        }
        return (
            <form className="Form" onSubmit={this.submit} name="taskForm">
                <Input type="text" name="taskname" label="TO DO TASKS" change={this.inputChangeHandler.bind(this)} value={this.state.task} />
                {displaytable}
                <Button btntype="Success" click={this.submitHandler}>Add Task</Button>
            </form>
        )
    }
}

export default Form;