import 'babel-polyfill';
export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const res = await fetch(`http://api.tvmaze.com/search/shows?q=${this.query}`);
    const data = await res.json();
    console.log(data);
    this.results = data;
  }
}
