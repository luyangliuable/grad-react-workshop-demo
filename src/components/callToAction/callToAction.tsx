import classNames from "classnames";
import "./callToAction.css";
import React, { forwardRef } from "react";
import { ICallToActionProps } from "../../global";

const CallToAction = forwardRef<HTMLAnchorElement, ICallToActionProps>(({ children, href }, ref) => {
    return (
        <a ref={ref} href={href} className="call-to-action">{children}</a>
    )
});

export default CallToAction;
