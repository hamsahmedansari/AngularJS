
// Assertion is BuildIn Function of different type
// Check out Defined Variable Type like string and its Assertion

    let Message  = "abc" ; //string
    let EndWithC = Message.endsWith('c');
    
// But when Variable Type is Any we have to define Assertion type manually i.e

    let MessageTypeAny; //any
    MessageTypeAny = "abc";
    let StartWithA = (MessageTypeAny as string).startsWith('a');

// checking result

    console.log("End with C : " + EndWithC);
    console.log("Start with A : " + StartWithA);
    