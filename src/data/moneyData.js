
const getRandomAmount = (min = 1200, max = 2300) => {
  return Math.ceil(Math.random() * (max - min) + min)
}

function generateRandomMoneyData(startDate, endDate) {
  const data = [];
  let currentDate = new Date(startDate);

  while (currentDate <= new Date(endDate)) {
    const amount = getRandomAmount();
    const formattedDate = currentDate.toISOString().split('T')[0];
    data.push({ time: formattedDate, amount });
    // Avancer d'un jour
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return data;
}

const moneyData = generateRandomMoneyData('2025-03-25', '2025-04-25');

export default moneyData;