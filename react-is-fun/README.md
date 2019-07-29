
#Basic format of creating elements
const basicDisplay = React.createElement(
    'h1', #element
    {id:'name',className:'header'}, #attributes
    'Hello World' #childElements(or)content
)

#Rendering the content
ReactDOM.render(
    basicDisplay, #elementVariables
    document.getElementById('root') #rendering position
)

#classes/components in react

#procedure1
class App extends React.Component{
    render(){
        return(
            //return the rendering content
        )
    }
}

#procedure2
function app(){
    return(
        //return the rendering content
    );
}

#{this.props} is used for getting the props provided in xml tags
<ReactSample name='srikar' />
{this.props.name} gives srikar
But for applying styles or classes kind of things use {{color: this.props.color}}

# To set local states into our component

class Library extends React.Component{

#procedure1 (create a constructor and bind if there are any functions with this )
    constructor(props){
        super(props);
        this.state={
            //random data
            {open:true}
        }
        this.functionName=this.functionName.bind(this)
    }
}

functionName(){
    //functionality
}

#procedure2 (create a variable and convert functions to ES6 which defaults binding this)
state = {open:true}

functionName=()=>{ //functionality }

#Modification of state
To modify a state we need to use setState method and update the values needed.
    Ex1:
        this.setState({//object values to update})
    Ex2:
        this.setState(prevState=>({
            //update object values based on prev state
        }))
As setState is an asynchronous function using the Ex2 is preferred as the state gets maintained properly
    
