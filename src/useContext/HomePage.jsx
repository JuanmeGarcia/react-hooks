import { useUserContext } from "./context/UserContext"

export const HomePage = () => {

    const { user } = useUserContext()
  return (
    <>
        <h1>Home page: {user.name}</h1>
        <hr />  
        <pre>
        </pre>
    </>
  )
}
