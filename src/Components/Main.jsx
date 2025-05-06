import { useState , useEffect } from "react"

export default function Main(){
    const[meme, setMeme]=useState({
        imageurl: "http://i.imgflip.com/1bij.jpg",
        topText : "One does not simply",
        bottomText : "Walk into Mordor"
    })

    const [allMemes, setAllMemes] = useState([])

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMeme(){
        
        const randomIndex = Math.floor(Math.random() * allMemes.length)
        const randomUrl = allMemes[randomIndex].url
        setMeme(prevMeme =>({
            ...prevMeme,
            imageurl: randomUrl
        }))
    }

    function handleChange(event){
        const {value , name} = event.currentTarget
        setMeme(prevMeme =>({
            ...prevMeme,
            [name]: value
        }))
    }


    return(
        <>
            <main>
                <div className="form">
                    <label>Top Text
                        <input 
                        type="text" 
                        name="topText"
                        placeholder="Selfies in my feed"
                        onChange={handleChange}
                        value={meme.topText}
                        />
                    </label>
                    <label>Bottom Text
                        <input 
                        type="text" 
                        name="bottomText"
                        placeholder="Photos I've been tagged"
                        onChange={handleChange}
                        value={meme.bottomText}
                        />
                    </label>
                    <button onClick={getMeme}>Get a New Meme Image🖼</button>
                </div>

                <div className="meme">
                    <img src= {meme.imageurl}/>
                    <span className="top">{meme.topText}</span>
                    <span className="bottom">{meme.bottomText}</span>
                </div>
            </main>
        </>
    )
} 