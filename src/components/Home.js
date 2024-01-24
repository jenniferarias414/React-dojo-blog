import {useState} from 'react';
import BlogList from './BlogList';

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'India', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Corbin', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'India', id: 3 }
      ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    };

    return (
      <div className="home">
        <BlogList
          blogs={blogs}
          title="All Blogs!"
          handleDelete={handleDelete}
        />
        {/* <BlogList
          blogs={blogs.filter((blog) => blog.author === "India")}
          title="India's blogs"
          handleDelete={handleDelete}
        /> */}
      </div>
    );
}
 
export default Home;