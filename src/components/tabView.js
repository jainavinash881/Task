import React from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
  } from 'react-native';

  const TabView = ({data}) => {
    const onSelectPlan = () => {
        console.log('plan selected')
    }
    return(
        <View>
            {
                data && data.length > 0 && data.map((index, item) => {
                    return(
                        <View key={item} style={styles.tabView}>
                            <View style={styles.flexStyle}>
                                <Text style={styles.priceText}>₹{index.price}</Text>
                                <TouchableOpacity
                                    onPress={onSelectPlan}
                                    style={styles.selectPlan}
                                >
                                    <Text style={styles.selectButtonText}>Select</Text>
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.validityText}>Validity: {index.validity}</Text>
                            <Text style={styles.descText}>{index.desc}</Text>
                        </View>
                    )
                })
            }
        </View>
    )
  }

  const styles = StyleSheet.create({
    flexStyle: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    tabView: {
        marginStart: 30,
        marginEnd: 30,
        marginTop: 10,
        borderBottomColor: 'rgb(151, 151, 151)',
        borderBottomWidth: 1,
    },
    selectPlan:{
        borderColor: 'rgba(241, 128, 13, 1)',
        fontSize: 12,
        lineHeight: 18,
        borderWidth:1,
        borderRadius: 50,
    },
    selectButtonText:{
        color: 'rgba(241, 128, 13, 1)',
        paddingTop: 3,
        paddingBottom: 3,
        paddingLeft: 20,
        paddingRight: 20
    },
    priceText:{
        fontSize: 18,
        lineHeight: 28,
        fontWeight: 'bold',
        color: 'rgba(38, 50, 56, 1)',
        fontFamily:'Roboto',
        marginTop: 10,
    },
    validityText:{
        fontSize: 12,
        lineHeight: 16,
        color: 'rgba(38, 50, 56, 0.7)',
        fontFamily:'Roboto'
    },
    descText: {
        fontSize: 12,
        lineHeight: 18  ,
        color: 'rgba(38, 50, 56, 0.7)',
        fontFamily:'Nunito Sans',
        marginBottom: 10,
    }
  });

  export default TabView