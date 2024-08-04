import { Navigate } from "react-router-dom"



const Home = () => {
return <Navigate to="/messages" replace={true} />
}

export default Home