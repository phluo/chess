import Image from 'next/image';

import { chessboardInitial, getPieceImgSrc } from './api/chessboard';

export default function Chessboard() {
  return (
    <div className="chessboard">
      {chessboardInitial.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="row">
            {row.map((square, colIndex) => {
              return (
                <div
                  key={colIndex}
                  className={`square ${
                    (rowIndex + colIndex) % 2 === 0 ? 'white' : 'black'
                  }`}
                >
                  {square ? <img src={getPieceImgSrc(square)} /> : null}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
