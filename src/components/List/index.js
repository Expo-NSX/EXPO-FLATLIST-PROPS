
import { Text, View, StyleSheet } from 'react-native';

export default function List(props){
    return(
      <View style={styles.card}>
        <Text style={styles.cardText} >NOME:   {props.item.nome}</Text>
        <Text style={styles.cardText} >IDADE:  {props.item.idade}</Text>
        <Text style={styles.cardText} >CIDADE: {props.item.cidade}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    card:{
        width: '100%',
        height: 100,
        backgroundColor: 'blue',
        marginTop: 50,
        justifyContent: 'center',
        paddingHorizontal: 50
    },
    cardText:{
        color: '#FFF'
    }
});