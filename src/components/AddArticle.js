import React from "react";
import axios from "axios";

class AddArticle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();

    const url = this.state.url;
    console.log("in add article component-url:", url);
    // DB CALL GOES HERE?
    try {
      await axios.post("./api/articles", url);

      this.setState({
        url: "",
      });
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
      <div className="add-article-form">
        <form onSubmit={this.handleSubmit}>
          <label>
            Paste Article URL here!
            <input
              type="text"
              name="url"
              value={this.state.url}
              onChange={this.handleChange}
              required
            />
          </label>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default AddArticle;
