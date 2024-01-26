import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const AboutPage = () => {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])
    return (
        <div>
            <h1>На этой странице будет информация о нас!</h1>
            {
                posts.map(post => (
                <Link key={post.id} to={`/about/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
                ))
            }
        </div>

    )
}

export default AboutPage;