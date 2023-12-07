import axios from "axios";
import React from "react";

class LifecycleComponent extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            count: 0,
        }
    }        

    async serverRequest () {
        const data = await axios({
            method: 'post',
            url: 'https://todo-redev.herokuapp.com/api-docs/api/auth/login',
            data: {
                "email": "il7zah@mail.ru",
                "password": "DjElistar_6017610"
            }
        })
        console.log(data);
    }

    componentDidMount () {
        this.serverRequest()
        console.log('Component has mounted');
    }
    shouldComponentUpdate (nextProps, nextState) {
        return nextState.count % 2 === 0;
    }
    componentDidUpdate () {
        console.log('Component has updated');
        console.log(this.state.count);
    }
    componentWillUnmount() {
        console.log('Component will unmount');
    }
    render () {
        return <div>
            Значение счётчика в классовом компоненте: {this.state.count}
            <button onClick={() => this.setState((state) => ({count: state.count + 1}))}>Увеличить</button>
            </div>
    }
}
export default LifecycleComponent;