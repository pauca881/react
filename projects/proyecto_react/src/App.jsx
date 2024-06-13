import { TwitterFollowCard } from "./TwitterFollowCard";

export function App(){

    const formattedUserName = (<span>@userName</span>)

return  (

    //React.Fragment
<>

<TwitterFollowCard  formattedUserName={formattedUserName}  userName="Pauk" name="Pau" initialIsFollowing/>    
<TwitterFollowCard  formattedUserName={formattedUserName} userName="Ejemplo" name="Ejemplo" initialIsFollowing/>



</>
    
)}