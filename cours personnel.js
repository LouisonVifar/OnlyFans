//essais basique sur du javascript



function check(val1){

    switch(val1) {

        case (val1 < 3):
            answer = "alpha";
        break;

        case 3:
            answer = "beta";
        break;
        
        case (val1 > 3): 
            answer = "delta";
        break;

    }

    return answer;
}

console.log(check(5));




