function Header() {
  return (
    <header className="mt-4 mx-12">
        <div className="flex gap-4 text-xs justify-end">
        <ul>
            <li>My Account</li>
        </ul>
        <ul>
            <li>Contact</li>
        </ul>
        <ul>
            <li className="flex items-center">
            <img className="w-5 h-5" src="./english.png" alt="english" />
            English
            </li>
        </ul>
        </div>
    </header>
  )
}

export default Header