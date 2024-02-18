import "./ColourButtonStyle.css"

const [buttonColor, setButtonColor] = useState("transparent");

export default function ColourButton(props) {

    return (
        <button
        onClick={() => props.action(props.col)} style={{ backgroundColor: buttonColor ? "transparent" : "darkgrey" }} className="btn">
        </button>
    )
}