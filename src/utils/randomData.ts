export function randomData(
  startDate: Date | undefined,
  endDate: Date | undefined
) {
  function getRandomDate(startDate: Date, endDate: Date) {
    const start = new Date(startDate).getTime();
    const end = new Date(endDate).getTime();
    const randomDate = new Date(start + Math.random() * (end - start));
    return randomDate.toISOString().split("T")[0];
  }

  function getRandomTime() {
    const hours = String(Math.floor(Math.random() * 24)).padStart(2, "0");
    const minutes = String(Math.floor(Math.random() * 60)).padStart(2, "0");
    const seconds = String(Math.floor(Math.random() * 60)).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  }

  function getRandomNumberUploading(list: string[]): string {
    const randomIndex = Math.floor(Math.random() * list.length);
    return list[randomIndex];
  }

  function generateRandomData(
    size: number,
    startDate: Date,
    endDate: Date,
    numberList: string[]
  ) {
    const randomObjects = [];

    for (let i = 0; i < size; i++) {
      const notComplete = Math.floor(Math.random() * 10) + 1;
      const numberUploading = getRandomNumberUploading(numberList);
      const randomObject = {
        id: i + 1,
        date: getRandomDate(startDate, endDate),
        time: getRandomTime(),
        recomendation: numberUploading,
        unloading:
          notComplete > 3
            ? numberUploading
            : getRandomNumberUploading(numberList),
        complete: false,
      };

      if (randomObject.recomendation !== randomObject.unloading) {
        randomObject.complete = false;
      } else {
        randomObject.complete = true;
      }

      randomObjects.push(randomObject);
    }

    return randomObjects;
  }

  const numberList = ["16o", "13A", "12A", "4o", "17o"];

  if (startDate && endDate) {
    return { data: generateRandomData(13, startDate, endDate, numberList) };
  }
}
