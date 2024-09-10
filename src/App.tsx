import React, { RefObject, useEffect, useRef, useState } from 'react';
import './App.css';
import Tag from './components/tag/tag';
import CallToAction from './components/callToAction/callToAction';

function App() {
    const [path, setPath] = useState<string[]>([]);

    const [currentHighlightedIdx, setCurrentHighlightedIdx] = useState<number>(0);

    const refArr = [useRef<HTMLAnchorElement>(null), useRef<HTMLAnchorElement>(null)];

    const searchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        setPath(window.location.pathname.split("/").filter(item => item !== ""));
        if (refArr[currentHighlightedIdx].current) {
            refArr[currentHighlightedIdx].current!.focus();
        }

        const keyDownAction = (e: KeyboardEvent) => {
            const { key } = e;

            if (key === "ArrowDown") setCurrentHighlightedIdx(prev => (prev + 1) % ( refArr.length + 1));
            if (key === "ArrowUp") setCurrentHighlightedIdx(prev => Math.abs(prev - 1) % (refArr.length + 1));
        }

        window.addEventListener("keydown", keyDownAction);

        return () => window.removeEventListener("keydown", keyDownAction)
    }, []);

    useEffect(() => {
        if (currentHighlightedIdx === 0 && searchRef.current) {
            searchRef.current!.focus();
        } else if (refArr[currentHighlightedIdx - 1].current) {
            refArr[currentHighlightedIdx - 1].current!.focus();
        }
    }, [currentHighlightedIdx]);

    return (
        <div className="App">
            <div className="header">
                <div className="search--wrapper">
                    <Tag style={{
                        zIndex: path.length + 1,
                    }}>Ed</Tag>

                    {
                        path.map((pathName, idx) => {
                            return (
                                <Tag style={{
                                    zIndex: path.length - idx,
                                }}>{pathName}</Tag>
                            )
                        })
                    }
                    <input ref={searchRef} className="search" type="text" />
                </div>
            </div>
            <div className="content">
                <h2>Features</h2>
                <CallToAction
                    ref={refArr[0]}
                    href={`${window.location.href}/Customers`}>
                    Customers
                </CallToAction>
                <br />
                <CallToAction
                    ref={refArr[1]}
                    href={`${window.location.href}/Engineers`}>
                    Engineers
                </CallToAction>
            </div>
        </div >
    );
}

export default App;
