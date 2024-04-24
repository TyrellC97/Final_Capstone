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

     const btn = document.getElementsByClassName("btn-unfollow")
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
        <h3>Who to follow</h3>
        <hr />
  {
     accounts.map((account, i) => {
      if (account.following == true) {
        return (
          <div key={i} className="account">
            <a href="#" className='acc'>{account.name}</a>
            <button className='btn-unfollow' onClick={(e) => {unfollowNew(account._id)}}>Unfollow</button>
          </div>
        )
      }
      else {
        return (
        <div key={i} className="account">
          <a href="#" className='acc'>{account.name}</a>
          <button className='follow' onClick={(e) => {follow(account._id)}}>Follow</button>
        </div>)
      }
      
     })
  }
   
    </div>
  )
}

export default SubBar