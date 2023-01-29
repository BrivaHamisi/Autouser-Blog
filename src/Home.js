import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null)

    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)

    // const handleDelete =(id) =>{
    //     const newBlogs = blogs.filter(blogs => blogs.id !== id)
    //     setBlogs(newBlogs);
    // }
    useEffect(()=>{
        fetch('http://localhost:8000/blogs')
        .then(res =>{
            if(!res.ok){
                throw Error('Could not Fetch the data for that Resource!')
            }
            return res.json()
         })
         .then(data => {
            console.log(data);
            setBlogs(data);
            setIsPending(false)
            setError(null)
         })
         .catch(err =>{
            setIsPending(false)
            setError(err.message)
         })
    }, [])

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            { blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
        </div>
    );
}

export default Home;
