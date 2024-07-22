const { default: Menu } = require("./menu")
const { default: Downloadbtn } = require("./nav-bar")

const Header = () => {
    return (
        <header className="flex items-center justify-between px-20 py-4">
      <h1 className="text-3xl font-bold">ERKA</h1>
           
            <Downloadbtn/>
    </header>
    )
}
export default Header;
