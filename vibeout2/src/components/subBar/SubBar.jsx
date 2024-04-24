import React, { useEffect, useState } from 'react'
import './SubBar.css'
import axios from 'axios'

function SubBar() {
  const [accounts, setAccounts] = useState([]) 

  const url = "http://localhost:3000/following"

  useEffect(() => {
   const getAccounts = async () => {
    const result = await fetch(url)
    const artists = await result.json()
    setAccounts(artists)
    // console.log(artists)
   }
   

   getAccounts()

  
  }, [accounts])

  const unfollowNew = (id) => {
     axios.put("http://localhost:3000/following/"+id).then(results => console.log(results)).catch(err=> console.log(err))

  }

  const follow = (id) =>{

    axios.patch("http://localhost:3000/following/"+id).then(results => console.log(results)).catch(err=> console.log(err))
  }
  const unfollow = async (_id) => {
    try {
      await axios.delete("http://localhost:3000/following/"+_id)
      alert("Unfollowed") 


    } catch (error) {res.json({ message: error.message })}
  };

  return (
    <div className='bar'>
        <h3>Following</h3>
        <hr />
  {
     accounts.map((account, i) => {
      return (
        <div key={i} className="account">
          <a href="#" className='acc'>{account.name}</a>
          <button className='btn-unfollow'onClick={(e) => {unfollowNew(account._id)}}>Unfollow</button>
        </div>
      )
     })
  }
    <h3 className='sugg' >Suggested users</h3>
    <hr />
   
    </div>
  )
}

export default SubBar