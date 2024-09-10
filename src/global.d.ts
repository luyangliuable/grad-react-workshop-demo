import { RefObject } from "react"

interface ITagProps {
    style?: React.CSSProperties
    className?: string,
    children?: React.ReactNode,
    leftCorner?: boolean
}

interface ICallToActionProps {
    href?: string,
    ref?: RefObject<HTMLLinkElement>
    children?: React.ReactNode,
}
