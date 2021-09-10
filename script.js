//includes the data that will copmose the random message.
const data = {
    boostsDataset: [
        'you\'re the best!',
         'you\'re worthy',
          'you can acheive whatever you\'d like',
           'you\'re amazing',
            'you\'re beautiful',
             'you\'re valuable',
              'you\'re loved'],

    adviceDataset: ['enjoy every bit of your life, you live only once',
    'you\'re worthy, don\'t let others say diffrently',
    'now what you are capable of','take time to know yourself',
     'be patient and persistent',
      'in order to get, you have to give',
       'be your best at all times.',
    'don\'t be afraid of being afraid',
    'don\'t make decisions when you are angry or ecstatic',
     'don\'t worry about other people\'s opinion',
     'do what is right, not what is easy',
      'believe in yourself'],

      fortuneDataset: ['have good luck',
      'have someone new and important in your life',
       'a lot of new opportunities',
        'live a long life',
         'find your soulmate soon',
          'get your dream job soon']

};

//genetates a random number.
const randomNumberGenerator = (number) => {
    let randomNum = Math.floor(Math.random() * number);
    return randomNum;
}

//Choosing the information from the dataset that will compose our message.
//returns an array which contains this info.
const composeMessage = () =>{
    let messageData  = [];
    for(let dataset in data){
        let randomIndex = randomNumberGenerator(data[dataset].length);
        messageData.push(data[dataset][randomIndex]);
    }
    return messageData;

}

//Formats the random message and prints it onto the console.
const showFullComposedMessage = () =>{
    let msgData = composeMessage();
    console.log(`Always remember; ${msgData[0]}.`);
    console.log(`I advice you to ${msgData[1]}.`);
    console.log(`I forsee you are going to ${msgData[2]}.`);

}

showFullComposedMessage();
