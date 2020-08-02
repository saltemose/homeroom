import React from 'react';

class SidebarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageContent: '',
            selected: 'no',
        }
        this.selected = this.selected.bind(this)
    }

selected() {
    this.state.selected === 'no' ? this.setState({selected: 'yes'}) : this.setState({selected: 'no'})
}

  render() {
    return (
        <div onClick={() => this.props.selectedTopic(this.props.topic, this.props.messageID)} className={this.props.currentDashboardTopic === this.props.topic ? "sidebar-item-2-selected" : "sidebar-item-2"}>
            # {this.props.topic}
        </div>
    );
  }
}

export default SidebarItem;