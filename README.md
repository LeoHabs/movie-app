# Build a Movie App using IMDB's API - (Chave para mockar : https://imdb-api.com/en/API/Top250Movies/k_12345678)

<img width="1769" alt="Screenshot 2023-03-12 at 12 44 09" src="https://user-images.githubusercontent.com/8272736/224546414-48f6f9f5-6c59-44ea-9615-f4bed0ba5fb7.png">

[Live version](https://50projects50days.com/projects/movie-app/).

## Features:

- List top 250 movies;
- Show a card with name, year and crew (on hover), image and score (rounded up);
- Search form.

### Nice to have:

- Language selector with: EN, PT and ES as options;
- Button to list Box Office Movies.

### Must have:
- React Context to store the movie list;
- On submitting search form: filter by name;
- On submitting empty search form: show all movies.


## IMDB API Tutorial
- [Go to](https://imdb-api.com/).
- Register

![Screenshot 2023-03-12 at 13 02 30](https://user-images.githubusercontent.com/8272736/224546426-656483e2-2217-4702-a01b-ad00a15f8642.png)

![Screenshot 2023-03-12 at 13 04 20](https://user-images.githubusercontent.com/8272736/224546487-9d1a0c03-6eb9-4838-9696-9e320f92aa0c.png)

- Confirm your email
- [Go to](https://imdb-api.com/api).
- Your API Key will show up as below:

![Screenshot 2023-03-12 at 13 06 35](https://user-images.githubusercontent.com/8272736/224546604-c98fad81-243c-4c96-8d44-e643571725bf.png)

### Top 250 Movies endpoint

![Screenshot 2023-03-12 at 13 13 44](https://user-images.githubusercontent.com/8272736/224546978-95e5a2b3-d66c-4b75-acf5-72ffb88f7aef.png)

### Box Office endpoint

![Screenshot 2023-03-12 at 13 15 15](https://user-images.githubusercontent.com/8272736/224547045-034118ed-73a6-4955-b032-a84a1e07e881.png)

### Code Snippet in the bottom of the page

![Screenshot 2023-03-12 at 13 16 35](https://user-images.githubusercontent.com/8272736/224547094-25d21df3-2b75-47d7-a7af-2148188b3f50.png)

# Phase 2
### Must have:
- Language selector with: EN, PT and ES as options. 

[Example](https://mdbootstrap.com/docs/standard/extended/dropdown-language-selector/)

<img width="192" alt="Screenshot 2023-03-20 at 00 45 07" src="https://user-images.githubusercontent.com/8272736/226221739-82626a3a-f639-445e-9db9-71c7f342759c.png">

- Button to list Coming Soon Movies.

<img width="1774" alt="Screenshot 2023-03-20 at 00 44 35" src="https://user-images.githubusercontent.com/8272736/226221877-d7aa89f3-ae35-4a46-b9bb-a7366b7e4a47.png">

Button styles:
``` 
    background: #22254b;
    border-radius: 50px;
    border: 1px solid #FFF;
    color: #FFF;
    padding: 0 16px;
    font-size: 16px;
    cursor: pointer;
```
- Score should have diffent color depending on value. 
``` 
    If score >= 7 it should be green. 
    Yellow if 3 < score < 7. 
    Red if score <= 3.
```

<img width="670" alt="Screenshot 2023-03-20 at 00 52 06" src="https://user-images.githubusercontent.com/8272736/226222194-72d1284f-b999-4c54-b9e2-4ce2e2f67951.png">

# Phase 3 
### Must have:
- On clicking a movie, show a modal with the following movie information: Name, year, background image, plot local (using the language selector), genre, stars and languages
<img width="1649" alt="Screenshot 2023-03-27 at 15 04 47" src="https://user-images.githubusercontent.com/8272736/227973663-ac84301f-b60e-4673-8428-6cb1cb90bf21.png">

Referece: 
https://getbootstrap.com/docs/5.0/components/modal/#vertically-centered

