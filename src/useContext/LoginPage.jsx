import { useUserContext } from "./context/UserContext"

export const LoginPage = () => {

    const {user, setUser} = useUserContext()

  return (
    <>
        <h1>Login page</h1>
        <hr />

        {user?.name && (
            <pre>
                {JSON.stringify(user, null, 4)}
            </pre>
        )}

        <button 
            className="btn btn-outline-primary"
            onClick={() => setUser({
                id: 1,
                name: 'John Doe',
                email: 'juan@gmail.com'
            })}
        >
            Iniciar sesion
        </button>
    </>
  )
}
