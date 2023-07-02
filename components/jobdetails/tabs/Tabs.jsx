import React from 'react'
import { TouchableOpacity, FlatList,View, Text } from 'react-native'

import styles from './tabs.style'
import SIZES from '../../../constants/theme'

const TabButton = ({name, activeTab, onHandleSearchType}) => (
  <TouchableOpacity
    style={styles.btn(name,activeTab)}
    onPress={onHandleSearchType}>
    <Text style={styles.btnText(name,activeTab)}>{name}</Text>
  </TouchableOpacity>
)

const Tabs = ({tabs, activeTab, setActiveTab}) => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={tabs}
        renderItem={({item})=>(
        <TabButton
          name={item}
          activeTab={activeTab}
          onHandleSearchType={()=>setActiveTab(item)}
        />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item}
        contentContainerStyle={{columnGap:6}}//SIZES.small/2}}
      />
    </View>
  )
}

export default Tabs