import './App.css';

import { LiveboardEmbed } from "@thoughtspot/visual-embed-sdk/react"

import {
  AuthType,
  init,

 } from "@thoughtspot/visual-embed-sdk";
 
 const TSURL = "https://my3.thoughtspot.cloud";
 init({
  thoughtSpotHost: TSURL,
  authType: AuthType.None
});


function App() {
 return (
   <div className="App">

<div>
           <h1>Liveboard</h1>
           <LiveboardEmbed frameParams={{height: "80vw"}} 
                liveboardId={"7d9dc2b9-59eb-42b2-946d-8a9a3bcd5343"} />
                
       </div>  


   </div>
 );
}
export default App;






