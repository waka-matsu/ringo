let i =0;

while(i <10) {
    console.log(i);
    if (i<3){
    i++;
    continue
}else{console.log(i + 'ループになったら抜けます');
break;}
}

do {
    console.log(i);
    i++;
} while (i<5);