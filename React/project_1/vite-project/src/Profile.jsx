import './profile.css';

export const Profile = ({name,uni,uni1}) =>{
    return(
        <div className="profile">
        <h1>{name}</h1>
        <h2>{uni}</h2>
        <h3>{uni1}</h3>
        </div>
    )
};