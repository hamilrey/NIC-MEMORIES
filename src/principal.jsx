import React from 'react';
import './prin.css';
import { FaHome, FaPlus, FaCalendarAlt, FaMapMarkerAlt, FaCog, FaThumbsUp, FaThumbsDown, FaRetweet, FaComment, FaBookmark, FaBell, FaBook } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const navigate = useNavigate();
  return (
    <div className="sidebar">
      <div className="sidebarIcons">
        <br />
        <div className="icon active">
          <FaHome size={24} />
        </div>
         <div className="icon">
        <FaBook size={24} onClick={() => navigate('/biblioteca') }/>
      </div>
        <div className="icon">
          <FaPlus size={24} />
        </div>
        <div className="icon">
          <FaCalendarAlt size={24} />
        </div>
        <div className="icon">
          <FaMapMarkerAlt size={24} />
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="icon">
          <FaCog size={24} />
        </div>
      </div>
    </div>
  );
};

const Post = ({ author, date, text, image }) => {
  return (
    <div className="post">
      <div className="postHeader">
        <img className="authorImage" src="https://i.pinimg.com/1200x/0b/24/f7/0b24f72c86340f231e1078a0163a2d1a.jpg" alt="Autor" />
        <div className="postInfo">
          <span className="authorName">{author}</span>
          <span className="followButton">Seguir</span>
          <span className="postDate">{date}</span>
        </div>
      </div>
      <div className="postBody">
        <p>{text}</p>
        <img className="postImage" src={image} alt="Publicación" />
      </div>
      <div className="postActions">
        <FaThumbsUp size={20} />
        <FaThumbsDown size={20} />
        <FaRetweet size={20} />
        <FaComment size={20} />
        <FaBookmark size={20} />
      </div>
    </div>
  );
};

const HomeScreen = () => {
  const posts = [
    {
      author: "Colegio Rubén Darío",
      date: "30 de agosto a las 8:47 a.m.",
      text: "palo de mayo en la región caribeña de nicaragua",
      image: "https://i.pinimg.com/1200x/65/75/47/657547c4f3e0ab519681cb637320f9a9.jpg"
    },
    {
      author: "Colegio Rubén Darío",
      date: "30 de agosto a las 8:47 a.m.",
      text: "palo de mayo en la región caribeña de nicaragua",
      image: "https://i.pinimg.com/1200x/a6/90/88/a6908848b7bb64a2e106fceb989c0c23.jpg"
    },
    {
        author: "Hernan Lopez",
        date: "30 de agosto a las 8:47 a.m.",
        text: "la gigantona nicaragua",
        image: "https://i.pinimg.com/1200x/be/8e/26/be8e26da6fe61c5acfbfa97a0731acfc.jpg"
    }

  ];

  return (
    <div className="homeScreen">
      <div className="header">
        <div className="searchBar">
          <input type="text" placeholder="Buscar..." />
        </div>
        <div className="headerIcons">
          <FaBell size={24} />
          <div className="profileIcon">
            <img src="https://i.pinimg.com/736x/e4/f7/73/e4f77377b9c1a7cd8258210097d9f633.jpg" alt="Perfil" />
          </div>
        </div>
      </div>
      <div className="feed">
        {posts.map((post, index) => (
          <Post
            key={index}
            author={post.author}
            date={post.date}
            text={post.text}
            image={post.image}
          />
        ))}
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="app">
      <Sidebar />
      <HomeScreen />
    </div>
  );
}

export default App;