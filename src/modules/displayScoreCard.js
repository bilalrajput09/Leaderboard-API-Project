const renderScoreCard = async (gameID) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`
  );

  const data = await response.json();
  console.log(data);
};

export default renderScoreCard;
