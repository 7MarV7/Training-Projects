export function Header() {
  return (
    <header>
      <div className="header--logo">
        <img
          src="https://vitejs.dev/logo-with-shadow.png"
          alt="Vite Logo"
          className="vite-logo"
        />
        <div className="header--text">
          <h1>Welcome to My Static Site</h1>
          <p>This is a simple static site built with React and Vite.</p>
        </div>
      </div>
    </header>
  );
}
