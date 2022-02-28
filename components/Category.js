import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{ height: 130, width: 130, marginLeft: 20, borderWidth: 0.5, borderColor: '#dddddd',borderRadius:10,backgroundColor:'white', shadowOpacity: .25,
elevation: 5,}}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover',borderWidth:0.5,borderTopLeftRadius:4,borderTopRightRadius:4 }}
                    />
                </View>
                <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10,flexDirection:'row' }}>
                    <Text>{this.props.name}</Text><Text style={{fontWeight:'medium',}}> - {this.props.duration}</Text>
                </View>
            </View>
        );
    }
}
export default Category;
