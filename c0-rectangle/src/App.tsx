import React, { useEffect, useRef, useState } from 'react';
import { Football } from './themes/football';
import { Beach } from './themes/beach';
import { Night } from './themes/night';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import './App.scss'

enum Theme {
  FOOTBALL = 'Football',
  FARM = 'Farmland',
  NIGHT = 'Night',
  BEACH = 'Beach',
}

const App: React.FC = () => {

  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? (savedTheme as Theme) : Theme.FOOTBALL;
  })

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleChange = (event: SelectChangeEvent<Theme>) => {
    const newTheme = event.target.value as Theme;
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext('2d');
    if (!context) {
      return;
    }

    clearCanvas(canvas, context); // cleanup before rendering new theme

    switch (theme) {
      case Theme.FOOTBALL:
        const football_instance = new Football();
        football_instance.drawFootballPitchAll(canvas, context);
        break;
      case Theme.BEACH:
        const beach_instance = new Beach();
        beach_instance.drawBeachAll(canvas, context);
        break;
      case Theme.NIGHT:
        const night_instance = new Night();
        night_instance.drawNightAll(canvas, context);
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <div className='DifferentThemes'>
      <canvas ref={canvasRef} width={800} height={600} />
      <FormControl variant="outlined" className="FormControl">
        <InputLabel id="demo-simple-select-label">Theme</InputLabel>
        <Select
          onChange={handleChange}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          defaultValue={Theme.FOOTBALL}
          value={theme}
          label="Theme"
        >
          <MenuItem value={Theme.FOOTBALL}>Football</MenuItem>
          <MenuItem value={Theme.FARM}>Farmland</MenuItem>
          <MenuItem value={Theme.NIGHT}>Night</MenuItem>
          <MenuItem value={Theme.BEACH}>Beach</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default App;

const clearCanvas = (canvas: HTMLCanvasElement, context: CanvasRenderingContext2D) => {
  context.clearRect(0, 0, canvas.width, canvas.height);
};
