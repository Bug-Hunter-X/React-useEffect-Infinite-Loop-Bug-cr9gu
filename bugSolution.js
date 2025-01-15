```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct:  Use a function to update count, thus only firing this side effect on mount 
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000); //Update every 1 second
    return () => clearInterval(intervalId); // Cleanup function to prevent memory leaks
  }, []);

  return <div>Count: {count}</div>;
}
```