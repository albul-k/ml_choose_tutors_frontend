# ML Choose tutors (frontend)

## Used stack

* React, MUI, Axios, TypeScript

## Link to the Kaggle competition

<https://www.kaggle.com/c/choose-tutors>

## Description

The goal is to predict the probability for a tutor to be a proper one for preparing for the math exam.

## Data

* age [20-70] - tutor's age
* years_of_experience [0-10] - number of years of work experience
* lesson_price [100-4000] - price for lesson
* qualification [1-4] - qualification of tutor
* physics [0|1] - the tutor has experience in physics
* chemistry [0|1] - the tutor has experience in chemistry
* biology [0|1] - the tutor has experience in biology
* english [0|1] - the tutor has experience in english
* geography [0|1] - the tutor has experience in geography
* history [0|1] - the tutor has experience in history
* mean_exam_points [30-100] - the average score of students for a given tutor

## How to run

### Clone repository and run project

```bash
# Clone repository
git clone https://github.com/albul-k/ml_choose_tutors_frontend.git
cd ml_choose_tutors_frontend

# Install requirements
npm install
npm run build

# Install serve
npm install -g serve

# Run build
serve -s build
```

### Open link

[http://localhost:3000](http://localhost:3000)

## Link to the backend repository

<https://github.com/albul-k/ml_choose_tutors_backend>
