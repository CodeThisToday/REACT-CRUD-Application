var NewForm = createReactClass({
    getInitialState: function() {
        return {
            name: '',
            description: '',
            color: ''
        }
    },
    bindColorInput: function(ref) {
        this.colorInput = ref;
    },
    bindNameInput: function(ref) {
        this.nameInput = ref;
    },
    bindDescriptionInput: function(ref) {
        this.descriptionInput = ref;
    },
    handleAdd: function(e) {
        //we don't want the form to submit, so we prevent the default behavior
        e.preventDefault();
        var self = this;
        if(this.validForm()) {
            $.ajax({
                url: '/api/superheros',
                method: 'POST',
                data: { superhero: self.state },
                success: function(data) {
                    self.props.handleAdd(data);
                    self.setState(self.getInitialState());
                },
                error: function(xhr, status, error) {
                    alert('Cannot add a new record: ', error);
                }
            })
        } else {
            alert('Please fill all fields.');
        }
    },
    validForm: function() {
        if(this.nameInput && this.descriptionInput && this.colorInput) {
            return true;
        } else {
            return false;
        }
    },
    handleChange: function(e) {
        var input_name = e.target.name;
        var value = e.target.value;
        this.setState({ [input_name] : value });
    },
    render: function() {
        return(
            <form className="form-inline" onSubmit={this.handleAdd}>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           name="name"
                           placeholder="Name"
                           required
                           ref={this.bindNameInput}
                           value={this.state.name}
                           onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           name="description"
                           placeholder="Description"
                           required
                           ref={this.bindDescriptionInput}
                           value={this.state.description}
                           onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <input type="text"
                           className="form-control"
                           name="color"
                           placeholder="Superhero color"
                           required
                           ref={this.bindColorInput}
                           value={this.state.superhero_color}
                           onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">ADD</button>
            </form>
        )
    }
});