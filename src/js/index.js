//import 'babel-polyfill';
import * as searchView from './views/searchView';
import Search from './models/Search';
// app should start out blank
// show current date
// load list and calendar days
// add event handler for search
// show results on enter

/*
wishlist controller

schedule controller

schedule view
  -will loop through the days of the week and display
  the days
schedule model
  -is a day an object? so you have a day class?
  ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 
  'saturday', 'sunday'];

  class Day {
    constructor(day) {
      this.day = day;
    }
  }
  new Day('monday');


search controller

app has a tv show search
search saved in state
search has results

instead of likes i have wishlist
have a wishlist model that has shows
you can add and delete

they'll display on the left but then also on the right
so maybe the show has days and you find the right container and
append.

maybe both so a show has days and every time a show is added,
it's added to wishlist and it's added to a day

so describe the state of the app, you have at any given time:
- a search
  - search results
- you may have an active show, this show may or may not have been
  added to the wishlist
- a wishlist of saved shows
- a list of days, each of which may or may not have shows
  - each day has an addShow method
  i guess the id can be used in both the day shows and wishlist shows
  OR...BIG OR....
  Wishlist model has 
   - a list
   - a schedule
   schedule is an object of days
   list is an array of objects which have id's and days, etc
   schedule = {
     monday: [{id, name, time, timezone, network}]
   }

*/

const state = {};

const controlSearch = async (e) => {
  const query = searchView.getQuery();

  if (e.key === 'Enter' && query) {
    console.log(query);
    // new search here
    state.search = new Search(query);
    await state.search.getResults();

    // show results page
    // 
  }
}

searchView.searchInput.addEventListener('keydown', controlSearch);



