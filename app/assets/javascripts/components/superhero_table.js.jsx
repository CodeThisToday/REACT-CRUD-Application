var SuperheroTable = createReactClass({
    handleDelete: function() {
      this.props.handleDeleteRecord;
    },
    render: function() {
        var superheros = [];
        this.props.superheros.forEach(function(superhero) {
            superheros.push(<Superhero
                               superhero={superhero}
                               key={'superhero' + superhero.id}
                               handleDeleteRecord={this.handleDeleteRecord}
                           />)
        }.bind(this));
        return(
            <table className="table table-striped">
                <thead>
                <tr>
                    <th className="col-md-3">Name</th>
                    <th className="col-md-4">Description</th>
                    <th className="col-md-3">Color</th>
                </tr>
                </thead>
                <tbody>
                    {superheros}
                </tbody>
            </table>
        )
    }
});