// 1~100を順番に出力。ただし３の倍数のみ"3の倍数です"と出力する
for (let number = 1; number <= 100; number ++) {
  if (number % 3 === 0) {
    console.log("3の倍数です");
  } else {
    console.log(number);
  }
}