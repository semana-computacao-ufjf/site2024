const getWeekday = (date: Date) => {
    const weekdays = [
      "SEG",
      "TER",
      "QUA",
      "QUI",
      "SEX",
    ];
    return weekdays[date.getDay()];
  };

export {getWeekday};