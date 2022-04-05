import { useEffect, useState } from 'react';
import './App.css';
import { ButtonClickHandler, BoxClickHandler, BoxData, BoxProps } from '../helper/types';
import { newWords } from '../helper/words';
import ActionButton from '../components/actionButton/ActionButton';
import Grid from '../components/grid/Grid';
import Celebrate from '../components/celebrate/Celebrate';
import useSound from 'use-sound';
const toggleSound = require('../sounds/Boop.mp3')
const confettiSound = require('../sounds/ConfettiPopSoundEffect.mp3')

const App = () => {
  const newDataList = function (): BoxData[] {
    return newWords().map((word, index) => {
      return { word: index === 12 ? "Free Cell" : word, stamped: index === 12, isCenter: index === 12 };
    });
  };
  const [playToggleSound] = useSound(toggleSound, { volume: .2 });
  const [playConfettiSound] = useSound(confettiSound, { volume: 10 });
  const [dataList, setDataList] = useState<BoxData[]>(newDataList);
  const [lastIndex, setLastIndex] = useState<number>(0);
  const [shouldCleebrate, setShouldCleebrate] = useState(false) 

  useEffect(() => {

    if (isBingo(lastIndex)) {
      setShouldCleebrate(true)
      playConfettiSound()
      const timer = setTimeout(() => {
        setShouldCleebrate(false)
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [lastIndex]);


  const isBingo = (lastPlayedIndex: number): boolean => {
    const board = [[0, 1, 2, 3, 4], [5, 6, 7, 8, 9], [10, 11, 12, 13, 14], [15, 16, 17, 18, 19], [20, 21, 22, 23, 24]];
    const range = [0, 1, 2, 3, 4]
    const rowIndex = board.findIndex(row => row.includes(lastPlayedIndex));
    const colLIndex = board[rowIndex].indexOf(lastPlayedIndex);

    let diagon: boolean = false;
    if (rowIndex === colLIndex) {
      diagon = !!!range.map(index => {
        return dataList[(index * 5) + index].stamped
      }).includes(false)

    }
    if (rowIndex + colLIndex === 4) {
      diagon = !!!range.map(index => dataList[(index + 1) * 5 - (index + 1)].stamped).includes(false)
    }

    let collumn = !!!range.map(index => dataList[colLIndex + (5 * index)].stamped).includes(false)
    let row = !!!range.map(index => dataList[(rowIndex * 5) + index].stamped).includes(false)

    return collumn || row || diagon;


  };



  const setStamped = (index: number, stamped: boolean, isCenter: boolean): void => {
    playToggleSound()
    setShouldCleebrate(false)
    if (isCenter) return
    setDataList(
      dataList.map((boxData, boxDataIndex) => {
        if (index === boxDataIndex) {
          return { ...boxData, stamped: stamped };
        } else {
          return boxData;
        }
      })
    );
    setLastIndex(index);

  };

  const toggleStampedForIndex = function (
    index: number,
    stamped: boolean,
    isCenter: boolean
  ): BoxClickHandler {


    return () => setStamped(index, !stamped, isCenter)


  };

  const BoxPropsList: BoxProps[] = dataList.map((boxData, index) => ({
    ...boxData,
    toggleStamped: toggleStampedForIndex(index, boxData.stamped, boxData.isCenter),
  }));

  const setNewWords: ButtonClickHandler = () => {
    setDataList(newDataList());
    setShouldCleebrate(false);
    setLastIndex(0)
  };

  const clearAllCells: ButtonClickHandler = () => {
    setDataList(
      dataList.map((boxData, index) => ({ ...boxData, stamped: index === 12 }))
    );
    setShouldCleebrate(false);
    setLastIndex(0)
  };


  return (
    <div className="App">
      <div >
        <header className="App-header">
          <h1> Corporate Bingo</h1>
          <div className="App-actions">
            <ActionButton
              text="New card"
              onClick={setNewWords}
              activeDuration={100}
            />
            <ActionButton
              text="Clear"
              onClick={clearAllCells}
              activeDuration={100}
            />
          </div>
        </header>

        <Grid BoxPropsList={BoxPropsList} />
      </div>
      <Celebrate
        show={shouldCleebrate} />

    </div>
  );
};


export default App;
