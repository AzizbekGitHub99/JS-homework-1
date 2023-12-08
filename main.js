let pi = 3.14;

// // begin1

// let a = +prompt('a ni kiriting!');
// let b = +prompt('b ni kiriting!');

// let S = a + b;
// let P = 2 * (a + b);

// console.log(S);
// console.log(P);

// // begin2

// let d = +prompt('d ni kiriting!');

// let L = pi * d;
// let r = d / 2;
// let S = pi * r**2;

// console.log(L);
// console.log(r);
// console.log(S);

// // begin3

// let a = +prompt('a ni kiriting!');

// let V = a**3;
// let S = 6*a**2;

// console.log(V);
// console.log(S);

// // begin4

// let a = +prompt('a ni kiriting!');
// let b = +prompt('b ni kiriting!');
// let c = +prompt('c ni kiriting!');

// let V = a * b * c;
// let S = 2 * (a * b + b * c + a * c);

// console.log(V);
// console.log(S);

// // begin5

// let a = +prompt('a ni kiriting!');
// let b = +prompt('b ni kiriting!');

// let M = (a + b) / 2;

// console.log(M);

// // begin6

// let a = +prompt('a ni kiriting!');
// let b = +prompt('b ni kiriting!');

// let c = (a**2 + b**2)**0.5;
// let P = a + b + c;

// console.log(c);
// console.log(P);

// // begin7

// let r1 = +prompt('r1 ni kiriting!');
// let r2 = +prompt('r2 ni kiriting!');

// let S1 = pi * r1**2;
// let S2 = pi * r2**2;
// let S = pi * (r1**2 - r2**2);

// console.log(S1);
// console.log(S2);
// console.log(S);

// // begin8

// let L = +prompt('L ni kiriting!');

// let R = L / (2 * pi);
// let S = pi * R**2;

// console.log(R);
// console.log(S);

// // begin9

// let x1 = +prompt('x1 ni kiritiing!');
// let y1 = +prompt('y1 ni kiritiing!');
// let x2 = +prompt('x2 ni kiritiing!');
// let y2 = +prompt('y2 ni kiritiing!');

// let L = ((x1 - x2)**2 + (y1 - y2)**2)**0.5;

// console.log('A va B nuqta orasidagi masofa: ' + L);

// // begin10

// let A = +prompt('A ni kiritiing!');
// let B = +prompt('B ni kiritiing!');
// let C = +prompt('C ni kiritiing!');

// let temp = A;
// A = B;
// B = C;
// C = temp;

// console.log('A son: ' + A);
// console.log('B son: ' + B);
// console.log('C son: ' + C);

// // begin11

// let x = +prompt('x ni kiritiing!');

// let y = 4 * (x - 3)**6 - 7*(x - 3)**3 + 2;

// console.log('y funksiya qiymati: ' + y);

// // begin12

// let A = +prompt('A ni kiritiing!');

// let A1 = A**3;
// let A2 = A**6;
// let A3 = A**9;
// let A4 = A**15;

// console.log('A^3 ning qiymati: ' + A1);
// console.log('A^6 ning qiymati: ' + A2);
// console.log('A^9 ning qiymati: ' + A3);
// console.log('A^15 ning qiymati: ' + A4);

// // begin13

// let Tf = +prompt('Tf ni kiritiing!');

// let Tc = (Tf-32) * 5/9;

// console.log('Tc ning qiymati: ' + Tc);

// // begin14

// let x = +prompt("Shokoladning o'g'irligini kiritiing!");
// let a = +prompt("Shokoladning umumiy narxini kiritiing!");
// let y = +prompt("Konfetning o'g'irligini kiritiing!");
// let b = +prompt("Konfetning umumiy narxini kiritiing!");

// let Z = (a / x) - (b / y);

// console.log('Shokolad konfetdan ' + Z + " so'mga qimmat");

// // begin15

// let x = +prompt("Semrinka olmaning o'g'irligini kiritiing!");
// let a = +prompt("Semrinka olmaning narxini kiritiing!");
// let y = +prompt("Golden olmaning o'g'irligini kiritiing!");
// let b = +prompt("Golden olmaning narxini kiritiing!");

// let Z = (a * x) + (b * y);

// console.log('Umumiy harajat ' + Z + " so'm bo'ldi");

// // integer1

// let a = +prompt("3 honali son kiriting");

// let bir = a % 10;
// let on = ((a % 100) - bir)/10;

// console.log("Birlik honasidagi son: " + bir + " ga teng");
// console.log("O'nlik honasidagi son: " + on + " ga teng");

// // integer2

// let a = +prompt("3 honali son kiriting");

// let bir = a % 10;
// let on = ((a % 100) - bir)/10;
// let yuz = (a - on*10 - bir)/100;
// let summ = yuz + on + bir;

// console.log("Sonning raqamlari yig'indisi: " + summ + " ga teng");

// // integer3

// let a = +prompt("3 honali son kiriting");

// let bir = a % 10;
// let on = ((a % 100) - bir)/10;
// let yuz = (a - on*10 - bir)/100;
// let summ = yuz + on*10 + bir*100;

// console.log("Sonning raqamlarining teskarisi: " + summ + " ga teng");

// // integer4

// let a = +prompt("3 honali son kiriting");

// let bir = a % 10;
// let on = ((a % 100) - bir)/10;
// let yuz = (a - on*10 - bir)/100;
// let summ = yuz*10 + on*100 + bir;

// console.log(summ);

// // integer5

// let a = +prompt("3 honali son kiriting");

// let bir = a % 10;
// let on = ((a % 100) - bir)/10;
// let yuz = (a - on*10 - bir)/100;
// let summ = yuz*100 + on + bir*10;

// console.log(summ);

// // integer6

// let a = +prompt("999 dan katta son kiriting");

// let ming = (a % 10000 - a % 1000) / 1000;

// console.log(ming);

// // integer7

// let a = +prompt("Kun boshidan boshlab necha sekund o'tganini kiriting");

// let min = (a / 60) - (a / 60) % 1;

// console.log("Kun boshidan boshlab to'la " + min + " daqiqa o'tdi");

// // integer8

// let a = +prompt("Kun boshidan boshlab necha sekund o'tganini kiriting");

// let soat = (a / 3600) - (a / 3600) % 1;

// console.log("Kun boshidan boshlab to'la " + soat + " soat o'tdi");

// // integer9

// let a = +prompt("Kun boshidan boshlab necha sekund o'tganini kiriting");

// let sec = a % 60;
// let min = (a / 60) - (a / 60) % 1;

// console.log("Kun boshidan boshlab " + min + " daqiqayu " + sec + " sekund vaqt o'tdi");

// // integer10

// let a = +prompt("Kun boshidan boshlab necha sekund o'tganini kiriting");

// let sec = a % 3600;
// let soat = (a / 3600) - (a / 3600) % 1;

// console.log("Kun boshidan boshlab " + soat + " soatu " + sec + " sekund vaqt o'tdi");