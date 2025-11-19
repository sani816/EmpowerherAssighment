input=[

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }
]
let result=input.filter(input=>input.tasksCompleted>5)
let re=result.map(input=>{
    let performance=" "
    if(input.rating>4.5){
        performance="Excellent"
    }else if(input.rating>=3&&input.rating<=4.5){
        performance="Good"
    }else{
        performance="Need Improvement"
    }
    return {
        name:input.name,
        performance:performance
    };

})
    const priority = {
        "Excellent": 3,
        "Good": 2,
        "Needs Improvement": 1
    };

    const sorted = re.sort((a, b) =>
        priority[b.performance] - priority[a.performance]
    );

    console.log(sorted)
