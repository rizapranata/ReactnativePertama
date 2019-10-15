import React from 'react';
import { View, Text } from 'react-native';

class ComponentState extends React.Component{
    constructor(){
        super()
        this.state = {name:'Rico'} //instansiasi state
    }

    componentWillMount(){
        this.setState({name: 'Denis'});
    }

    render(){
        //#3 read component state menggunakan this state <nama state>
        return(
            <View>
                <Text>{this.state.name}</Text>
            </View>
        );
    }
}

export default ComponentState;