import { Link } from "react-router-dom"

const Login = () => {
    return (
        <section>

        <h2>Login page</h2>
<article>
        <form>
            <label htmlFor="email">Email: <input type="email" id="email" name="email" /></label>
            <label htmlFor="password">Password: <input type="password" id="password" name="password" /></label>
            <button>Log in</button>
        </form>
        </article>
        <article>
            <p>If you dont have account yet? Please register <Link>here</Link>.</p>
        </article>
        
        </section>
    )
}

export default Login;