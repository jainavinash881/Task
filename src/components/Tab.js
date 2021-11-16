import React, { useState } from "react";
import TabTitle from "../components/TabTitle";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity
  } from 'react-native';



const Tabs = (children) => {
 var array = Object.keys(children).map(k => children[k]);
  const [selectedTab, setSelectedTab] = useState(0)
  return (
    <View>
      <ul>
        {children && children.map((item, index) => {
            return(
                <TabTitle
                key={index}
                title={item.props.title}
                index={index}
                setSelectedTab={setSelectedTab}
              />
            )
        })}
      </ul>
      {children[selectedTab]}
    </View>
  )
}

export default Tabs