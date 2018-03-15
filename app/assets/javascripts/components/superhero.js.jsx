var Superhero = createReactClass({
    handleDelete: function(e) {
        e.preventDefault();
        $.ajax({
            method: 'DELETE',
            url: '/api/superheros/' + this.props.superhero.id,
            success: function(data) {
                this.props.handleDeleteRecord;
                alert('Delete successful');
            }.bind(this),
            error: function(xhr, status, error) {
                alert('Cannot delete requested record: ', error);
            }
        });
    },
    renderRecord: function() {
        var superhero = this.props.superhero;
        return(
            <tr>
                <td>{superhero.name}</td>
                <td>{superhero.description}</td>
                <td>{superhero.color}</td>
                <td>
                    <a className="btn btn-danger btn-xs" onClick={this.handleDelete}>
                        Delete
                    </a>
                </td>
            </tr>
        );
    },
    render: function() {
        // var superhero = this.props.superhero;
        // return(
        //     <tr>
        //         <td>{ superhero.name }</td>
        //         <td>{ superhero.description }</td>
        //         <td>{ superhero.color }</td>
        //     </tr>
        // )
        return(this.renderRecord());
    }
});