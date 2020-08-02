import React from 'react';

class StudentLink extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageContent: '',
            selected: 'no',
        }
        this.selected = this.selected.bind(this);
        this.findLastMessage = this.findLastMessage.bind(this);
    }

componentDidMount() {

}

selected() {
    this.state.selected === 'no' ? this.setState({selected: 'yes'}) : this.setState({selected: 'no'})
}

findLastMessage() {
        var dmsAarray = [];
          Object.keys(this.props.dmsA).map((eachDM) => {
              dmsAarray.push(this.props.dmsA[`${eachDM}`].content)
              return (
                  <div>
                      {this.props.dmsA[`${eachDM}`].content}
                  </div>
              )
          })
}

  render() {
      const studentID = this.props.student._id;
      const currentUser = this.props.currentUserID;
      const firstName = this.props.student.first_name;
      const lastName = this.props.student.last_name;
      const dmsA = this.props.dmsA;
      const dmsB = this.props.dmsB;
      var dmsAarray = [];
      var dmsBarray = [];
      let lastMessage = ''
    if (this.props.dmsA) { 
        Object.keys(this.props.dmsA).map((eachDM) => {
            if ( (this.props.dmsA[eachDM].participantA === studentID || this.props.dmsA[eachDM].participantB === studentID) && (this.props.dmsA[eachDM].participantA === currentUser || this.props.dmsA[eachDM].participantB === currentUser) ) {
                lastMessage = this.props.dmsA[eachDM].content
            }
        })

    }
    if (this.props.dmsB) { 
        Object.keys(this.props.dmsB).map((eachDM) => {
            if ( (this.props.dmsB[eachDM].participantA === studentID || this.props.dmsB[eachDM].participantB === studentID) && (this.props.dmsB[eachDM].participantA === currentUser || this.props.dmsB[eachDM].participantB === currentUser) ) {
                lastMessage = this.props.dmsB[eachDM].content
            }
        })

    }
    return (
        <div onClick={() => this.props.selectedStudent(studentID, firstName)} className={currentUser === studentID ? "hidden" : this.props.currentStudent === studentID ? "student-link-selected" : "student-link"}>
              <div className="student-link-name">{firstName} {lastName} </div>    
              <div className="last-message-dm">{lastMessage}</div>

        </div>
    );
  }
}

export default StudentLink;