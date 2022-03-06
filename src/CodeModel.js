import React from 'react';
import axios from 'axios';

export default class CodeModel extends React.Component {
    state = {
        id: '',
        code: '',   
        extension: '',
    }

    handleChangeId = event => {
        this.setState({
            id: event.target.value
        });
    };
    handleChangeExt = event => {
        this.setState({
            extension: event.target.value
        });
    };
    handleChangeCode = event => {
        this.setState({
            code: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();
    
       
        const code_solution = { 
                    "id":this.state.id,
                    "extension": this.state.extension,
                    "sourceCode": this.state.code
                
            
        };

        axios.post(`https://localhost:5002/Code`, code_solution, )
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }

    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Problem id:
                        <input type="text" name="id" onChange={this.handleChangeId} /><br></br>
                        Problem extension:
                        <input type="text" name="extension" onChange={this.handleChangeExt} /><br></br>
                        Problem code:
                        <textarea cols="80" rows="20" name="code" onChange={this.handleChangeCode} /><br></br>
                    </label>
                    <button type="submit">Submit Solution</button>
                </form>
            </div>
        )
    }
}
