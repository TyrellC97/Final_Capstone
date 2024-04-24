import React from 'react'
import "./update.css"

function UpdatePost() {
  return (
    <div className='updater'>
        <h4>Update Post</h4>
        <form>
      <input type="text" onChange={(e) => {setPostEdit(e.target.value)}} />
      <button onClick={submitEdit()}>Submit Edit</button>
    </form>
    </div>
  )
}

export default UpdatePost