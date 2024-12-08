# React Native FlatList Performance Issue

This repository demonstrates a common performance problem encountered when using the FlatList component in React Native with extensive datasets.  The bug showcases significant lag and slow rendering, especially on lower-end devices.

## Problem

The provided `FlatListBug.js` file contains a FlatList component populated with a large array of data.  Rendering this list causes noticeable performance issues, including slow scrolling and UI freezes.

## Solution

The `FlatListSolution.js` file presents a solution to improve performance.  This involves optimizing the rendering process using techniques such as windowSize, getItemLayout, and potentially using a VirtualizedList if performance remains an issue after other optimizations.