//switch case
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month=3;
switch (month) {
    case 1:                         //for string use ""
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    case 5:
        console.log("may");
        break;
    default:
        console.log("default case match");
        break;                                  //without break it execute the below cases too except *default*
}