export function Botao(props){
    return(
        <>
            <div>
                {props.currentTags.map((currentTag) => {
                    return (
                        <small className="m-1" style={{ color: "gray" }}>
                            {currentTag}
                        </small>
                    );
                })}
            </div>
            <button
                class="btn btn-primary"
                type="button"
                onClick={props.but}
                name={props.tagName}
            >
            Add
            </button>
    </>
    );
}