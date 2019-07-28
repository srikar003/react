
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

#1st way
class App extends React.Component{
    render(){
        return(
            //return the rendering content
        )
    }
}

#2nd way
function app(){
    return(
        //return the rendering content
    );
}

#{this.props} is used for getting the props provided in xml tags
<ReactSample name='srikar' />
{this.props.name} gives srikar
But for applying styles or classes kind of things use {{color: this.props.color}}


