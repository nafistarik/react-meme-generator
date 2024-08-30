import React from "react"

export default function Header() {
    return (
        <header className="header">
            <img 
                src="/logo192.png" 
                className="header--image" 
                alt="Troll-face"
            />
            <h4 className="header--project">Link your words to a visual</h4>
        </header>
    )
}
