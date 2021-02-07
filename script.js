document.getElementById('search-button').addEventListener('click', () => {
    const inputMeal = document.getElementById('input-text').value;
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=' + inputMeal)
        .then(res => res.json())
        .then(data => {
            const mealDiv = document.getElementById('mealList');
            document.getElementById('mealList').innerHTML = ``;
            data['meals'].forEach(meal => {
                const mealItem = document.createElement('div');
                mealItem.className = 'meal';
                const mealInfo = `
                <img src = ${meal.strMealThumb}>
                <h5>${meal.strMeal}</h5>
                `
                mealItem.innerHTML= mealInfo;
                mealDiv.appendChild(mealItem);
                mealItem.addEventListener('click', () => {
                    document.getElementById('meal-detail').innerHTML=`
                    <img src= ${meal.strMealThumb}> 
                    <h4>${meal.strMeal}</h4>
                    <h5> Ingredients </h5>
                    <li> ${meal.strIngredient1}  </li>
                    <li> ${meal.strIngredient2}  </li>
                    <li> ${meal.strIngredient3}  </li>
                    <li> ${meal.strIngredient4}  </li>
                    <li> ${meal.strIngredient5}  </li>
                    <li> ${meal.strIngredient6}  </li>
                    `
                });
            });
            
        })     
        .catch(error => {
            document.getElementById("meal-detail").innerHTML = `
            <h3>Not available right now sir! Try another one please..</h3>
            `
        });    
});
