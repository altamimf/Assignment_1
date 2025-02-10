// About Page Component
// This page provides information about the application or team
import Navbar from '../../components/Navbar';

export default function About() {
  return (
    <div className="container">
      {/* Include the Navbar component for navigation */}
      <Navbar />
      {/* About page title and content */}
      <h1>About Us</h1>
      <p>This is the about page. Here you can learn more about our project.</p>
    </div>
  );
}