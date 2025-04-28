export const fetchQuiz = async (category,difficulty,type,amount)=>{
    //
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&diffculty=${difficulty}&type=${type}`;

    try{
        //
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Failed to fetch quiz questions")
        }

        const data = await response.json();
        return data.results;


    }
    //
    catch(err){
        console.log("Error while fetching the quiz questions",err)
   return [];
    }
}


export const fetchCategories = async ()=>{
    //
    const url =`https://opentdb.com/api_category.php`;

    try{
        //
        const response = await fetch(url);
        if(!response.ok){
            throw new Error("Failed to fetch quiz categories")
        }

        const data = await response.json();
        return data.trivia_categories;


    }
    //
    catch(err){
        console.log("Error while fetching the quiz categories",err)
   return [];
    }
}