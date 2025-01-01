import { useState } from 'preact/hooks';

export default function Greeting({messages}) {

  const randomMessage = () => messages[(Math.floor(Math.random() * messages.length))];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
        onMouseEnter={(e) => e.target.style.backgroundColor = 'darkblue'}
        onMouseLeave={(e) => e.target.style.backgroundColor = 'blue'}
        onClick={() => setGreeting(randomMessage())}
      >
        New Greeting
      </button>
    </div>
  );
}
