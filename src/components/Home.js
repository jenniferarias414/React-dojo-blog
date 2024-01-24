import {useState, useEffect} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null)

    //   const [name, setName] = useState('Jenny')

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     setBlogs(newBlogs);
    // };

    useEffect(() => {
      setTimeout(() => {
        fetch("http://localhost:8000/blogs")
          .then((res) => {
            if(!res.ok) {
                throw Error('could not fetch data for that resource')
            }
            return res.json();
          })
          .then((data) => {
            console.log(data);
            setBlogs(data);
            setIsPending(false);
            setError(null)
          })
          .catch((err) => {
            setError(err.message);
            setIsPending(false);
          })
      }, 1000);
    }, []);

    return (
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {blogs && <BlogList
          blogs={blogs}
          title="All Blogs!"
        //   handleDelete={handleDelete}
        />}
        {/* will get error: can't map 'null' b/c initial value of blogs on 1st render is 'null' and we are mapping blogs in BlogList on 1st render. it takes a second to fetch the data from json, so we don't want to run BlogList right away: dynamic check - put line 27 in curly braces....then can add js logic in template, add blogs &&. conditional templating. evaluates left 1st, if it's false, it doesn't eval right side. since blogs are 'null'=false, won't run that bloglist. if blogs were true, it wouldn't output 'blogs' but instead move on to the next code.
        This is how you conditionally output parts of a template. */}
        {/* <BlogList
          blogs={blogs.filter((blog) => blog.author === "India")}
          title="India's blogs"
          handleDelete={handleDelete}
        /> */}
        {/* <button onClick={() => setName('Corbin')}>change name</button>
        <p>{name}</p> */}
      </div>
    );
}
 
export default Home;