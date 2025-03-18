import { Route } from 'react-router-dom'

const Main = () => {
    return (
        <section>
            <h1>This is the main page</h1>
            <Route path='/main/new-user' element={ <p>New user</p> }/>
        </section>
    )
}

export default Main

// The Route component in this welcome page essentially executes the values in it 
// if the Main papge is active. 