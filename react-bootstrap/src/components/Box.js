import classes from './Box.module.css'
function Box(props){
    function SubmitHandler(){
        alert("Thankyou")
    }
    return(
        <div className={classes.box} data-testid={props.name}>
            <h3>{props.name}</h3>
            <p >
            React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render 
            </p>
            <button onClick={SubmitHandler}>Submit</button>
        </div>
    )
}
export default Box;