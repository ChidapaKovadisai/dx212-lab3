const scores = [72, 88, 95, 60, 81];
let sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum += scores[i];
}
//ได้ผลรวมกับค่าเฉลี่ย
console.log("คะแนนรวม:", sum, "เฉลี่ย:", sum / scores.length);

//หา max และจำนวนคนที่ได้80
let max = scores[0];

for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
        max = scores[i];
    }
}

console.log("คะแนนสูงสุด:", max, "คะแนน");

let countOver80 = 0;
for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 80) {
        countOver80++;
    }
}

console.log("จำนวนคนที่ได้คะแนน > 80:", countOver80, "คน");
