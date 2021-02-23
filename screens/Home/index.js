import React, { useState } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import Header from './components/Header';
import { dummyData } from "../../constants"
import PriceAlert from '../../components/Alert/PriceAlert';
import Notice from '../../components/Notice/Notice';

const Home = ({ navigation }) => {
    const [trending, setTrending] = useState(dummyData.trendingCurrencies)
    return (
        <ScrollView>
            <View style={styles.screen}>
                <Header trending={trending} />
                <PriceAlert />
                <Notice />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingBottom: 130,
    },
})

export default Home;