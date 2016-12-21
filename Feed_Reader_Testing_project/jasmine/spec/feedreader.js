/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         //new test for url
        it('url are defined',function(){
            //loop on allFeeds array  of objects
            allFeeds.forEach(function(feed){
                //check whether url is defined
                expect(feed.url).toBeDefined();
                //check that the length of url is not zero
                expect(feed.url.length).not.toBe(0);
            });
        });

        // Test for names
        it('names are defined',function(){
            //loop  on allFeeds array of objects
            allFeeds.forEach(function(name){
                //check whether name is defined
                expect(name.name).toBeDefined();
                //check that the length of name is not zero
                expect(name.name.length).not.toBe(0);
            });
         });
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu',function(){
        //test to check menu is hidden by default
        it('menu element is hidden by default',function(){
            //when menu is  hidden body has class "menu-hidden", toContain matcher will check that
            expect(document.body.className).toContain('menu-hidden');
        });

        //test to check menu changes visibility onclick
        it('changes visibility on click',function(){
            $(".menu-icon-link").click();
            //menu should be visible on click
            expect(document.body.className).not.toContain('menu-hidden');
            $(".menu-icon-link").click();
            //menu should be hidden when clicked again
            expect(document.body.className).toContain('menu-hidden');
        });
    });

    describe('Initial Entries',function(){
        // beforeEach function to handle asynchronous request it will wait till the request is complete
        beforeEach(function(done){
            //first argument of loodFeed function in app.js is the  array index
          loadFeed(0,function(){
            //it will signal to framework that asynhronous is done  what it wanted to do
            //https://jasmine.github.io/2.5/introduction#section-55
            done();
          });
        });
        //test to check that there is at least a single elememt in .feed container and pass  done to signal this test relies on asyncronous request
        it('has atleast a single element', function(done) {
            //check that the length is greater than 0
            expect($('.feed .entry').length).not.toBe(0);
            done();
        });
    });

     describe('New Feed Selection',function(){
        //varibales to contain feeds
        var feed0;
        var feed1;
        //beforeEach function
        beforeEach(function(done){
            loadFeed(0,function(){
                feed0= $(".feed").html();
                done();
            });
        });
        // pass done to signal this test relies on asyncronous request
        it('content should change',function(done){
            loadFeed(1,function(){
                feed1=$(".feed").html();
                //check that the content has been changed
                expect(feed0).not.toEqual(feed1);
                done();
            });
        });
     });

}());
