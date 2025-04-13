// const moneyData = [
//   { time: '2025-03-25', amount: 1240.75 },
//   { time: '2025-03-26', amount: 1285.30 },
//   { time: '2025-03-27', amount: 1278.20 },
//   { time: '2025-03-28', amount: 1302.50 },
//   { time: '2025-03-29', amount: 1320.00 },
//   { time: '2025-03-30', amount: 1299.85 },
//   { time: '2025-03-31', amount: 1345.10 },
//   { time: '2025-04-01', amount: 1332.45 },
//   { time: '2025-04-02', amount: 1368.90 },
//   { time: '2025-04-03', amount: 1352.15 },
//   { time: '2025-04-04', amount: 1381.25 },
//   { time: '2025-04-05', amount: 1405.60 },
//   { time: '2025-04-06', amount: 1420.40 },
//   { time: '2025-04-07', amount: 1410.10 },
//   { time: '2025-04-08', amount: 1455.75 },
//   { time: '2025-04-09', amount: 1440.20 },
//   { time: '2025-04-10', amount: 1462.95 },
//   { time: '2025-04-11', amount: 1475.60 },
//   { time: '2025-04-12', amount: 1492.80 },
//   { time: '2025-04-13', amount: 1505.20 }
// ];

// export default moneyData;

const getRandomAmount = (min = 1200, max = 2300) => {
  return Math.ceil(Math.random() * (max - min) + min)
}

const getRandomDate = (startDate, endDate) => {
  const start = new Date(startDate).getTime();
  const end = new Date(endDate).getTime();

  // Générer un timestamp aléatoire entre start et end
  const randomTimestamp = Math.floor(Math.random() * (end - start) + start);
  // Retourner la date sous le format 'YYYY-MM-DD'
  return new Date(randomTimestamp).toISOString().split('T')[0];
}

function generateRandomMoneyData(startDate, endDate) {
  const data = new Map();
  let currentDate = new Date(startDate);
  const diffTime = Math.abs(new Date(endDate) - new Date(startDate));
  const numberOfDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  // Générer un tableau de données pour chaque jour
  for (let i = 0; i < numberOfDays; i++) {
    const date = getRandomDate(currentDate, endDate);

    if (!data.has(date)) {
      const amount = getRandomAmount();
      data.set(date, { time: date, amount });
    }

    // Avancer d'un jour
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return Array.from(data.values()).sort((a, b) => new Date(a.time) - new Date(b.time));
}

const moneyData = generateRandomMoneyData('2025-03-25', '2025-04-25');

export default moneyData;