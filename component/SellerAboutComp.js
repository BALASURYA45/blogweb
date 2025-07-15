'use client';
import { useState, useEffect } from 'react';

const SellerAboutComp = () => {
  const [blogs, setBlogs] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('');
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedBlogs = JSON.parse(localStorage.getItem("blogItems") || "[]");
    setBlogs(storedBlogs);
  }, []);

  const handleAddOrUpdate = (e) => {
    e.preventDefault();
    if (!newTitle.trim() || !newDescription.trim() || !newImage.trim()) return;

    const newBlog = {
      id: editId || Date.now(),
      title: newTitle,
      description: newDescription,
      image: newImage
    };

    const updatedBlogs = editId
      ? blogs.map(blog => blog.id === editId ? newBlog : blog)
      : [...blogs, newBlog];

    setBlogs(updatedBlogs);
    localStorage.setItem("blogItems", JSON.stringify(updatedBlogs));

    setNewTitle('');
    setNewDescription('');
    setNewImage('');
    setEditId(null);
  };

  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(updatedBlogs);
    localStorage.setItem("blogItems", JSON.stringify(updatedBlogs));
  };

  const handleEdit = (blog) => {
    setNewTitle(blog.title);
    setNewDescription(blog.description);
    setNewImage(blog.image);
    setEditId(blog.id);
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>
          {editId ? 'Edit Blog Entry' : 'Add Blog Entry'}
        </h2>
        <form onSubmit={handleAddOrUpdate} style={styles.form}>
          <input
            type="text"
            placeholder="Blog Title"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={newImage}
            onChange={(e) => setNewImage(e.target.value)}
            style={styles.input}
          />
          <input
            type="text"
            placeholder="Description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            style={{ ...styles.input, gridColumn: '1 / -1', height: '60px' }}
          />
          <button type="submit" style={styles.primaryButton}>
            {editId ? 'Update' : 'Add'}
          </button>
        </form>

        <h2 style={styles.heading}>All Blog Entries</h2>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.tableHeader}>Image</th>
              <th style={styles.tableHeader}>Title</th>
              <th style={styles.tableHeader}>Description</th>
              <th style={styles.tableHeader}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog.id} style={styles.tableRow}>
                <td style={styles.tableCell}>
                  <img
                    src={blog.image}
                    alt={blog.title}
                    style={styles.blogImage}
                  />
                </td>
                <td style={styles.tableCell}>{blog.title}</td>
                <td style={styles.tableCell}>{blog.description}</td>
                <td style={styles.tableCell}>
                  <button onClick={() => handleEdit(blog)} style={styles.actionButton}>
                    Edit
                  </button>
                  <button onClick={() => handleDelete(blog.id)} style={{ ...styles.actionButton, backgroundColor: '#dc3545' }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(120deg, #0066ffff, #3a485fff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '50px 20px',
    fontFamily: 'Inter, sans-serif',
  },
  card: {
    backgroundColor: '#ffffffff',
    padding: '40px',
    borderRadius: '16px',
    width: '1000px',
    maxWidth: '100%',
    boxShadow: '0 12px 32px rgba(0,0,0,0.12)',
  },
  heading: {
    fontSize: '1.8rem',
    fontWeight: '600',
    color: '#333',
    marginBottom: '24px',
    borderBottom: '2px solid #eee',
    paddingBottom: '10px',
  },
  form: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '16px',
    marginBottom: '40px',
  },
  input: {
    padding: '12px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    fontSize: '1rem',
    backgroundColor: '#010101ff',
  },
  primaryButton: {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    border: '2px solid red',
  },
  tableHeader: {
    textAlign: 'left',
    padding: '14px',
    backgroundColor: '#000000ff',
    fontWeight: '500',
    borderBottom: '2px solid red',
  },
  tableRow: {
    backgroundColor: '#fff',
    borderBottom: '1px solid red',
  },
  tableCell: {
    padding: '12px',
    verticalAlign: 'middle',
    borderBottom: '1px solid red',
    borderRight: '1px solid red', 
    textAlign: 'left',
    color: '#000000ff',
    borderRadius: '20px'
  },
  blogImage: {
    width: '120px',
    height: '80px',
    objectFit: 'cover',
    borderRadius: '6px',
    boxShadow: '0 0 6px rgba(0,0,0,0.1)',
  },
  actionButton: {
    padding: '8px 14px',
    backgroundColor: '#17b824ff',
    height: '40px',
    marginBottom: '8px',
    marginTop: '8px',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    marginRight: '8px',
    cursor: 'pointer',
    fontWeight: '500',
  },
};

export default SellerAboutComp;