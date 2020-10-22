
<h1 align="center">Challenge 06 - Launchbase Bootcamp</h1>

<p align="left">It involved several small challenges to practice the following:</p>

- DBML;
- Footer;
- Asynchronous functions, Callback and Promise;
- Input Mask;


## DBML
For this challenge I used [dbdiagram.io](https://dbdiagram.io/d/5f7dbced3a78976d7b76b63b) to generate a database schema for a **Rental Car system**.

Following the below **business rules** I diagrammed 7 Tables as follows:

Table relationships:
- agencies 1 - 1 addresses
- agencies 1 < N orders
- models 1 < N cars
- customers 1 < N orders
- cars 1 < N car_order
- orders 1 < N car_order
 
 Tables:
- custormers
- agencies
- addresses
- cars
- models
- orders
- car_order

<h1 align="center">
    <img src="https://ik.imagekit.io/cnbmdh4b9w/diagram.jpg_655aAjtQK.png">
</h1>

- [Database Script](https://github.com/Gilmara-Git/launchbase-rocketseat/blob/master/Challenge06-%20bundle%20of%20small%20challenges/Untitled%20(1).sql)

## FOOTER
A footer was added and styled on previous project.
- [html file](https://github.com/Gilmara-Git/launchbase-rocketseat/blob/master/starting%20with%20Backend/coursesproject-3.3-added_new_route/views/courses.njk).

 - [css file](https://github.com/Gilmara-Git/launchbase-rocketseat/blob/master/starting%20with%20Backend/coursesproject-3.3-added_new_route/public/style.css)


## ASYNCHRONOUS FUNCTIONS, CALLBACKS AND PROMISES

Use **async** **await** **promise** to treat the asynchronous effect of **setTimeout**
- [Link of the file](https://github.com/Gilmara-Git/launchbase-rocketseat/blob/master/Challenge06-%20bundle%20of%20small%20challenges/printDouble.js)

Use the same function, but add a **second** parameter. Then, use it do divide the result of the **first** parameter by the **second** one.

- [Link to the file](https://github.com/Gilmara-Git/launchbase-rocketseat/blob/master/Challenge06-%20bundle%20of%20small%20challenges/printDouble2Desafio-Continuacao.js)

## Input Mask
- This challenge required to create 2 input Masks. One for **percentage** and one for **cpf** format.
- In order to practice a little more I also created "mask" for **cnpj** and **SS** number.
- [Link to the file](https://github.com/Gilmara-Git/launchbase-rocketseat/blob/master/Challenge06-%20bundle%20of%20small%20challenges/inputMask.js)

## Techonologies
- Html5 (Hypertext)
- Css3 (Cascading Style Sheet)
- Javascript
- dbdiagram.io




