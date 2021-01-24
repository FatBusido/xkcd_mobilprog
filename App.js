import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import XkcdRandom from './xkcdAPI/xkcd_Random.js';

const App: () => React$Node = () => {
  return (
  <>
  <SafeAreaView>
    <StatusBar barStyle="dark-content" />
    <XkcdRandom text="Hello" />
    </SafeAreaView>
  </>
  )
  };

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "#ececec",
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: "#ffffff",
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: "#000000",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: "#333333",
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: "#333333",
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
