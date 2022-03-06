import React from 'react';
import PersonAdd from './ProblemAdder';
import CodeModel from './CodeModel';

export default class ProblemInterface extends React.Component {
  state = {
    addProblem: false,
    sendCode:false
  }
  handleChangeProblemAdd = event => {
    this.setState({
      addProblem: !this.state.addProblem
    });
  }
  handleChangeSendCode = event => {
    this.setState({
      sendCode: !this.state.sendCode
    });
  }


  render() {

    let showAddProblem = this.state.addProblem?<PersonAdd></PersonAdd>:<div></div>
    let showSendCode = this.state.sendCode?<CodeModel></CodeModel>:<div></div>

    return (
      
      <div>
        <button type="submit" onClick={this.handleChangeProblemAdd}>Add Problem</button>
        {showAddProblem}
        <button type="submit" onClick={this.handleChangeSendCode}>Send Code</button>
        {showSendCode}
      </div>

    )
  }
}
