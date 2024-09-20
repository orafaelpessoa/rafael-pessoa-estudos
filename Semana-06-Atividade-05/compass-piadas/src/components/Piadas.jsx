import {useState, useEffect} from 'react'



const Piadas = () => {
    const [jokeList, setJokeList] = useState([])
  return (
    <div>
        <h1>Piadas Compass</h1>
        <ul>
            {jokeList.map((joke, index) => (
                <li key={index}>{joke}</li>
            ))}
        </ul>
    </div>
  )
}

export default Piadas