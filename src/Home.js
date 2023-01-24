import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Hamisi Esq', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Briva', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Hamisi Esq', id: 3 }
    ])

    const [name, setName] = useState("Hamisi Esq")

    const handleDelete =(id) =>{
        const newBlogs = blogs.filter(blogs => blogs.id !== id)
        setBlogs(newBlogs);
    }
    useEffect(()=>{
        console.log("Use Effect Ran")
        console.log(name)
    }, [name])

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>
            <button onClick={() => setName("Simon")}>Change Name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;
