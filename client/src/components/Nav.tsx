import { useEffect, useRef, useState } from "react"
import Search from "./Search"

function Nav() {
    const navLink = useRef<HTMLUListElement | null>(null)
    const [ openSearch, setOpenSearch ] = useState<boolean>(false)

    useEffect(() => {
          window.addEventListener('keydown', (event) => { 
            if(event.ctrlKey && event.key === 'k') {
                event.preventDefault()
                setOpenSearch(true)
            }            
          })
    }, [])

    return (
        <nav className="relative flex items-center justify-between">
            <Search open={openSearch} setOpen={(open) => setOpenSearch(open)} />
            <div>
                <a href="#">
                    <img src="./favicon.png" alt="logo" width={50} height={50} />
                </a>
            </div>
            <ul ref={navLink} className="flex gap-8 max-sm:p-4 max-sm:flex-col max-sm:gap-4 max-sm:shadow max-sm:rounded max-sm:absolute max-sm:right-0 max-sm:top-12 max-sm:hidden">
                <li>
                    Product
                </li>
                <li>
                    Recomended
                </li>
                <li>
                    Contact
                </li>
            </ul>
            <div className="flex gap-8">
                <button onClick={() => setOpenSearch(true)} className="px-3 py-1 rounded-full border flex gap-12 items-center max-sm:border-none max-sm:px-0">
                    <h1 className="opacity-40 max-sm:hidden">CTR + K</h1>
                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"></path></svg>
                </button>
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736C22.5053 7.02472 22.583 10.637 20.4786 12.993L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853ZM18.827 6.1701C17.3279 4.66794 14.9076 4.60701 13.337 6.01687L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L11.9999 18.6543L19.0201 11.6232C20.3935 10.0467 20.319 7.66525 18.827 6.1701Z"></path></svg>
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.0002 2C15.8662 2 19.0002 5.13401 19.0002 9H20.0742C20.5967 9 21.0311 9.40231 21.0712 9.9233L21.9174 20.9233C21.9597 21.474 21.5477 21.9547 20.997 21.9971L20.9203 22H3.08008C2.52779 22 2.08008 21.5523 2.08008 21L2.08302 20.9233L2.92918 9.9233C2.96925 9.40231 3.4037 9 3.92623 9H5.0002C5.0002 5.13401 8.13421 2 12.0002 2ZM19.1472 11H4.8522L4.1592 20H19.8402L19.1472 11ZM14.0002 13V15H10.0002V13H14.0002ZM12.0002 4C9.31145 4 7.11838 6.12231 7.00482 8.78311L7.0002 9H17.0002C17.0002 6.31124 14.8779 4.11818 12.2171 4.00462L12.0002 4Z"></path></svg>
            </div>
            <button className="sm:hidden" onClick={() => navLink.current?.classList.toggle('max-sm:hidden')}>
                <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
            </button>
        </nav>
    )
}

export default Nav