import { useState } from "react"

export function TwitterFollowCard ( {formattedUserName, userName, name, initialIsFollowing}){

const [isFollowing, setisFollowing]= useState(false)




const imageSrc = 'https://unavatar.io/${username}'
const text = isFollowing ? 'Siguiendo' : 'Seguir'

const buttonClassName = isFollowing
? 'tw-followCard-button is-following'
: 'tw-followCard-button'

const handleClick = () =>{

setisFollowing(!isFollowing)

}

return(
    <article className="pau-tw-followCard">
        <header className="pau-tw-followCard-header">
            <img src={imageSrc}/>
            <strong>{userName}</strong>
            <span>{name}</span>
            <span>{formattedUserName}</span>

        
        </header>


    <aside>
        <button className="{buttonClassName} onClick={handleClick}">
            Seguir
        </button>

    </aside>


    </article>



)}