import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="content">
        <header>
          <h1>DevFinder</h1>
          <button>light</button>
        </header>
        <div className="search-container">
          <input type="search" placeholder="Search GitHub username..." />
          <button>Search</button>
        </div>
        <div className="search-results">
          <div className="user-profile-info">
            <h2>GitHub UserName</h2>
            <p>Joined 2026</p>
            <h6>@username</h6>
            <p>Bio</p>
          </div>
          <div className="user-stats-container">
            <div className="user-stats">
              <h6>Repos</h6>
              <p>8</p>
            </div>
            <div className="user-stats">
              <h6>Followers</h6>
              <p>10</p>
            </div>
            <div className="user-stats">
              <h6>Following</h6>
              <p>12</p>
            </div>
          </div>
          <div className="user-extra-infos">
            <div className="user-extra-info">
              <p>📍Location</p>
            </div>
            <div className="user-extra-info">
              <p>📎link</p>
            </div>
            <div className="user-extra-info">
              <p>🐦Twitter</p>
            </div>
            <div className="user-extra-info">
              <p>🏢Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
