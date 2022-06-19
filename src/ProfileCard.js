import Avatar from "./Avatar";
import "./ProfileCard.css";
import UserProfile from "./UserProfile";


function ProfileCard({user}) {
    const name = `${user.first_name} ${user.last_name}`;
  return (
    <section key={user.id} className="profile__card" id={`user-${user.id}`}>
      <Avatar name={name} url={user.avatar} />
      <UserProfile name={name} email={user.email} />
    </section>
  );
}

export default ProfileCard;
