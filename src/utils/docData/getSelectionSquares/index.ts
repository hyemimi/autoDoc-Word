const getSelectionSquares = (selection ?: string) => {

  const selectionSquares = [ '□', '□', '□', '□', '□', '□', '□', '□' ];
  selectionSquares[Number(selection)] = '■';

  return selectionSquares;
};

export default getSelectionSquares;