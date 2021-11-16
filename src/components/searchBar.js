import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Image
  } from 'react-native';

import searchIcon from '../resources/images/Shape.png' 

const searchBar = () => {

    return(
        <SafeAreaView>
            <View style={styles.searchBar}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Search Plan Amount, Talktime"
                    placeholderTextColor="rgba(38, 50, 56, 0.4)"
                    
                />
                <Image
                        style={styles.searchLogo}
                        source={searchIcon}
                        resizeMode={'cover'} 
                />
            </View>
            
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    searchBar:{
        flex: 1,
        alignItems: 'center',
        margin: '8%'
    },
    textInput:{
        borderBottomWidth: .8,
        borderBottomColor: 'rgba(38, 50, 56, 0.7)',
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(38, 50, 56, 1)',
        width: '100%',
    },
    searchLogo:{
        height: 13,
        width: 13,
        position: 'absolute',
        right: 10,
        top: 19
    }
});

export default searchBar