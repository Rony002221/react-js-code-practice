import React, { Component } from 'react';

class Form extends Component {
    
    constructor()
    {
        super();
        this.state = {
            fast_name : "",
            last_name : "",
            email : "",

        }

    }

    formSubmit = (event) => {

        var inputName = event.target.name;
        var inputValue = event.target.value;

        this.setState({[inputName] : inputValue});


        if (inputName === "fname")
        {
            var regex = /^[a-zA-Z ]{2,30}$/;
            if(!regex.test(inputValue))
            {
                this.setState({fname : "invalid input !!"});
            }
        }

        if (inputName === "lname")
        {
            var regex = /^[a-zA-Z ]{2,30}$/;
            if(!regex.test(inputValue))
            {
                this.setState({lname : "invalid input !!"});
            }
        }

        if (inputName === "email")
        {
            var regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if(!regex.test(inputValue))
            {
                this.setState({email : "invalid email address !!"});
            }
        }
    }
    
    
    render() {
        return (
            <div>

                <hr />
                <h3>First Name : {this.state.fname}</h3> 
                <h3>Last Name : {this.state.lname}</h3> 
                <h3>Email : {this.state.email}</h3> <br />
                <hr />

                <form action="">
                    <input onChange = {this.formSubmit} type="text" name = "fname" placeholder = "first name" />
                    <br />
                    <input onChange = {this.formSubmit} type="text" name = "lname" placeholder = "last name"/>
                    <br />
                    <input onChange = {this.formSubmit} type="text" name = "email" placeholder = "email" />
                    <br />
                    <input type="submit" value = "Save" name = "submit" />
                </form>

            </div>
     
     
     );
    }
}

export default Form;
