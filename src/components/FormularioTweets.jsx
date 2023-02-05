import { useState } from "react"
import Button from "./Button"

const FormularioTweets = ({addTweet}) => {

    const [tweetInput, setTweetInput] = useState('')

    const handleSubmitAddTweet = event => {
        event.preventDefault()
        addTweet(tweetInput.trim())
        setTweetInput('')
        
    }

    const handleChangeTweet = ({target: {value}}) => {
        setTweetInput(value)
    }

    return (
        <form className="" onSubmit={handleSubmitAddTweet}>
            <label htmlFor="tweet" className='form-label fw-bold'>
                Tweet
            </label>
            <textarea 
                type="text" 
                name="tweet" 
                id="tweet" 
                value={tweetInput}
                onChange={handleChangeTweet}
                className='form-control mb-3'
                
                placeholder='Escribe tu tweet'
                /* style='min-height: 2rem; max-height: 2rem' */
                style={
                    {
                        minHeight: 6 + 'rem',
                        maxHeight: 6 + 'rem'
                    }
                    
                }
                
            >
            </textarea>

            <Button 
                text={`Agregar tweet`}
            />
        </form>
    )
}

export default FormularioTweets