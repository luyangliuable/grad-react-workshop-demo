import "./tag.css";
import React from 'react';
import classNames from "classnames";

const Tag: React.FC<ITagProps> = ({
    style,
    children,
    className
}) => {
    return (
        <div style={style} className={classNames("search--tag")}>
            {children}
        </div>
    );
}

export default Tag; 
