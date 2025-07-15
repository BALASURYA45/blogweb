'use client';
import { useState, useEffect } from "react";
import styles from "./page.module.css";

const staticItems = [
  {
    id: 1,
    name: "TypingBlog",
    image: "https://sp.yimg.com/ib/th/id/OIP.NkA-PoURudHHbpJ0lIJt1QHaE8?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    description: "Master the art of keyboard-based storytelling—tips and tricks to supercharge your blog writing skills."
  },
  {
    id: 2,
    name: "WorkingBlogger",
    image: "https://sp.yimg.com/ib/th/id/OIP.HfqSTMxOnJqGki0AN6os8wHaE8?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    description: "Your daily guide to thriving as a professional blogger—balancing creativity, productivity, and monetization."
  },
  {
    id: 3,
    name: "WorkBreak",
    image: "https://sp.yimg.com/ib/th/id/OIP.a3sDBWsz5DPWEHL0C4NKvQHaE8?pid=Api&w=148&h=148&c=7&dpr=2&rs=1",
    description: "Blogger burnout? Here’s your go-to spot for refreshing break ideas and recharging your creative energy."
  },
  {
    id: 4,
    name: "ModernTech",
    image: "https://tse1.mm.bing.net/th/id/OIP.Lw5fi5xCtYfoaG7B5qVF2QHaEK?pid=Api&P=0&h=180",
    description: "Explore cutting-edge tools, apps, and platforms that modern bloggers rely on to stay ahead in tech."
  },
  {
    id: 5,
    name: "CodingEra",
    image: "https://tse1.mm.bing.net/th/id/OIP.lZcTQuv69wOV10v9JtAc2wHaEK?pid=Api&P=0&h=180",
    description: "Dive into the blogosphere’s code-friendly era—WordPress tips, coding basics, and tech tutorials for beginners."
  }
];

export default function Home() {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogItems");
    const dynamicItems = storedBlogs ? JSON.parse(storedBlogs) : [];

    const offsetDynamic = dynamicItems.map((item, index) => ({
      ...item,
      id: staticItems.length + index + 1,
      name: item.title,
    }));

    setItems([...staticItems, ...offsetDynamic]);
  }, []);

  const handleClick = (id) => {
    setActiveId(prevId => (prevId === id ? null : id));
  };

  const activeItem = items.find(item => item.id === activeId);

  return (
    <div className={styles.page}>
      {activeItem ? (
        <div className={styles.fullPage}>
          <img src={activeItem.image} alt={activeItem.name} className={styles.fullImage} />
          <h1>{activeItem.name}</h1>
          <p>{activeItem.description}</p>
          <button onClick={() => setActiveId(null)} className={styles.closeBtn}>Back to Home</button>
        </div>
      ) : (
        <>
          <h1 className={styles.heading}>Welcome to the SuryaStory Blogs!</h1>
          <div className={styles.grid}>
            {items.map((item) => (
              <div key={item.id} className={styles.card} onClick={() => handleClick(item.id)}>
                <img src={item.image} alt={item.name} className={styles.image} />
                <h3>{item.name}</h3>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}