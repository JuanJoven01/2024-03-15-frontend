
//Receives:
// text
// just render a text with very basic styles
export const Title = (props) => {

    return(
        <h1 className="mt-5 font-semibold text-xl">
            {props.text}
        </h1>
    )
}