This bug occurs when using the FlatList component in React Native with a large dataset.  The component renders very slowly, causing significant lag and poor user experience.  This is particularly noticeable on lower-end devices.

```javascript
<FlatList
  data={largeDataset}
  renderItem={({ item }) => <ItemComponent item={item} />}
  keyExtractor={(item) => item.id}
/>
```

The issue stems from the way FlatList handles rendering and recycling of list items. With a massive dataset, the rendering process becomes overwhelmed, resulting in poor performance.