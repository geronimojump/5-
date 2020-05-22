let i =1;
let gamenum=0;
const max = 100;

for (i=1;i<=max;i++){
    let element = document.createElement('div');
    document.body.append(element);
    let temp=i;

    while(temp!=0){
        
        if((temp%10===3)||(temp%10===6)||(temp%10===9)){
        gamenum++;
        }
        temp=Math.floor(temp/10);
    }

    if (gamenum===0){
        element.textContent = i;

    }
    else{
        element.textContent = '짝'.repeat(gamenum);
    }
    gamenum=0;


}