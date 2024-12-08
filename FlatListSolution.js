The solution involves optimizing the FlatList component to improve rendering performance:

1. **`windowSize`:** Increase the `windowSize` prop to render more items at once, reducing the number of re-renders.
2. **`getItemLayout`:** Implement the `getItemLayout` prop to provide the dimensions of each item, enabling FlatList to optimize its layout calculations.  This is particularly effective if the item heights are consistent.
3. **Consider `VirtualizedList`:** If performance is still unacceptable even after the above optimizations, consider using `VirtualizedList` for more fine-grained control over rendering.

```javascript
<FlatList
  data={largeDataset}
  renderItem={({ item }) => <ItemComponent item={item} />}
  keyExtractor={(item) => item.id}
  windowSize={21} // Increased window size
  getItemLayout={(data, index) => ({ 
    length: ITEM_HEIGHT,
    offset: ITEM_HEIGHT * index,
    index,
  })}
/>
```

Where `ITEM_HEIGHT` is a constant representing the height of each item in the list.  Remember to adjust `windowSize` and `ITEM_HEIGHT` based on your specific needs and data.