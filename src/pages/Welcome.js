import {Route} from 'react-router-dom'
const Welcome=()=>{
    return (
      <section>
       <h1>The Welcome Page</h1>
        <Route path="/Welcome/new-user">
        <p>Welcome,NewUser</p>
        
        </Route>
      </section>
    )
}
export default Welcome;