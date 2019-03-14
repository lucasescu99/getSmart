import React from 'react'

class UserAsAdmin extends React.Component {
  render() {
    return (
      <div>
        <form>
          <label>Email del Usuario</label>
          <input type='email' />
        </form>
      </div>
    )
  }
}
export default UserAsAdmin;