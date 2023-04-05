export function TweetForm({onSubmit}) {
    const handleSubmit = (e) => {
        e.preventDefault()
        let name = e.target.name.value
        let content = e.target.content.value
    
        const newTweet = {
            name,
          content,
          like : 0
        }
    
        onSubmit(newTweet)
      }
    return(
        <form action="" className='tweet-form' onSubmit={handleSubmit}>
        <h4>New Tweet</h4>
        <input type="text" name="name" id="" placeholder='Votre nom'/>
        <textarea name="content" id="" cols="30" rows="10" placeholder='Votre Tweet'></textarea>
        <input type="submit" value="Ajouter un tweet" />
      </form>
    )
}