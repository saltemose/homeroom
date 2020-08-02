import React from 'react';
import './dashboard.css';
import SidebarItem from './sidebar_item';
import StudentLink from './student_link_container';

class Dashboard extends React.Component {
  constructor(props) {
      super(props);

      this.state = {
          topic: '',
          topicKey: '',
          initialMessageID: '',
          initialClass: '',
          selectedClass: '',
          selectedTopic: '',
          message: '',
          newMessage: 'no',
          newAssignment: 'no',
          assignment: 'no',
          discussionTopics: 'no',
          assignmentDescription: '',
          assignments: 'yes',
          pageContent: '',
          assignmentTopic: '',
          file: '',
          dateDue: '',
          discussion: '',
          newClass: '',
          addNewClass: 'no',
          dm: '',
      }
      this.updateTopic = this.updateTopic.bind(this);
      this.updateMessage = this.updateMessage.bind(this);
      this.handleMessageClick = this.handleMessageClick.bind(this);
      this.handleAssignmentClick = this.handleAssignmentClick.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.createAssignment = this.createAssignment.bind(this);
      this.handleDiscussionClick = this.handleDiscussionClick.bind(this);
      this.handleNewAssignment = this.handleNewAssignment.bind(this);
      this.handlePageContent = this.handlePageContent.bind(this);
      this.updateAssignmentDescription = this.updateAssignmentDescription.bind(this);
      this.updateAssignmentTopic = this.updateAssignmentTopic.bind(this);
      this.updateSelectedClass = this.updateSelectedClass.bind(this);
      this.updateSelectedTopic = this.updateSelectedTopic.bind(this);
      this.updateTopicState = this.updateTopicState.bind(this);
      this.updateDiscussion = this.updateDiscussion.bind(this);
      this.addToDiscussion = this.addToDiscussion.bind(this);
      this.milToStandard = this.milToStandard.bind(this);
      this.formatDate = this.formatDate.bind(this);
      this.formatMainDate = this.formatMainDate.bind(this);
      this.addClass = this.addClass.bind(this);
      this.addNewClass = this.addNewClass.bind(this);
      this.updateClassName = this.updateClassName.bind(this);
      this.openDM = this.openDM.bind(this);
      this.updateDM = this.updateDM.bind(this);
      this.createDM = this.createDM.bind(this);
 
  } 

  componentDidMount() {
    this.props.fetchClasses(this.props.currentUser.id)
    this.props.fetchMessages(this.state.selectedClass);
    this.props.fetchDiscussions(this.state.messageID);
    this.props.fetchAllDirectMessagesA(this.props.currentUser.id);
    this.props.fetchAllDirectMessagesB(this.props.currentUser.id);
    this.props.fetchStudents();
    if (this.props.classes) {
        this.state.selectedClass = this.props.classes['0'].name
    }
  }

  componentDidUpdate() {
      if (this.state.selectedClass !== this.state.initialClass){
      this.props.fetchMessages(this.state.selectedClass);
      this.state.initialClass = this.state.selectedClass;
      this.state.selectedTopic = '' }
      if (this.state.initialMessageID !== this.state.messageID) {
      this.props.fetchDiscussions(this.state.messageID);
      this.state.initialMessageID = this.state.messageID};
    }


    milToStandard(value) {
        if (value !== null && value !== undefined){ //If value is passed in
          if(value.indexOf('AM') > -1 || value.indexOf('PM') > -1){ //If time is already in standard time then don't format.
            return value;
          }
          else {
            if(value.length === 5){ //If value is the expected length for military time then process to standard time.
              var hour = value.substring ( 0,2 ); //Extract hour
              var minutes = value.substring ( 3,5 ); //Extract minutes
              var identifier = 'AM'; //Initialize AM PM identifier
       
              if(hour === 12){ //If hour is 12 then should set AM PM identifier to PM
                identifier = 'PM';
              }
              if(hour === 0 && hour.length ===2){ //If hour is 0 then set to 12 for standard time 12 AM
                hour=12;
              }
              if(hour > 12){ //If hour is greater than 12 then convert to standard 12 hour format and set the AM PM identifier to PM
                hour = hour - 12;
                identifier='PM';
              }
              if (hour < 10 && hour.length === 2) {

                  hour = hour[1]
              }
              return hour + ':' + minutes + ' ' + identifier; //Return the constructed standard time
            }
            else { //If value is not the expected length than just return the value as is
              return (
              <div>
                  {value}
              </div>)
            }
          }
        }
      };
      formatDate(date) {
        var month = date.substring(0,2);
        var day = date.substring(3,5);
        if (month === '01') {
          month = "January"
        }
        if (month === '02') {
          month = "February"
        }
        if (month === '03') {
          month = "March"
        }
        if (month === '04') {
          month = "April"
        }
        if (month === '05') {
          month = "May"
        }
        if (month === '06') {
          month = "June"
        }
        if (month === '07'){
        month = "July"}
        if (month === '08') {
          month = "August"
        }
        if (month === '09') {
          month = "September"
        }
        if (month === '10') {
          month = "October"
        }
        if (month === '11') {
          month = "November"
        }
        if (month === '12') {
          month = "December"
        }
        return (
            <div className="discussion-date">
                {month} {day}
            </div>
        )
  
    }

  formatMainDate(date) {
      var month = date.substring(0,2);
      var day = date.substring(3,5);
      if (month === '01') {
        month = "January"
      }
      if (month === '02') {
        month = "February"
      }
      if (month === '03') {
        month = "March"
      }
      if (month === '04') {
        month = "April"
      }
      if (month === '05') {
        month = "May"
      }
      if (month === '06') {
        month = "June"
      }
      if (month === '07'){
      month = "July"}
      if (month === '08') {
        month = "August"
      }
      if (month === '09') {
        month = "September"
      }
      if (month === '10') {
        month = "October"
      }
      if (month === '11') {
        month = "November"
      }
      if (month === '12') {
        month = "December"
      }
      return (
          <div className="discussion-date-main">
              {month} {day}
          </div>
      )

  }


  handleMessageClick() {
      this.state.newMessage === 'no' ? this.setState({newMessage: 'yes'}) : this.setState({newMessage: 'no'})
  }

  handleAssignmentClick() {
      this.state.assignment === 'no' ? this.setState({assignment: 'yes'}) : this.setState({assignment: 'no'})
  }

  handleDiscussionClick() {
      this.state.discussionTopics === 'no' ? this.setState({discussionTopics: 'yes'}) : this.setState({discussionTopics: 'no'})
  }

  handleNewAssignment() {
      this.state.newAssignment === 'no' ? this.setState({newAssignment: 'yes'}) : this.setState({newAssignment: 'no'})
  }

  handlePageContent(eachKey) {
      this.setState({pageContent: this.props.messages[eachKey].about})
  }

  updateSelectedClass(key) {
    this.setState({selectedClass: key, messageID: ''})
  }


  handleSubmit(e) {
    e.preventDefault();
    let message = {
      about: this.state.topic,
      content: this.state.message,
      author: `${this.props.currentUser["first_name"] + " " + this.props.currentUser["last_name"]}`,
      classID: this.state.selectedClass
    };

    this.props.composeMessage(message); 
    this.setState({newMessage: 'no'})
  }

  createAssignment() {
    let assignment = {
        name: this.state.assignmentTopic,
        description: this.state.assignmentDescription,
        content: this.state.assignmentContent,
        dateDue: this.state.dateDue,
        classID: '1'
    }
    this.props.composeAssignment(assignment); 
  }

  updateTopic(e) {
    this.setState({
      topic: e.currentTarget.value
    });
  }

  updateSelectedTopic(topic, key) {
      this.setState({
          selectedTopic: `${topic}`, messageID: `${key}`
      })
  }

  updateAssignmentTopic(e) {
      this.setState({
          assignmentTopic: e.currentTarget.value
      })
  }

  updateMessage(e) {
    this.setState({
        message: e.currentTarget.value
      });
  }

  updateAssignmentDescription(e) {
      this.setState({
          assignmentDescription: e.currentTarget.value
      })
  }

  updateTopicState() {
    this.setState({selectedTopic: `${this.props.messages["0"].about}`, messageID: `${this.props.messages["0"]._id}`})
  }

  updateDiscussion(e) {
    this.setState({
        discussion: e.currentTarget.value
    })}

  addToDiscussion() {
    let discussion = {
      content: this.state.discussion,
      author: `${this.props.currentUser["first_name"] + " " + this.props.currentUser["last_name"]}`,
      messageID: this.state.messageID
    };

    this.props.composeDiscussionMessage(discussion); 
    this.setState({discussion: ''})
  }

  addNewClass() {
      this.state.addNewClass === 'no' ? 
      this.setState({addNewClass: 'yes'}) : this.setState({addNewClass: 'no'})
  }

  addClass(e) {
    let newClass = {
        name: this.state.newClass,
        users: [this.props.currentUser.id, '5f04d225aa609793973dee66', '5f15e143cad7e60649a8a7a4'
    ]
    };
    this.props.createClass(newClass)
    this.setState({newClass: ''})
  }
  
  updateClassName(e) {
      this.setState({newClass: e.currentTarget.value})
  }

  openDM(studentID, studentName) {
   this.setState({selectedStudent: studentID, selectedStudentName: studentName});
   if (this.props.currentUser.id > studentID){
    this.props.fetchDirectMessages(this.props.currentUser.id, studentID);
    }
    else {
    this.props.fetchDirectMessages(studentID, this.props.currentUser.id);
    }
  }

  updateDM(e) {
      this.setState({dm: e.currentTarget.value})
  }

  createDM() {
  
    if (this.props.currentUser.id > this.state.selectedStudent){
        let dm = {
            participantA: this.props.currentUser.id,
            participantB: this.state.selectedStudent,
            content: this.state.dm,
            author: this.props.currentUser.first_name
        }
        this.props.composeDirectMessage(dm);
        this.setState({dm: ''})
    }
    else {
        let dm = {
            participantA: this.state.selectedStudent,
            participantB: this.props.currentUser.id,
            content: this.state.dm,
            author: this.props.currentUser.first_name
        }
        this.props.composeDirectMessage(dm);
        this.setState({dm: ''})
    }


 

  }


  render() {

    const firstName = this.props.currentUser["first_name"];
    const lastName = this.props.currentUser["last_name"];
    const type = this.props.currentUser["type"]
    const classes = this.props.classes;
    const dmsA = this.props.allDMsA;
    const dmsB = this.props.allDMsB;
    const messages = this.props.messages;
    var previousDate = ''
    var date = ''
    var previousDMDate = ''
    var DMdate = ''
   if (classes  && this.state.selectedClass === '') {
        this.setState({selectedClass: classes['0'].name})}
    else {}
    if (messages.hasOwnProperty["about"] && this.state.selectedTopic === '') {
        this.setState({selectedTopic: messages['0'].about})
    }

    return (
    
        classes ? (
        <div className="full-app-2">
        <div className="dashboard">
                <div onClick={this.handleNewAssignment} className={this.state.newAssignment === 'no' ? "hidden" : "new-message-background"}> </div>
                               <div className={this.state.newAssignment === 'no' ? "hidden" : "new-message"}>
                               <form>
                               <input className="input-tag" placeholder="Topic" onChange={this.updateAssignmentTopic} value={this.state.assignmentTopic}></input>
                               <textarea className="input-message" value={this.state.assignmentDescription} onChange={this.updateAssignmentDescription} placeholder="Description of assignment..."></textarea>
                               <div className="date-input">
                               Date Due:<input type="date" value={this.state.dateDue}></input>
                                   </div>
                               <input type="file" name="file" className="custom-file-input"/>
                              
                               <input className="submit" type="submit" value="Create Assignment" onClick={this.handleSubmit}></input>
                               </form>
                               </div>

                               <div onClick={this.handleMessageClick} className={this.state.newMessage === 'no' ? "hidden" : "new-message-background"}> </div>
                               <div className={this.state.newMessage === 'no' ? "hidden" : "new-message"}>
            <form>
            <div className="">You can ask a question for the class, or if you have helpful hints to understanding a topic, share! <br/> <br/></div>
            <input className="input-tag" placeholder="Topic" onChange={this.updateTopic} value={this.state.topic}></input>
            <textarea className="input-message" placeholder="Write your message..." value={this.state.message} onChange={this.updateMessage}></textarea>
            <input className="submit" type="submit" value="Create Topic" onClick={this.handleSubmit}></input>
            </form>
            </div>

            <div onClick={this.addNewClass} className={this.state.addNewClass === 'no' ? "hidden" : "new-message-background"}> </div>
                               <div className={this.state.addNewClass === 'no' ? "hidden" : "new-message"}>
            <form onSubmit={this.addClass}>
            <div className="">Add a new class<br/> <br/></div>
            <input className="input-tag" placeholder="Class name" onChange={this.updateClassName} value={this.state.newClass}></input>
            <input className="submit" type="submit" value="Create Class" ></input>
            </form>
            </div>

            <div className="col-a">
            <div className="classrooms">
           
                    {Object.keys(classes).map((key) => {
                        return (
            <div onClick={() => this.updateSelectedClass(`${classes[key].name}`)} className={this.state.selectedClass === `${classes[key].name}` ? "class-room-selected" : "class-room"}>
            <div className="class-name"> {classes[key].name} </div>
                </div>)
                    })}
                   <div className="class-room-add">
                    <div onClick={this.addNewClass} className="class-name-add">
                    Add Class
                    </div>
                   </div>
                   <div className="class-room-add">
                    <div className="class-name-add">
                    Remove Class
                    </div>
                   </div>
        
            </div>
            </div>

            <div className="col-1">
            <div className="messages">
            <div className="sidebar-item-a">
                <div className="sidebar-item-inside">
            
            <div className="user-name"><h4>{firstName} {lastName}</h4> <br/><div className="type">{type}</div> &nbsp; </div>
            </div>
            </div>
            <div onClick={this.handleDiscussionClick} className="message-link">
            <div className="sidebar-item">
            <div className="main"> <div className="left">
            <h5 >Discussion Topics</h5></div> <div className="right"> <span className="chevron-right"><i class={this.state.discussionTopics === 'no' ? "fa fa-chevron-down" : "fa fa-chevron-up"}></i></span></div>
            </div>
            
            </div>
            </div>
            <div className={this.state.discussionTopics === 'no' ? "discussion-topics" : "discussion-topics-open"}>
                {
                    this.props.newMessage ?
                   <SidebarItem key={this.props.newMessage._id} messageID={this.props.newMessage._id} currentDashboardTopic={this.state.selectedTopic} selectedTopic={this.updateSelectedTopic} topic={this.props.newMessage.about}/> : <div></div>
                }
               { Object.keys(this.props.messages).map((eachKey) => {
                    return <SidebarItem key={this.props.messages[eachKey]._id} messageID={this.props.messages[eachKey]._id} currentDashboardTopic={this.state.selectedTopic} selectedTopic={this.updateSelectedTopic} topic={this.props.messages[eachKey].about} />
                })
            }
            </div>
            <div onClick={this.handleMessageClick} className="sidebar-item-click-a">
            Create New Topic of Discussion <i class="far fa-comment-alt-edit"></i>
       
            </div>

            <div onClick={this.handleAssignmentClick} className="message-link">
            <div className="sidebar-item">
            <div className="main"> <div className="left">
            <h5>Assignments</h5></div> <div className="right"> <span className="chevron-right"><i class={this.state.assignment === 'no' ? "fa fa-chevron-down" : "fa fa-chevron-up"}></i></span></div>
            </div>
            </div>
            </div>
            { type === "Teacher" ? (
                <div>
                           <div onClick={this.handleNewAssignment} className="sidebar-item-click-a">
                           Create New Assignment <i class="fal fa-layer-plus"></i>
                           </div>
                          
                </div>
            ): <div>
                </div>}
       
        
            </div>

            

            </div>
  

            <div className="col-2">
            <div className="board">

                    {Object.keys(this.props.messages).map((eachKey) => {
                        if (!this.props.discussions) {
                            return <div className="discussion-box-question"></div>
                        }
                        if (this.props.messages.length > 0 && this.state.selectedTopic === '') {
                            this.updateTopicState();
                        }
                        if (this.props.messages[eachKey].about === this.state.selectedTopic) 
                            return (
                                <div className="discussion-box-question">
                                <div className="selected-topic">
                                # {this.state.selectedTopic}
                                </div>
                                <div className="date-main">
                                {this.formatMainDate(this.props.messages[eachKey].dateCreated.slice(0,10).split('-').reverse().join('/').slice(0,5).split('/').reverse().join('/'))}
                                </div>     
                                <div className="author-main">
                                {this.props.messages[eachKey].author} 
                                </div>   
  
                                <div className="discussion-time-main">
                                {this.milToStandard(this.props.messages[eachKey].dateCreated.slice(11,16))}
                                </div>
                                <br/>
                                <div className="discussion">
                                    <div className="bubble">
                                    {this.props.messages[eachKey].content.trim()}
                                    </div>
                                </div>
                             
                            
                                </div>
                                )
                    })}


{
             (this.props.newMessage && (this.props.newMessage.about === this.state.selectedTopic)) ?
                           (
                                <div className="discussion-box-question">
                                <div className="selected-topic">
                                # {this.state.selectedTopic}
                                </div>
                                <div className="date-main">
                                {this.formatMainDate(this.props.newMessage.dateCreated.slice(0,10).split('-').reverse().join('/').slice(0,5).split('/').reverse().join('/'))}
                                </div>     
                                <div className="author-main">
                                {this.props.newMessage.author} 
                                </div>   
  
                                <div className="discussion-time-main">
                                {this.milToStandard(this.props.newMessage.dateCreated.slice(11,16))}
                                </div>
                                <br/>
                                <div className="discussion">
                                    <div className="bubble">
                                    {this.props.newMessage.content.trim()}
                                    </div>
                                </div>
                             
                            
                                </div>) : <div></div>
                                
                    }
                                <div className="dm-header">
                                <i class="fal fa-users-class"></i> {this.state.selectedClass} Class Discussion
                </div>
                    <div className="message-box-main">
  
                    <div className="message-box" placeholder="Write a message...">
                        
                    {Object.keys(this.props.discussions).map((eachKey) => {
                        if (this.props.discussions[eachKey].messageID === this.state.messageID) {
                      if (previousDate.slice(0,10) === this.props.discussions[eachKey].dateCreated.slice(0,10)) {
                          date = ''
                      } else {
                          date = this.props.discussions[eachKey].dateCreated
                          previousDate = this.props.discussions[eachKey].dateCreated.slice(0,10)
                      }
                        return (
                            <div className="discussion-box">
                            <div className="discussion-date"> 
                                {(date === '') ? '' : this.formatDate(date.slice(0,10).split('-').reverse().join('/').slice(0,5).split('/').reverse().join('/'))}
                            </div>
                            <div className="author">
                            {this.props.discussions[eachKey].author}
                            </div>
                            <div className="discussion-time">
                                 {this.milToStandard(this.props.discussions[eachKey].dateCreated.slice(11,16))}
                                    </div>
                             <div className="discussion">
                             <div className="bubble-container">
                    
                                   
                                    <div className="bubble-2">
                                    {this.props.discussions[eachKey].content.trim()}
                                    </div>
                           
                                    </div>

                                </div>
                            </div>)}

                    })} 
                    { ((this.props.newDiscussionMessage) && (this.props.newDiscussionMessage.messageID === this.state.messageID))? 
                             (
                                <div className="discussion-box">
                                <div className="author">
                                {this.props.newDiscussionMessage.author}
                                </div>
                                <div className="discussion-time">
                                 {this.milToStandard(this.props.newDiscussionMessage.dateCreated.slice(11,16))}
                                    </div>
                                 <div className="discussion">
                                     <div className="bubble-container">
                                        <div className="bubble-2">
                                        {this.props.newDiscussionMessage.content}
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            
                        )
                    : <div></div>}
                    </div>
           
                </div>          
                <div className="discussion-add">
                    <form onSubmit={this.addToDiscussion}>
                    <textarea value={this.state.discussion} onChange={this.updateDiscussion} placeholder="Add to discussion...">
                    </textarea>
                    <div className="discussion-clear-btn" onClick={() => this.setState({discussion: ''})}>Clear All</div>
                    <div className="discussion-add-btn" value="Add" onClick={this.addToDiscussion} type="submit">Add</div>
                    </form>
                </div>    
            </div>
       
            </div>


            <div className="col-3">
            <div className="student-list-sidebar">
                <div className="student-list-title">Direct Messages</div>
                <div className="dm-main-container">
                <div className={this.state.selectedStudentName ? "dm-header": "hidden"}>
                <i class="fal fa-comments-alt"></i> between You and {this.state.selectedStudentName} <span className="times"><i onClick={() => this.setState({selectedStudentName: undefined, selectedStudent: ''})} class="fal fa-times"></i></span>
                </div>
                <div className="dm-body-main-a">
                <div className="dm-body-main">
                <div className={this.state.selectedStudentName ? "dm-body" : "hidden"}>
                    {Object.keys(this.props.directMessages).map((eachDM) => {
                            if (previousDMDate.slice(0,10) === this.props.directMessages[eachDM].dateCreated.slice(0,10)) {
                                DMdate = ''
    
                            } else {
                                DMdate = this.props.directMessages[eachDM].dateCreated
                                previousDMDate = this.props.directMessages[eachDM].dateCreated.slice(0,10)
                    
                            }
                          
                        if (this.props.directMessages[eachDM].author === this.props.currentUser.first_name) {
                        return (
                            <div className="dm-body-message-2">
                                   <div className="dm-date"> 
                            {(DMdate === '') ? '' : this.formatDate(DMdate.slice(0,10).split('-').reverse().join('/').slice(0,5).split('/').reverse().join('/'))}
                            </div>
                            <div className="bubble-3">{this.props.directMessages[eachDM].content}</div><br/>
                            <div className="dm-time">
                                 {this.milToStandard(this.props.directMessages[eachDM].dateCreated.slice(11,16))}
                                    </div>
                            </div>)}
                        else {
                            return (
                                <div className="dm-body-message">
                                       <div className="dm-date"> 
                            {(DMdate === '') ? '' : this.formatDate(DMdate.slice(0,10).split('-').reverse().join('/').slice(0,5).split('/').reverse().join('/'))}
                            </div>
                                <div className="bubble-4">{this.props.directMessages[eachDM].content}</div><br/>
                                <div className="dm-time">
                                 {this.milToStandard(this.props.directMessages[eachDM].dateCreated.slice(11,16))}
                                    </div>
                                </div>
                            )
                        }
                    })}
                    {
                      (this.props.newDirectMessage && (this.props.newDirectMessage.participantA === this.props.currentUser.id || this.props.newDirectMessage.participantB === this.props.currentUser.id) && (this.props.newDirectMessage.participantA === this.state.selectedStudent || this.props.newDirectMessage.participantB === this.state.selectedStudent) ) ?

                    ((this.props.newDirectMessage.author === this.props.currentUser.first_name) ? 
                      (<div className="dm-body-message-2">
               <div className="bubble-3">{this.props.newDirectMessage.content}</div><br/>
               <div className="dm-time">
                {this.milToStandard(this.props.newDirectMessage.dateCreated.slice(11,16))}
                   </div>
               </div>) : (
                   <div className="dm-body-message">
                   <div className="bubble-4">{this.props.newDirectMessage.content}</div><br/>
                   <div className="dm-time">
                    {this.milToStandard(this.props.newDirectMessage.dateCreated.slice(11,16))}
                    </div>
                   </div>
               )) : (<div></div>)
                    }
                </div>
                </div>
                </div>
                <div className={this.state.selectedStudentName ? 'openDM' : 'hidden'}>
                <form onSubmit={this.createDM}>
                <input className='dm-input' type="text" placeholder="Type a message..." value={this.state.dm} onChange={this.updateDM}/>
                <span className="times-a"><i class="fal fa-paper-plane"></i></span>
                </form>
                </div>
               
                </div>
                <div className="student-links-container">
                <div className={this.state.selectedStudentName === undefined ? "student-links-full" : "student-links"}>
                {
                    Object.keys(this.props.students).map((eachStudent) => {

                        return (
                            <StudentLink key={this.props.students[eachStudent]._id} type={this.props.students[eachStudent].type} dmsA={dmsA} dmsB={dmsB} selectedStudent={this.openDM} currentUserID={this.props.currentUser.id} currentStudent={this.state.selectedStudent} student={this.props.students[eachStudent]}/>

                        )
                    })
                }
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>) : (<div></div>)
    )
  }
}

export default Dashboard;
