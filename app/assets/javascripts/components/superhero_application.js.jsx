var SuperheroApplication = createReactClass({
    getInitialState: function() {
        return { superheros: [] };
    },
    componentDidMount: function() {
        this.getDataFromApi();
    },
    getDataFromApi: function() {
        var self = this;
        $.ajax({
            url: '/api/superheros',
            success: function(data) {
                self.setState({ superheros: data });
            },
            error: function(xhr, status, error) {
                alert('Cannot get data from API: ', error);
            }
        });
    },
    handleSearch: function(superheros_search) {
        this.setState({ superheros: superheros_search });
    },
    handleAdd: function(superhero) {
        var superheros = this.state.superheros;
        superheros.push(superhero);
        alert("New Superhero has been added");
        this.setState({ superheros: superheros });
    },
    handleDeleteRecord: function() {
        this.getDataFromApi(this.state.superheros);
    },
    render: function() {
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1>SuperHero Table</h1>
                    <p>How to create a basic CRUD ReactJS app</p>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <SearchForm handleSearch={this.handleSearch} />
                    </div>
                    <div className="col-md-8">
                        <NewForm handleAdd={this.handleAdd} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <SuperheroTable
                            superheros={this.state.superheros}
                            handleDeleteRecord={this.handleDeleteRecord}
                        />
                    </div>
                </div>
            </div>
        )
    }
});