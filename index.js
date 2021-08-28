let array = [
	{name: "John", salary: 2400},
	{name: "Alex", salary: 1400},
	{name: "Nass", salary: 2300},
	{name: "Jane", salary: 2400},
	{name: "Smith", salary: 2300},
	{name: "Puppy", salary: 2400},
	{name: "Grrek", salary: 1400},
	{name: "Doe", salary: 2200},
	{name: "Adam", salary: 1900},
	{name: "Martin", salary: 2500},
	{name: "Marshal", salary: 2550},
	{name: "Jawan", salary: 2550},
]

function getThirdLargestSalary(arr) {
    let uniqueArr = [];
    let result = [];
    let thirdLargest = 0;
    
    // get unique salaries
    arr.filter(item => {
    	if(!uniqueArr.includes(item.salary)) {
        	uniqueArr.push(item.salary)
        }
    })
    
    // sort salary array
    uniqueArr.sort((a, b) => b - a)
    thirdLargest = uniqueArr[2];
    
    result = arr.filter(el => el.salary === thirdLargest)
    console.log(result)
}

getThirdLargestSalary(array)
