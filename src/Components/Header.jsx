import trollFace from "../Images/troll-face.png"
export default function Header(){
    return(
        <>
            <header className="header">
                <img src={trollFace} 
                alt="meme" 
                />
                <h1>Meme Generator</h1>
            </header>
        </>
    )
}