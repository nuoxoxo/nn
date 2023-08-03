import { useState, useEffect } from "react";

const sourcePath =
  "https://raw.githubusercontent.com/nuoxoxo/in/main/hsk3.json";

interface Word {
  words: string;
  simplified: string;
}

var PrinterHSK = () => {
  const [words, setWords] = useState<Word[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const resp = await fetch(sourcePath);
      const data = await resp.json();
      // setWords(data['words']);
      setWords(data.words);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [textColor, setTextColor] = useState(getRandomTextColor());

  const [name, setSingleName] = useState<string>(() => {
    if (words.length === 0) return "";
    return words[Math.floor(Math.random() * words.length)].simplified;
  });

  useEffect(() => {
    if (words.length > 0) {
      const res = words[Math.floor(Math.random() * words.length)].simplified;
      setSingleName(res);
    }
  }, [words]);

  function getRandomTextColor() {
    const offset = 42;
    const offsetInverted = 255 - offset;
    return {
      color:
        "rgb(" +
        Math.round(Math.random() * offsetInverted + offset) +
        "," +
        Math.round(Math.random() * offsetInverted + offset) +
        "," +
        Math.round(Math.random() * offsetInverted + offset) +
        "," +
        "1)",
      fontWeight: "bold",
    };
  }

  var handleOnClick = () => {
    setTextColor(getRandomTextColor());
    if (words.length === 0) return;
    setSingleName(words[Math.floor(Math.random() * words.length)].simplified);
  };

  return (
    <>
      <div className="main-body-lower" onClick={handleOnClick}>
        <div className="div-text">
          {loading ? (
            <span>Loading...</span>
          ) : (
            <>
              <span
                className="span-text"
                title="click me !!!"
                // onClick={handleOnClick}
                style={textColor}
              >
                {name}
              </span>
              <br />
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default PrinterHSK;
