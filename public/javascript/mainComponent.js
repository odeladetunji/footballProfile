// parent component for all other class
class ParentComponent extends React.Component {
    Constructor(props) {
        super(props);
        this.state = {
   
        }
    }

    render(){
        return(
            <div>

            </div>
        );
    }
}
ReactDOM.render(
    <ParentComponent />, document.getElementById('root')
);
