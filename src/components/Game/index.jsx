// src/components/Game.js
import { useEffect, useMemo, useState } from 'react';
import keyPress from '../../assets/sound/key-press.mp3';
import wrongAnswer from '../../assets/sound/wrong-answer.mp3';
import Result from '../Result';
import Sequence from '../Sequence';
import Timer from '../Timer';
import * as C from './styles';

const generateSequence = (length) => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return Array.from(
    { length },
    () => letters[Math.floor(Math.random() * letters.length)]
  );
};

const Game = () => {
  const [sequence, setSequence] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState('');
  const [pressedKeys, setPressedKeys] = useState([]);
  const [keyColors, setKeyColors] = useState([]);

  const keyPressSound = useMemo(() => new Audio(keyPress), []);
  const errorSound = useMemo(() => new Audio(wrongAnswer), []);

  useEffect(() => {
    setSequence(generateSequence(5));
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0) {
      setGameOver(true);
      setResult('Tempo esgotado!');
    }
  }, [timeLeft, gameOver]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleKeyPress = (e) => {
    if (gameOver) return;

    if (e.key.toUpperCase() === sequence[currentIndex]) {
      keyPressSound.play();
      setTimeout(() => {
        keyPressSound.pause();
        keyPressSound.currentTime = 0; // Reset the sound to the beginning
      }, 130); // Stop the sound after 130ms
      setPressedKeys((prev) => [...prev, e.key.toUpperCase()]);
      setKeyColors((prev) => [...prev, 'green']);
      if (currentIndex === sequence.length - 1) {
        setGameOver(true);
        setResult('Você ganhou!');
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    } else {
      errorSound.play();
      setGameOver(true);
      setResult('Você pressionou a tecla errada!');
      setKeyColors((prev) => [...prev, 'red']);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentIndex, gameOver, handleKeyPress]);

  const handleRestart = () => {
    setSequence(generateSequence(5));
    setCurrentIndex(0);
    setTimeLeft(20);
    setGameOver(false);
    setResult('');
    setPressedKeys([]);
  };

  return (
    <C.Bg>
      <C.Game>
        <Sequence
          sequence={sequence}
          currentIndex={currentIndex}
          pressedKeys={pressedKeys}
          keyColors={keyColors}
        />
        <Timer timeLeft={timeLeft} />
        {gameOver && <Result result={result} onRestart={handleRestart} />}
      </C.Game>
    </C.Bg>
  );
};

export default Game;
