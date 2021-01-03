function burner(c, h, o) {
    let water = 0;
    let co2 = 0;
    let methane = 0;
    if (h > 0 && o > 0) {
        water = Math.trunc(h/2);
        if (o < water) {
            water = o;
        }
    }
    if (c > 0 && (o - water) > 0) {
        co2 = Math.trunc((o - water) / 2);
        if (c < co2) {
            co2 = c;
        }
    }
    if ((c - co2) > 0 && h - (water * 2) > 0) {
        methane = Math.trunc((h - (water * 2)) / 4);
        if (c - co2 < methane) {
            methane = c - co2;
        }
    }
    return [water, co2, methane];
  }

  console.log(burner(45, 11, 100));
  console.log(burner(354, 1023230, 0));
  console.log(burner(939, 3, 694));
  console.log(burner(215, 41, 82100));
  console.log(burner(113, 0, 52));