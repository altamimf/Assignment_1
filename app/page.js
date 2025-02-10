// Home Page Component
// This is the main landing page of the application
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <div className="container">
      {/* Include the Navbar component for navigation */}
      <Navbar />
      {/* Welcome message and description */}
      <h1>Welcome to My Web Application!</h1>
      <p>This is the home page of my Next.js app.</p>
    </div>
  );
}