function Button({ color, click }) {
    return (
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: color }} onClick={() => click(color)}>{color}</button>
    )
}

export default Button;