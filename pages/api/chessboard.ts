type Piece = 'ROOK BLACK' | 'KNIGHT BLACK' | 'BISHOP BLACK' | 'QUEEN BLACK' | 'KING BLACK' | 'PAWN BLACK'
  /*    */ | 'ROOK WHITE' | 'KNIGHT WHITE' | 'BISHOP WHITE' | 'QUEEN WHITE' | 'KING WHITE' | 'PAWN WHITE';

type Chessboard = (Piece | null)[][];

export const chessboardInitial: Chessboard = [
  ['ROOK BLACK', 'KNIGHT BLACK', 'BISHOP BLACK', 'QUEEN BLACK', 'KING BLACK', 'BISHOP BLACK', 'KNIGHT BLACK', 'ROOK BLACK'],
  ['PAWN BLACK', 'PAWN BLACK', 'PAWN BLACK', 'PAWN BLACK', 'PAWN BLACK', 'PAWN BLACK', 'PAWN BLACK', 'PAWN BLACK'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['PAWN WHITE', 'PAWN WHITE', 'PAWN WHITE', 'PAWN WHITE', 'PAWN WHITE', 'PAWN WHITE', 'PAWN WHITE', 'PAWN WHITE'],
  ['ROOK WHITE', 'KNIGHT WHITE', 'BISHOP WHITE', 'QUEEN WHITE', 'KING WHITE', 'BISHOP WHITE', 'KNIGHT WHITE', 'ROOK WHITE'],
];

export function getPieceImgSrc(piece: Piece): string {
  switch (piece) {
    case 'ROOK BLACK': return '/pieces/Rook black.png';
    case 'KNIGHT BLACK': return '/pieces/Knight black.png';
    case 'BISHOP BLACK': return '/pieces/Bishop black.png';
    case 'QUEEN BLACK': return '/pieces/Queen black.png';
    case 'KING BLACK': return '/pieces/King black.png';
    case 'PAWN BLACK': return '/pieces/Pawn black.png';

    case 'ROOK WHITE': return '/pieces/Rook white.png';
    case 'KNIGHT WHITE': return '/pieces/Knight white.png';
    case 'BISHOP WHITE': return '/pieces/Bishop white.png';
    case 'QUEEN WHITE': return '/pieces/Queen white.png';
    case 'KING WHITE': return '/pieces/King white.png';
    case 'PAWN WHITE': return '/pieces/Pawn white.png';

    default: return '?';
  }
}