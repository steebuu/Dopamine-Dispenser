import React from 'react';

class UpdateUser extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: this.props.user.username,
            email: this.props.user.email,
            full_name: this.props.user.full_name,
            bio: this.props.user.bio,
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(field) {
        return (e) => {
            this.setState({ [field]: e.target.value });
        };
    }

    handleSubmit(e){
        e.preventDefault();

        const {updateUser, user} = this.props;
        updateUser(user.id);
        this.props.history.push(`/users/${user.id}`)
    }

    render(){
        return(
            <div className="update-user-div">
                <div className="change-prof-pic-div"></div>
                <div className="update-user-form-div">
                    <form onSubmit={this.handleSubmit} className="update-user-form">
                        <div className="update-user-form-element-div">
                            <label className="update-user-label">
                                Name
                                <input className="update-user-input" type="text" onChange={this.handleChange("full_name")}></input>
                            </label>
                        </div>
                        <div className="update-user-form-element-div"></div>
                            <label className="update-user-label">
                                Username
                                <input className="update-user-input" type="text" onChange={this.handleChange("username")}></input>
                            </label>
                        <div className="update-user-form-element-div">
                            <label className="update-user-label">
                                Email
                                <input className="update-user-input" type="email" onChange={this.handleChange("email")}></input>
                            </label>
                        </div>
                        <div className="update-user-form-element-div">
                            <label className="update-user-label">
                                Bio
                                <input className="update-user-input" type="text" onChange={this.handleChange("bio")}></input>
                            </label>
                        </div>
                        <button className="update-user-button">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default UpdateUser;
