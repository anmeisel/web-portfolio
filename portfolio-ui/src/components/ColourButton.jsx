import "./ColourButtonStyle.css"

export default function ColourButton(props) {
    return (
        <button 
        onClick={() => props.action(props.col)} style={{backgroundColor: props.col}} className="btn">
        </button>
    )
}