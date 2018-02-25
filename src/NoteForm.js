import React from 'react';

class NoteForm extends React.Component {
    handleSubmit(e) {
        e.preventDefault(); // khong refresh trang sau submit
        this.props.handleAdd(this.refs.txt.value);
        this.refs.txt.value = '';
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" placeholder="Enter your text" ref="txt"/>
                <br/>
                <br/>
                <button>Add</button>
            </form>
        )
    }
}

export default NoteForm;