var SearchForm = createReactClass({
  handleSearch: function() {
    var query = ReactDOM.findDOMNode(this.query).value;
    var self = this;
    $.ajax({
      url: '/api/superheros/search',
      data: { query: query },
      success: function(data) {
        self.props.handleSearch(data);
      }.bind(this),
      error: function(xhr, status, error) {
        alert('Search error: ', status, xhr, error);
      }.bind(this)
    });
  },
  render: function() {
    return(
      <input onChange={this.handleSearch}
             type="text"
             className="form-control"
             placeholder="Type search phrase here..."
             ref={ queryInput => this.query = queryInput } />
    );
  }
});