# Restaurant Reviews: Stage 1

## Responsive Design

### CRITERIA

1. Is the site UI compatible with a range of display sizes?
2. Are images responsive?
3. Are application elements visible and usable in all viewports?
4. Are images accessible?
5. Is focus used appropriately to allow easy navigation of the site?
6. Are site elements defined semantically?
7. Are pages that have been visited available offline?

### MEETS SPECIFICATIONS

1. All content is responsive and displays on a range of display sizes.

    Content should make use of available screen real estate and should display correctly at all screen sizes.

    An image's associated title and text renders next to the image in all viewport sizes.

2. Images in the site are sized appropriate to the viewport and do not crowd or overlap other elements in the browser, regardless of viewport size.

3. On the main page, restaurants and images are displayed in all viewports. The detail page includes a map, hours and reviews in all viewports.

4. All content-related images include appropriate alternate text that clearly describes the content of the image.

5. Focus is appropriately managed allowing users to noticeably tab through each of the important elements of the page. Modal or interstitial windows appropriately lock focus.

6. Elements on the page use the appropriate semantic elements. For those elements in which a semantic element is not available, appropriate ARIA roles are defined.

7. When available in the browser, the site uses a service worker to cache responses to requests for site assets. Visited pages are rendered when there is no network access

---

[Restaurant Reviews: Stage 1 - Rubric](https://review.udacity.com/#!/rubrics/1090/view)

---

### Initial Code Review

**index.html**

* ~~missing utf-8 meta~~
* ~~missing view port~~
* ~~normalize.css link 404~~
* ~~some symantic sections~~
* ~~no ARIA elements~~
* ~~neighborhoods-select - aria label~~
* ~~cuisines-select - aria label~~
* ~~google map key - AIzaSyBeFc5JZn8ZcPtaqggrUimISDqF3jc6E5c~~
* ~~view details buttons need aria description~~
* ~~restaurant list is not responsive~~
* ~~add keyboard method to skip tabbing through map~~

**restaurant.html**

* ~~missing utf-8 meta~~ 
* ~~missing view port~~
* ~~google map key - AIzaSyBeFc5JZn8ZcPtaqggrUimISDqF3jc6E5c~~
* ~~normalize.css link 404~~    
* ~~some symantic sections~~
* ~~no ARIA elements~~
* ~~no keyboard navigation to reviews~~
* ~~footer doesnt span page~~
* ~~elements overlap~~
* ~~add keyboard method to skip tabbing through map~~

 
**styles.css**

* ~~no media break points~~
* ~~no defined focus ring~~
* ~~update for mobile first~~


**restaurants.json**

* ~~restaurants data~~

**dbhelper.js**

* ~~js to simulate data from service~~
* ~~no work required here~~

**main.js**

* ~~no ARIA elements~~
* ~~mixture of let and var - why? - irrelevant~~
* ~~fillNeighborhoodsHTML doesnt set ARIA posinset and setsize~~
* ~~fillCuisinesHTML doesnt set ARIA posinset and setsize~~
* ~~createRestaurantHTML- img has no alt tag~~
* ~~button role on view details~~


**restaurant_info.js**

* ~~mixture of let and var - why? - irrelevant~~
* ~~fillRestaurantHTML - img has no alt tag~~

**General notes**

* ~~no service worker js~~
* ~~visited pages, data, css, js cached and cache versioned~~ 
* ~~tab order unfathomable (gets lost in map)~~
* ~~screen reader unintelligible~~
* ~~add mobile / small media view~~
* ~~add tablet / medium media view~~
* ~~add large / desktop media view~~

**For info**
thumbnail 270x248 - 800 x 600
info page 441x330
