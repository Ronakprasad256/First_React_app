import React from 'react';
import axios from 'axios';
import UserCard from './UserCard';

class UserList extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
    axios.get("https://api.github.com/users").then((res) => this.setState({ users: res.data }));
    }
    
  render() {
    return (
      <>
        <h1>This is a Users List</h1>
        <div className='flex flex-wrap gap-8 mt-5'>
        {this.state.users.map((usr, index) => (
          <UserCard key={index} usr={usr}/>
        ))}
          </div>
      </>
    );
  }
}

export default UserList;
