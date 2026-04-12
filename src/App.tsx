import "./App.css";
import { FaSearch } from "react-icons/fa";
import { CiLight } from "react-icons/ci";

function App() {
  return (
    <div className="container">
      <div className="content">
        <header>
          <h1>DevFinder</h1>
          <div className="fds">
            <button>light</button>
            <CiLight className="light-icon" />
          </div>
        </header>
        <div className="search-container">
          <FaSearch />
          <input type="search" placeholder="Search GitHub username..." />
          <button>Search</button>
        </div>
        <div className="search-results">
          <div className="user-profile-info">
            <div className="search-results-header">
              <img src="https://via.placeholder.com/150" alt="User Avatar" />
              <h3>GitHub UserName</h3>
              <p>Joined 2026</p>
            </div>
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
          <div className="user-infos">
            <div className="user-infos-item">
              <p>📍Location</p>
            </div>
            <div className="user-infos-item">
              <p>🐦Twitter</p>
            </div>
            <div className="user-infos-item">
              <p>📎link</p>
            </div>
            <div className="user-infos-item">
              <p>🏢Company</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
