import { IUser } from "../interfaces";

interface UserCardProps {
  user: IUser | null;
}

function UserCard({ user }: UserCardProps) {
  if (!user) {
    return <p>Search for a GitHub user.</p>;
  }

  return (
    <div className="user-card">
      <img src={user.avatar_url} alt={user.login} />

      <h2>{user.name}</h2>
      <p>@{user.login}</p>

      <p>{user.bio || "This profile has no bio."}</p>

      <div className="stats">
        <div>
          <h4>Repos</h4>
          <p>{user.public_repos}</p>
        </div>

        <div>
          <h4>Followers</h4>
          <p>{user.followers}</p>
        </div>

        <div>
          <h4>Following</h4>
          <p>{user.following}</p>
        </div>
      </div>

      <p>📍 {user.location || "Not Available"}</p>
      <p>🔗 {user.blog || "Not Available"}</p>
      <p>🐦 {user.twitter_username || "Not Available"}</p>
      <p>🏢 {user.company || "Not Available"}</p>
    </div>
  );
}

export default UserCard;
