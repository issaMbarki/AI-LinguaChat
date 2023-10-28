import { useEffect } from "react"

export const Home = () => {
    useEffect(() => {
        console.log("hello");
    }, [])
    return (
        <div className="bg-red-600 h-screen">Home</div>
    )
}
