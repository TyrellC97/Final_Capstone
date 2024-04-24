import React, { useEffect, useState } from 'react'
import './SubBar.css'
import axios from 'axios'

function SubBar() {
  const [accounts, setAccounts] = useState([]) 

  const url = "https://final-capstone-c8y0.onrender.com/following"

  useEffect(() => {
   const getAccounts = async () => {
    const result = await fetch(url)
    const artists = await result.json()
    setAccounts(artists)
    // console.log(artists)
   }
   

   getAccounts()

  
  }, [accounts])


  // update

  const unfollowNew = (_id) => {
     axios.put("https://final-capstone-c8y0.onrender.com/following"+_id).then(results => console.log(results)).catch(err=> console.log(err))

     const btn = document.getElementsByClassName("btn-unfollow")
  }

  const follow = (_id) =>{

    axios.patch("https://final-capstone-c8y0.onrender.com/following"+_id).then(results => console.log(results)).catch(err=> console.log(err))
  }
  

  return (
    <div className='bar'>
        <h3>Following</h3>
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
      }})
  }
   <h3 className='sugg'><hr /> Who to follow</h3>
   <hr />

   { accounts.map((account, i) => {
    if (account.following == false) {
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