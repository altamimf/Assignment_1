// Root layout for the application
// This component wraps all pages and provides the basic HTML structure
import '../styles/globals.css'; // Ensure this path is correct
export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          {/* Render the children (pages) inside the body */}
          {children}
        </body>
      </html>
    );
  }