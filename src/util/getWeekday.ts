const getWeekday = (date: Date) => {
  const weekdays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];

  return weekdays[date.getDay()];
};

export { getWeekday };
