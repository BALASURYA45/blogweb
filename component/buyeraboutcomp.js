const BuyerAboutComp = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '40px',
    justifyContent: 'center',
    borderRadius: '25px',
    padding: '50px 20px',
    background: 'linear-gradient(to right, #141414ff, #02050aff)',
    fontFamily: 'Segoe UI, sans-serif',
  };

  const cardStyle = {
    backgroundColor: '#ffffffff',
    padding: '40px',
    borderRadius: '20px',    
    boxShadow: '0 6px 16px rgba(227, 13, 13, 0.08)',
    maxWidth: '350px',
    flex: 1,
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.12)',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    marginBottom: '15px',
    color: '#333',
  };

  const textStyle = {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '15px',
    lineHeight: '1.5',
  };

  const listStyle = {
    listStyle: 'disc',
    paddingLeft: '20px',
    color: '#666',
    fontSize: '0.95rem',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h2 style={headingStyle}>Buyer Profile</h2>
        <p style={textStyle}>
          Meet our valued buyer: active, engaged, and loyal. This section highlights user preferences, shopping patterns, and exclusive benefits.
        </p>
        <ul style={listStyle}>
          <li>Username: Bala</li>
          <li>Status: Platinum Member</li>
          <li>Recent Activity: Active this week</li>
        </ul>
      </div>

      <div style={cardStyle}>
        <h2 style={headingStyle}>Our Company</h2>
        <p style={textStyle}>
          We’re a fast-growing digital media company, connecting passionate bloggers and readers worldwide. Innovation and collaboration drive our mission.
        </p>
        <ul style={listStyle}>
          <li>Founded: 2025</li>
          <li>Team: 30+ creative minds</li>
          <li>Global reach: 10+ countries</li>
        </ul>
      </div>

      <div style={cardStyle}>
        <h2 style={headingStyle}>Website Mission</h2>
        <p style={textStyle}>
          Our blog platform is designed for discovery and connection. Users can explore curated content, share insights, and spark meaningful conversations.
        </p>
        <ul style={listStyle}>
          <li>Technology: React, Node.js</li>
          <li>Features: Responsive, Secure</li>
          <li>Purpose: User-first experience</li>
        </ul>
      </div>
    </div>
  );
};

export default BuyerAboutComp;