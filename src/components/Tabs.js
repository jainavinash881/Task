import React, { useState } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    ScrollView,
  } from 'react-native';


const Tabs = ({header, getTabsResult, activeTab}) => {
   
    const [dataState, setDataState] = useState('');
    const getSelected = (tab) => {
        getTabsResult(tab);
    }
    console.log(activeTab,"active tab i child");
    return(
            <ScrollView style={styles.tabsStyle} horizontal={true}>
            {
                header && header.length > 0 && header.map((item,index ) => {
                    return(
                        <TouchableOpacity key={index} dataState={dataState} onPress={() => getSelected(item)}>
                            <View  style={styles.flexView}>
                                <Text style={[styles.tabs, activeTab === item ? styles.active : styles.inactive]} >{item}</Text>
                            </View>
                        </TouchableOpacity>
                    ) 
                })
            } 
            </ScrollView>
    )
}

const styles = StyleSheet.create({
    flexView:{
        paddingStart: 30,

    },
    tabsStyle:{
        display: "flex",
        flexDirection: 'row',
        borderBottomColor: 'rgba(151, 151, 151, 0.3)',
        borderBottomWidth: 1,
    },
    
    tabs:{
        marginRight: 20,
        paddingBottom: 18,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 18,
        color: 'rgba(38, 50, 56, 0.9)',
       
    },
    active:{
        borderBottomColor: "red",
        borderBottomWidth: 2
    },
    inactive:{
        borderBottomWidth: 0
    }
});

export default Tabs;