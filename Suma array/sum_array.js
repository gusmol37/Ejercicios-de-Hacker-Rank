
    function sumArray(arr) { 
        let totalArray = 0; 
        
        for (let i = 0; i < arr.length; i++) 
        totalArray += arr[i]; 
   
        return totalArray; 
    } 
     
     let arr = [1, 2, 3, 4, 10, 11];
    console.log("La suma del arreglo es: " + sumArray(arr));