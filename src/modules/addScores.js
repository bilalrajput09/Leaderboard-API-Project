const addScore = async (gameID) => {
  const response = await fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: "Bilal",
        score: 42,
      }),
    }
  );

  const data = await response.json();
  console.log(data);
};

export default addScore;
