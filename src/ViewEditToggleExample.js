import React from "react";
import withToggle from "./withToggle";  

const ViewEditToggleStatus = ({toggle, toggleStatus, title}) =>(
    <div>
        {
            toggleStatus ? <input type={"text"} value="title" /> : <p>{title}</p>
        }
        <button onClick={toggle}>
            {
                toggleStatus ? 'Cancel' : 'Edit'
            }
        </button>
    </div>
)

export default withToggle(ViewEditToggleStatus)