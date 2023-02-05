import TweeItem from "./TweeItem"
import { getRandomKey } from "../helpers/getRandomKey"
const ListaTweets = ({tweets}) => {
    return (
        <ul className="list-group ">
            {
                tweets.map(tweet => (
                    <TweeItem 
                        key={getRandomKey()}
                        tweet={tweet}
                    />
                ))
            }

        </ul>
    )
}

export default ListaTweets