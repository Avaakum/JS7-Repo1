for (let i = 1; i < 8; i++) { //не делать бесконечных циклов - всё повиснет нахер
  if (i == 6) {
    // break; //прерывает цикл, даже если он не достиг основного условия
    continue;
  }
  console.log(i);
}