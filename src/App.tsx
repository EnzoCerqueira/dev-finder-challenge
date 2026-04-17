import "./App.css";
import { FaSearch } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import { useEffect, useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { CiDark } from "react-icons/ci";

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
    twitter_username: string;
    blog: string;
    company: string;
  }

  const [typedUser, setTypedUser] = useState("");
  const [userData, setUserData] = useState<FichaDoUsuario | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  const [isLightMode, setIsLightMode] = useState(() => {
    const savedTheme = localStorage.getItem("myTheme");
    return savedTheme === "light";
  })

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    const newTheme = !isLightMode;
    setIsLightMode(newTheme);

    localStorage.setItem("myTheme", newTheme ? "light" : "dark");
  };


  async function fetchGitHubUser() {
    setIsLoading(true);
    setIsVisible(false);
    setError(false);
    try {
      const response = await fetch(`https://api.github.com/users/${typedUser}`);
      if (!response.ok) {
        setError(true);
        return;
      }
      const data = await response.json();
      setUserData(data);
      setIsVisible(true);
    } catch (e) {
      console.log("Erro de conexão!", e);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  const handlePressEnter = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter"){
      fetchGitHubUser();
    }
  }


  return (
    <div className="container">
      <div className="content">
        <header>
          <h1>DevFinder</h1>
          <div className="toggle-theme">
            <button onClick={toggleTheme}>
              {isLightMode ? (
                <span className="dark-icon">
                  <CiDark />
                  <p>dark</p>
                </span>
              ) : (
                <span className="light-icon">
                  <CiLight />
                  <p>light</p>
                </span>
              )}
            </button>
          </div>
        </header>
        <div className="search-container">
          <div>
            <FaSearch />
            <input
              type="search"
              placeholder="Search GitHub username..."
              value={typedUser}
              onChange={(e) => setTypedUser(e.target.value)}
              onKeyDown={handlePressEnter}
            />
          </div>
          <button onClick={fetchGitHubUser} >Search</button>
        </div>
        <div className="loading">
          {isLoading && <div className="spinner"></div>}
        </div>
        <div className="error">
          {error && <p>🚫 Error: User not found. 🚫</p>}
        </div>

        <div
          className="search-results"
          style={{ display: isVisible ? "block" : "none" }}
        >
          <div className="user-profile-info">
            <div className="search-results-header">
              <div>
                <img src={userData?.avatar_url} alt="Avatar" />
                <h3>{userData?.name}</h3>
              </div>
              <p>Joined {userData?.created_at?.split("-")[0]}</p>
            </div>
            <h5>@{userData?.login}</h5>
            <p>{userData?.bio || "No bio available."}</p>
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
              <p>📍{userData?.location || "No location available."}</p>
            </div>
            <div className="user-infos-item">
              <CiTwitter className="twitter" />
              <p> {userData?.twitter_username || "No Twitter available."}</p>
            </div>
            <div className="user-infos-item">
              <p>📎{userData?.blog || "No blog available."}</p>
            </div>
            <div className="user-infos-item">
              <p>🏢{userData?.company || "No company available."}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
