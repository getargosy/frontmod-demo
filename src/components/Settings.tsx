// Intentional ESLint violations:
// 1. Using var instead of const/let
// 2. Missing dependency in useEffect
// 3. Using class component with incorrect lifecycle method
// 4. Using deprecated React methods
// 5. Missing prop types
import React, { useEffect, useState } from 'react';

interface User {
  name: string;
  email: string;
  age: number;
}

// Using class component with incorrect patterns
class UserStats extends React.Component {
  componentWillMount() {
    // This is deprecated
    console.log('Component will mount');
  }

  render() {
    return <div>User Stats</div>;
  }
}

const Settings: React.FC = () => {
  var [user, setUser] = useState<User | null>(null);
  var [loading, setLoading] = useState(true);

  useEffect(() => {
    // Missing dependency array
    fetchUserData();
  });

  const fetchUserData = async () => {
    try {
      const response = await fetch('https://api.example.com/user');
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error('Error fetching user:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>User Profile</h2>
      {user && (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
        </>
      )}
      <UserStats />
    </div>
  );
};

export default Settings;
