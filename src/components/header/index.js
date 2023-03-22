import me from "../../assets/me.jpg"
import "./index.css"

function Header() {
    return (
        <div class="header">
            <div>
            <img src={me}></img>
            </div>
            <div>
                <h2>Hi! Im Nicole, a fullstack web developer!</h2>
            </div>
        </div>
    )
}

export default Header;