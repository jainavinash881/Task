import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';

import SearchBar from '../../components/searchBar';
import CrossIcon from '../../resources/images/x.png';
import Tabs from "../../components/Tabs";
import TabView from '../../components/tabView';
import data from '../../data.json';



  const HomePage = (props) => {

    const [stateData, setStateData] = useState([]);
    const [activeTab,setActiveTab] = useState('');

    useEffect(() => {
        const selectedData = data.plans.filter((el) => el.type === 'Best Offer for you');
        setStateData(selectedData);
        setActiveTab('Best Offer for you');
    }, [])

    const handleClick = () => {
        console.log("clicked on Cancel Button");
    }
    const onSelectedTab= (result) => {
       setActiveTab('');
       const selectedData = data.plans.filter((el) => el.type === result);
       setStateData(selectedData);
       setActiveTab(selectedData.type);

    }
    console.log(activeTab,"active tab parent")
    return(
        <SafeAreaView>
            <ScrollView>
                <View style={styles.margin}>
                    <Text style={styles.boldText}>Browse Plans</Text>
                    <Text style={styles.regionText}>for Airtel Kolkata</Text>
                        <TouchableOpacity activeOpacity={0.5} onPress={handleClick}>
                            <Image 
                                style={styles.crossIcon}
                                source={CrossIcon}
                                resizeMode={'cover'}
                            />
                        </TouchableOpacity>
                </View>
                <SearchBar />
                <Tabs activeTab={activeTab} header={data.header} getTabsResult={onSelectedTab}/>
                <TabView data={stateData} />
            </ScrollView>
        </SafeAreaView>
    )
  }

  const styles = StyleSheet.create({
        margin: {
            marginStart: 30,
            marginTop: 30
        },
        boldText:{
            color: 'rgba(241, 128, 13, 1)',
            fontWeight: '600',
            fontSize: 18,
            lineHeight: 28,
            fontFamily: 'Montserrat'
        },
        regionText:{
            color: 'rgba(38, 50, 56, 0.7)',
            fontWeight: '400',
            fontSize: 16,
            lineHeight: 22,
            fontFamily: 'Nunito Sans' 
        },
        crossIcon:{
            height: 12,
            width: 12,
            backgroundColor:'black',
            borderRadius: 50,
            position: 'absolute',
            right: 40,
            top: -40,
            zIndex: 100
        }
  });

  export default HomePage;