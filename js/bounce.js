function bouncingBall(h,  bounce,  window) {
    let count = 1;
    if (h > 0 && 0 < bounce && bounce < 1 && window < h) {
        let height = h;
        let bounceMeters = height * bounce;
        console.log(height, bounceMeters);
        while (window < height && bounceMeters > window) {
            count += 2;
            height = height * bounce;
            bounceMeters = height * bounce;
            console.log(height, bounceMeters);
        }
        return count;
    } else {
        return -1;
    }
}

console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 0.66, 1.5));
