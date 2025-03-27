import React, {useState} from "react";

const ColorList = ({ colors }) => {
    const [actviveColor, setActiveColor] = useState(null);
    const handleColorClick = (color) => {
        setActiveColor(color);
    };
    return (
        <div>
            <h2>Color List</h2>
            <ul>
                {colors.map(color => (
                    <li 
                    key={color}
                    onClick={() => handleColorClick(color)}
                    style={{ color: color, cursor: 'pointer', padding: '10px'}}
                    className={actviveColor === color ? 'active' : ''}
                    >
                        {color}
                    </li>
                ))}
            </ul>
            <p>Active Color: {actviveColor || 'None'}</p>
        </div>
    )
};

export default ColorList