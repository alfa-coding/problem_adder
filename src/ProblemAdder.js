import React from 'react';
import axios from 'axios';

export default class ProblemAdder extends React.Component {
    state = {
        name: '',
        description: '',
        timesSolved: 0,
        languageName: '',
        extension: '',
        milisecondsAllowed: 0,
        entryPoint: '',
        headersAllowed: '',
        boilerplate: '',
        expectedInput: '',
        expectedOutput: '',
        extension_sol: '',
        code: '',
    }

    handleChangeName = event => {
        this.setState({
            name: event.target.value
        });
    }
    handleChangeDescription = event => {
        this.setState({
            description: event.target.value
        });
    };
    handleChangeLangName = event => {
        this.setState({
            languageName: event.target.value
        });
    };
    handleChangeExt = event => {
        this.setState({
            extension: event.target.value
        });
    };
    handleChangeEntry = event => {
        this.setState({
            entryPoint: event.target.value
        });
    };
    handleChangeHeaders = event => {
        this.setState({
            headersAllowed: event.target.value
        });
    };
    handleChangeBoilerPlate = event => {
        this.setState({
            boilerplate: event.target.value
        });
    };
    handleChangeExpInp = event => {
        this.setState({
            expectedInput: event.target.value
        });
    };
    handleChangeExpOut = event => {
        this.setState({
            expectedOutput: event.target.value
        });
    };

    handleChangeExtSol = event => {
        this.setState({
            extension_sol: event.target.value
        });
    };

    handleChangeCode = event => {
        this.setState({
            code: event.target.value
        });
    };
    handleSubmit = event => {
        event.preventDefault();

       
        const problem = {

            "Name": this.state.name,
            "Description": this.state.description,
            "TimesSolved": 0,
            "LanguageInformation": [
                {
                    "LanguageName": this.state.languageName,
                    "Extension": this.state.extension,
                    "MilisecondsAllowed": 0,
                    "EntryPoint": this.state.entryPoint,
                    "HeadersAllowed": this.state.headersAllowed,
                    "Boilerplate": this.state.boilerplate
                }
            ],
            "TestCasesToDraw": [
                {
                    "ExpectedInput": this.state.expectedInput,
                    "ExpectedOutput": this.state.expectedOutput
                }
            ],
            "Solutions": [
                {
                    "Extension": this.state.extension_sol,
                    "Code": this.state.code
                }
            ]
        };

        axios.post(`https://localhost:5001/Problem`, problem, )
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
                        Problem Name:
                        <input type="text" name="name" onChange={this.handleChangeName} /><br></br>
                        Problem desc:
                        <input type="text" name="description" onChange={this.handleChangeDescription} /><br></br>
                        Problem languageName:
                        <input type="text" name="languageName" onChange={this.handleChangeLangName} /><br></br>
                        Problem extension:
                        <input type="text" name="extension" onChange={this.handleChangeExt} /><br></br>
                        Problem entryPoint:
                        <textarea cols="80" rows="20" name="entryPoint"  onChange={this.handleChangeEntry} /><br></br>
                        Problem headersAllowed:
                        <textarea cols="80" rows="5" name="headersAllowed" onChange={this.handleChangeHeaders} /><br></br>
                        Problem boilerplate:
                        <textarea cols="80" rows="5" name="boilerplate" onChange={this.handleChangeBoilerPlate} /><br></br>
                        Problem expectedInput:
                        <textarea cols="80" rows="5" name="expectedInput" onChange={this.handleChangeExpInp} /><br></br>
                        Problem expectedOutput:
                        <textarea cols="80" rows="5" name="expectedOutput" onChange={this.handleChangeExpOut} /><br></br>
                        Problem extension_sol:
                        <input type="text" name="extension_sol" onChange={this.handleChangeExtSol} /><br></br>
                        Problem code:
                        <textarea cols="80" rows="20" name="code" onChange={this.handleChangeCode} /><br></br>
                    </label>
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}
