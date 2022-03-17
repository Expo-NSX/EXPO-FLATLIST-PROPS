
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function Button(props){
    return(
        <TouchableOpacity style={[styles.container, { backgroundColor: props.bg }]}>
            <Text style={styles.containerText}>{props.title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 20,
        paddingVertical: 10,
        marginBottom: 20,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerText:{
        color: '#FFF',
        fontWeight: 'bold'
    }
});