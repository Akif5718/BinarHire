import './home.scss'
import React from "react";
import axios from "axios";

const Home = () => {
    const [post, setPost] = React.useState(null);
    React.useEffect(() => {
        axios.get("https://localhost:7012/api/Account/TestMe").then((response) => {
          setPost(response.data);
        });
      }, []);
    return (
        <div className='home'>
            Homepage
            {post}
        </div>
    );
}

export default Home;
