import moment from 'moment';

// Get array of times like ["00:00", "00:30" to "23:30"]
export const getTimesArray = () => {
    const hours = Array.from({
        length: 48
      }, (_, hour) => moment({
          hour: Math.floor(hour / 2),
          minutes: (hour % 2 === 0 ? 0 : 30)
        }).format('HH:mm')
      );
    return hours;
}

// Get array of numbers to a specific rang for pagination

export const getPagesArray = (totalPages) => {
  return new Array(totalPages).fill(null).map((v, i) => i);
}