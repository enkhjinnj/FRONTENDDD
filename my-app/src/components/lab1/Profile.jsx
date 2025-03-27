
import React from "react";

const PersonCard = ({ name, role, image }) => {
    return (
        <div className="person-card">
            <img
                src={image}
                alt={name}
                className="person-image"
            />
            <h2 className="person-name">{name}</h2>
            <p className="person-role">{role}</p>
        </div>
    );
};

export default PersonCard;
