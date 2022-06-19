import "./UserProfile.css";

function UserProfile({ name, email }) {
  return (
    <div className="user__profile">
      <h2 className="user__profile-name">{name}</h2>
      <h3 className="user__profile-email">
        <a href={`mailto:${email}`}>{name}</a>
      </h3>
    </div>
  );
}

export default UserProfile;
