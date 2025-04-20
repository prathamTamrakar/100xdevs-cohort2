
function Todos(){
    return(
        <div>
            <Todo title='go to gym' description='at 7' done={false} />
        </div>
    )

    interface TodoProp{
        title: string,
        description: string,
        done: boolean
    }

    function Todo(props:TodoProp){
        return(
            <div>
                <h3>{props.title}</h3>
                <h4>{props.description}</h4>
            </div>
        )
    }
}

export default Todos