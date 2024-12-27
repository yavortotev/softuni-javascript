function solve(input){


    let surchedBook = input[0];
    let booksCount=0

    let index= 1
    let isFindBook=0

    while(input[index]!== 'No More Books'){
        booksCount++

        books = input[index]
        if (books !== surchedBook){
            
        }else if (books === surchedBook){
            isFindBook =1
            booksCount-=1
            break;
        }
    
        index++

    }
    

     if(isFindBook ===1){
        console.log(`You checked ${booksCount} books and found it.`);
     }else{
        console.log('The book you search is not here!');
        console.log(`You checked ${booksCount} books.`);
     }




    }
solve([
    'Bourne',     'True Story',
    'Forever',    'More Space',
    'The Girl',   'Spaceship',
    'Strongest',  'Profit',
    'Tripple',    'Stella',
    'The Matrix', 'Bourne'
  ]
  
  )