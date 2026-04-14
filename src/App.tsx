import "./App.css";
import { FaSearch } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { useState } from "react";

function App() {
  interface FichaDoUsuario {
    avatar_url: string;
    created_at: string;
    name: string;
    login: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    location: string;
    twitter: string;
    link: string;
    company: string;
  }

  const [typedUser, setTypedUser] = useState("");
  const [userData, setUserData] = useState<FichaDoUsuario | null>(null);

  async function fetchGitHubUser() {
    const response = await fetch(`https://api.github.com/users/${typedUser}`);
    const data = await response.json();

    setUserData(data);
  }

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
          <input
            type="search"
            placeholder="Search GitHub username..."
            value={typedUser}
            onChange={(e) => setTypedUser(e.target.value)}
          />
          <button onClick={fetchGitHubUser}>Search</button>
        </div>
        <div className="search-results">
          <div className="user-profile-info">
            <div className="search-results-header">
              <img src={userData?.avatar_url} alt="Avatar" />
              <h3>{userData?.name}</h3>
              <p>Joined {userData?.created_at?.split("-")[0]}</p>
            </div>
            <h6>@{userData?.login}</h6>
            <p>{userData?.bio}</p>
          </div>
          <div className="user-stats-container">
            <div className="user-stats">
              <h6>Repos</h6>
              <p>{userData?.public_repos}</p>
            </div>
            <div className="user-stats">
              <h6>Followers</h6>
              <p>{userData?.followers}</p>
            </div>
            <div className="user-stats">
              <h6>Following</h6>
              <p>{userData?.following}</p>
            </div>
          </div>
          <div className="user-infos">
            <div className="user-infos-item">
              <p>📍{userData?.location}</p>
            </div>
            <div className="user-infos-item">
              <p>🐦{userData?.twitter}</p>
            </div>
            <div className="user-infos-item">
              <p>📎{userData?.link}</p>
            </div>
            <div className="user-infos-item">
              <p>🏢{userData?.company}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
