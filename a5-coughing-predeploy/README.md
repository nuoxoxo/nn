# Reading from URL
```ts
const path = " / path / "
var App = () => {
  const [words, setWords] = useState<Word[]>([]);

  const fetchData = async () => {
    try {
      const resp = await fetch(sourcePath);
      const data = await resp.json();
      setWords(data.words);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  /// ... logic

  return ()
}

```
