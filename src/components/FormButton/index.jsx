

export const FormButton = (props) => {

    function handleClick(event) {
        event.preventDefault();
      }

    return (
        <button onClick={handleClick} className="border-2 self-center rounded-md hover:border-blue-300 px-3"  >
            {props.text}
        </button>
    )
}