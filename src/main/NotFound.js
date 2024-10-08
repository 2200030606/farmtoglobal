import React from 'react';

const NotFound = () => {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#ffffff', // Background color
      color: '#333', // Text color
      fontFamily: 'cursive', // Apply cursive font
    },
    heading: {
      fontSize: '3rem',
      animation: 'fadeIn 1s ease-in-out, bounce 1s infinite', // Animation effects
    },
    text: {
      fontSize: '1.5rem',
      animation: 'fadeIn 1s ease-in-out',
      marginTop: '10px',
    },
    // Keyframes for animations
    '@keyframes fadeIn': {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    '@keyframes bounce': {
      '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
      '40%': { transform: 'translateY(-30px)' },
      '60%': { transform: 'translateY(-15px)' },
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404 - Page Not Found</h1>
      <p style={styles.text}>Sorry, the page you are looking for does not exist.</p>

      {/* Add style for keyframes directly in JSX */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; }
            100% { opacity: 1; }
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-30px); }
            60% { transform: translateY(-15px); }
          }
        `}
      </style>
    </div>
  );
};

export default NotFound;
