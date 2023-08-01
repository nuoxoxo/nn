# Reading from URL
```r
const path = " / path / "
var App = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const resp = await fetch(sourcePath);
      const data = await resp.json();
      setWords(data.words);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  /// ... logic

  return ()
}

```
