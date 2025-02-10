// Navbar Component
// This component provides navigation links to different pages
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav>
      <ul>
        {/* Link to the Home Page */}
        <li>
          <Link href="/">Home</Link>
        </li>
        {/* Link to the About Page */}
        <li>
          <Link href="/about">About</Link>
        </li>
        {/* Link to the Contact Page */}
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;