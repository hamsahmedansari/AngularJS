
// There are different types of function declaration 

// First

    let FirstDoLog = function(message){
        console.log(message);
        
    }

// Second

    let SecondDoLog = (message) => {
        console.log(message);
        
    }

// Third

    let ThirdDoLog = (message) => console.log(message);
    
// Fourth

    let FourthDoLog = () => console.log('Fourth');

// Output

    FirstDoLog('First');
    SecondDoLog('Second');
    ThirdDoLog('Third');
    FourthDoLog();
    