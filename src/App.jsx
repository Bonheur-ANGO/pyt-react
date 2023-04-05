import { useState } from 'react'
import './App.css'
import { Tweet } from './components/Tweet'
import { TweetForm } from './components/TweetForm'

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

  const onLike = (tweetId) => {
    setTweets((curr) => {
      const copyTweet = [...curr]

      const likedTweet = copyTweet.find(tweet => tweet.id === tweetId)
      likedTweet.like +=1

      return copyTweet
    })
}

  const handleSubmit = (tweet) => {

    const newTweet = {
      id: tweets.length+1,
      name : tweet.name,
      content : tweet.content,
      like : 0
    }
    addTweet(newTweet)
  }

  const addTweet = (tweet) =>{
    setTweets([...tweets, tweet])
  }

  return (
    <div>
      <TweetForm onSubmit={handleSubmit} />
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

          onLike={ (id) =>{
            onLike(id)
          }}
          />
        })}
      </div>
    </div>
  )
}

export default App
