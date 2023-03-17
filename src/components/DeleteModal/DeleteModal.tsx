import React from "react";
import {View,Text,Modal, Button} from 'react-native';

function DeleteModal(props:any){
    return(
        <Modal
        animationType="slide"
        visible={props.visible}
        transparent={true}
        onRequestClose={()=>props.onClose()}
        >
            <View style={{position:'absolute',top:300,bottom:300,left:100,right:100,backgroundColor:"white",borderWidth:1}}>
        <Text>Are you sure you want to delete this?</Text>
        <Button onPress={()=>props.onClose()} title="Close"/>
            </View>
        </Modal>
    )
}

export default DeleteModal;