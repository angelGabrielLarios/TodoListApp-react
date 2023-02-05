import { useState } from "react"
import FormularioTweets from "./components/FormularioTweets"
import ListaTweets from "./components/ListaTweets"

const App = () => {

    const [tweets, setTweets] = useState([])

    const addTweet = newTweet =>{
        if(!newTweet) return

        setTweets([...tweets, newTweet])
    }

    return (
        <article className="container min-vh-100 d-flex justify-content-center align-items-center">
            <div className="w-100">
                <h1 className="text-center py-3">
                    LocalStorage
                </h1>
                <div className="row mx-0 gy-md-0 gy-5">
                    
                    <div className="col-md-6">
                        <FormularioTweets 
                            
                            addTweet={newTweet => addTweet(newTweet)}
                        />
                    </div>

                    <div className="col-md-6">
                        <h2 className="py-3 fw-bold">
                            Mis tweets
                        </h2>
                        <ListaTweets 
                            tweets={tweets}
                        />
                    </div>
                </div>
            </div>
        </article>
    )
}

export default App