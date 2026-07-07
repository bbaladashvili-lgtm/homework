import React from "react";

interface SearchProps {
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  searchUser: () => void;
}

function Search({
  username,
  setUsername,
  searchUser,
}: SearchProps) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search GitHub username..."
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={searchUser}>
        Search
      </button>
    </div>
  );
}

export default Search;
