import axios from "axios";
import React from "react";

class LifecycleComponent extends React.Component {

        state = {
            count: 0
        }


    async serverRequest () {
        const data = await axios.get('https://todo-redev.herokuapp.com/api/todos')
        console.log(data);
    }

    componentDidMount () {
        this.serverRequest()
    }
    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.state.count !== this.state.count && nextProps.state.count % 2 === 0;
    }
    componentDidUpdate () {
        console.log(this.state.count);
    }
    componentWillUnmount() {
        console.log('Component will be deleted');
    }
    render () {
        return <div>
            Значение счётчика: {this.state.count}
            <button onClick={() => this.setState((state) => ({count: state.count + 1}))}>Увеличить</button>
            </div>
    }
}
export default LifecycleComponent;