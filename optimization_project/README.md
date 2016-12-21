
### Steps taken to improve performance of portfolio page

* Inlining the CSS so to eliminate the request time and response times
* Adding **async** attribute to script so that it is not parser blocking
* Adding **media** attribute to CSS so that it is not render blocking
* Optimizing images so that they can be loaded faster

### steps taken to reduce time to resize pizza

* Eliminating the **determineDx** function
* **changePizzaSizes** gets yhe size from **sizeSwitcher** function an Iterates through pizza elements on the page and changes their widths.

### steps taken to get 60fps while scrolling

* **UpdatePosition** calculates all phases and store them in an array an then changes the syle properties anc thus avoids FSL.
*Reducing the number of pizzas from 200 to 25 doesn't shows same visual effect but gives a great performance boost


###steps to rum the project

* Open **index.html** to view the portfolio
* Projects can be viewed by clicking the links in **index.html**
* In Cam's Pizzeria project you can adjust the slider width and accordingly the pizzas will resize automatically.

***Summary***P
Project to optimize a provided website with a number of optimization- and performance-related issues so that it achieves a target PageSpeed score and runs at 60 frames per second.
11 LESSONS, 1 PROJECT
