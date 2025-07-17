'use client';
import { useState, useEffect } from "react";
import styles from "./page.module.css";

const staticItems = [
  {
    id: 1,
    name: "TypingBlog",
    image: "/image/sam1.jpeg",
    description: "Master the art of keyboard-based storytelling—tips and tricks to supercharge your blog writing skills."
  },
  {
    id: 2,
    name: "WorkingBlogger",
    image: "/image/sam2.jpeg",
    description: "Your daily guide to thriving as a professional blogger—balancing creativity, productivity, and monetization."
  },
  {
    id: 3,
    name: "WorkBreak",
    image: "/image/sam3.jpeg",
    description: "Blogger burnout? Here’s your go-to spot for refreshing break ideas and recharging your creative energy."
  }
];

export default function Home() {
  const [items, setItems] = useState([]);
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const storedBlogs = localStorage.getItem("blogItems");
    const dynamicItems = storedBlogs ? JSON.parse(storedBlogs) : [];

    const normalizedItems = dynamicItems.map(item => ({
      ...item,
      name: item.title,
      image: item.image.startsWith('/') ? item.image : '/' + item.image
    }));

    setItems([...staticItems, ...normalizedItems]);
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