import { MouseEvent } from "react";

interface searchProps {
    open: boolean;
    setOpen?: (open: boolean) => void;
}

function Search({ open, setOpen }: searchProps) {
    const clickBox = (event: MouseEvent<HTMLDivElement>) => {
        const target = event.target as HTMLElement
        if(target.id === "box") {
            setOpen && setOpen(false)
        }
    }

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if(event.key === "Escape") {
            setOpen && setOpen(false)
        }        
    }

    return (
        <>
            {
                open &&
                <div id="box" onClick={clickBox} className="fixed bg-slate-950 backdrop-blur-sm bg-opacity-10 top-0 bottom-0 left-0 right-0 z-10">
                    <form className="p-4 rounded shadow bg-white absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2">
                        <h2>Search your favorite...</h2>
                        <div className="border p-2 mt-4 flex gap-4 rounded">
                            <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
                            <input autoFocus onKeyDown={handleKeyDown} className="outline-none" type="text" placeholder="Search..." />
                            <span>ESC</span>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}

export default Search