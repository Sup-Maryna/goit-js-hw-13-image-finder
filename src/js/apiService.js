export default class apiService {
  constructor() {
    (this.queryVal = ''), (this.page = 1);
  }

  fetchImg() {
    return fetch(
      `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.queryVal}&page=${this.page}&per_page=12&key=24226787-6ce4851176ffde83450b99032`,
    )
    .then(response => response.json())
    .then(({ hits }) => {
      this.nextPage();
      return hits;
    });
  }
  nextPage() {
    this.page += 1;
  }
  resetPage() {
    this.page = 1;
  }
  get query() {
    return this.queryVal;
  }
  set query(newQuery) {
    this.queryVal = newQuery;
  }
}