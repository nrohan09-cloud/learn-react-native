import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularjobs.style';
import { COLORS, SIZES } from '../../../constants';
import PopularjobsCard from '../../common/cards/popular/PopularJobCard';

import useFetch from '../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFetch(
    'search',
    {query: 'React Developer',
    num_pages: 1}
  )

  const handleRefresh = () => {
    // Handle refresh logic here, if needed
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? ( // Render error message if error state is true
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data} 
            renderItem={({ item }) => (
              <PopularjobsCard
                item={item}
              />
            )}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            refreshing={isLoading} // Set refreshing prop to isLoading to show the ActivityIndicator during refresh
            onRefresh={handleRefresh} // Handle refresh event
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
