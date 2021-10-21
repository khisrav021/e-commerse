import { useState } from 'react';
import { LogInCard } from './styles';

function LogIn({ Login, error }) {

    const [details, setDetails] = useState({ name: "", password: "" });

    const onSubmit = (e) => {
        e.preventDefault();

        Login(details)
    }

    return (
        <LogInCard>
            <form onSubmit={onSubmit}>
                <div>
                    <br />
                    <h2>Login</h2>
                    <br />
                    {(error !== "") ? (<div>{error}</div>) : ""}
                    <div>
                        <input type="text" name="name" id="name" placeholder="Name:" required onChange={e => setDetails({ ...details, name: e.target.value })} value={details.name} />
                    </div>
                    <br />
                    <div>
                        <input type="password" name="password" id="password" placeholder="Password:" required onChange={e => setDetails({ ...details, password: e.target.value })} value={details.password} />
                    </div>
                    <br />
                    <button>sign in</button>
                    <br />
                    <br />
                </div>
            </form>
        </LogInCard>
    )
}

export default LogIn
