import React, { useState } from 'react';
import './admin.css';
import { SidebarData } from './SidebarData';
import { Fade,Stagger } from 'react-animation-components';
const Sidebar = () => {
    return (
        <>
            <div className="Sidebar">
                <ul className="SidebarList">
                    {SidebarData.map((val, key) => {
                        return (
                            <Fade in>
                            <li
                                key={key}
                                className="row"
                                id={window.location.pathname == val.link ? "active" : ""}
                                onClick={() => {
                                    window.location.pathname = val.link;
                                }}
                            >
                                <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
                            </li>
                            </Fade>
                        );
                    })}
                </ul>
            </div>
        </>
    )
}

export default Sidebar;