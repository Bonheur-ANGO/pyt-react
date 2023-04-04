import { useState } from 'react'
import './App.css'
import { Tweet } from './components/Tweet'

function App() {

  let default_Tweets = [
    {
      id: 1,
      name:"dodo",
      content:"je vais bien",
      like:50
    },
    {
      id: 2,
      name:"dudu",
       content:"ytfgv",
        like:80
    },
    {
      id: 3,
      name:"dredre",
       content:"abana",
        like:40
    }
  ]



  let [tweets, setTweets] = useState(default_Tweets)

  const onDelete = (tweetId) => {
      setTweets((curr) => curr.filter((tweet) => tweet.id !== tweetId))
  }

  const handleSubmit = (e) => {
    event.preventDefault()
    let user = e.target.name.value
    let content = e.target.content.value

    const newTweet = {
      id: tweets.length,
      user,
      content,
      like : 0
    }

    setTweets([...tweets, newTweet])
  }

  return (
    <div>
      <form action="" className='tweet-form' onSubmit={handleSubmit}>
        <h4>New Tweet</h4>
        <input type="text" name="name" id="" placeholder='Votre nom'/>
        <textarea name="content" id="" cols="30" rows="10" placeholder='Votre Tweet'></textarea>
        <input type="submit" value="Ajouter un tweet" />
      </form>
      <div className="tweet-container">
        {tweets.map((tweet) =>{
          return <Tweet 
          key={tweet.id} 
          id={tweet.id}
          name={tweet.name} 
          content={tweet.content} 
          like={tweet.like}
          onDelete={ (id) =>{
            onDelete(id)
          }}
          />
        })}
      </div>
    </div>
  )
}

export default App
