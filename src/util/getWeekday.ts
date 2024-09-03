const getWeekday = (date: Date) => {
    const weekdays = [
      "Segunda",
      "Terça",
      "Quarta",
      "Quinta",
      "Sexta",
    ];
    return weekdays[date.getDay()];
  };

export {getWeekday};