# Responsive-portfolio

This website contain professional information about me and show some of the projects that I have worked on.

## Getting Started

This document contains information on the code writen for the Responsive-Portfolio website. It has explained snippets of code for reference. It also includes links to the live site, the repository on Github and references.

## Site Picture

About Me in large screen

![Site](assets/images/index-lg.png)

About Me in medium screen : 
* Navigation bar collapses

![Site](assets/images/index-md.png)

About Me in small screen
* Content width takes a higher percentage.
* Headshot image takes full width of container

![Site](assets/images/index-sm.png)

Contact page

![Site](assets/images/contact-lg.png)

Portfolio in large screen
* Project cards in 2x3 table.

![Site](assets/images/portfolio-lg.png)

Portfolio in medium screen
* Project cards collapse into a row of two followed by a row of one, back to a row of two and so forth.

![Site](assets/images/portfolio-md.png)

Portfolio in small screen
* Project cards stack in single cards.

![Site](assets/images/portfolio-sm.png)

## Code Snippets

Portfolio Row code

![Site](assets/images/portfolio-row-snippet.png)

* This code snippet had an example of a row from the Bootstrap grid system used in the Portfolio page. The column &lt;div class="col-12 col-lg-6 col-xl-4 my-2"&gt; includes the Bootstrap styling necessary to make the project cards responsive to three different browser dimensions. Each project card takes 4 columns at xl size, then 6 columns at lg size and all 12 columns at smaller sizes.

Navigation Bar code 

![Site](assets/images/nav-bar-snippet.png)

* This shows the code used to create the navigation bar using a Bootstrap Navbar. Here we can see how adding different classes to objects will affect everything from their color to their positioning. In addition, to formatting the objects through Bootstrap's styling, I can also add my own css styling as is shown. For example, &lt;ul class="navbar-nav ml-auto contentText"&gt; uses Bootstrap styling like "ml-auto" which adjust the list to the rigth. It also uses my own styling "contentText" which tells it the font type and spacing between lines for the text in the list.

## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Bootstrap](https://getbootstrap.com/)

## Deployed Link

* [See Live Site](https://kqarlos.github.io/Responsive-portfolio/index.html)

## Authors

* **Carlos Toledo** 

- [Link to Responsive Portfolio Site](https://github.com/kqarlos/responsive-portfolio)
- [Link to Github](https://www.github.com/kqarlos)
- [Link to LinkedIn](https://www.linkedin.com/in/carlos-toledo415/)


## Acknowledgments

* [W3 Schools](https://www.w3schools.com/)
* [Bootstrap components](https://getbootstrap.com/docs/4.4/components/navbar/)