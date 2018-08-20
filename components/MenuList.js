import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import Modal from 'react-native-modal'
import MenuItem from './MenuItem'
import AddMenu from './AddMenu'
import MenuCategoryButtons from './MenuCategoryButtons'
import LineBreaker from './LineBreaker'
import ModalButtons from './ModalButtons'

export default ({
  products, category, modalToggler,
}) => (
  <View style={{ flex: 1 }}>
    <ScrollView>
      <View style={styles.listContainer}>
        {
          products && products
            .filter(item => item.category.name === category)
            .map(item => (
              <MenuItem
                key={item.name}
                title={`Menu #${products.indexOf(item)}`}
                item={item}
                onPress={() => {}}
              />
            ))
        }
        <AddMenu onPress={modalToggler} />
      </View>
    </ScrollView>
  </View>
)

const styles = StyleSheet.create({
  listContainer: {
    marginLeft: 10,
    marginRight: 10,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})

