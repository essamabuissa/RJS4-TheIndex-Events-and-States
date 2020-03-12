import React, { Component } from "react";

// Components
import AuthorCard from "./AuthorCard";
import { render } from "enzyme";
import SearchBar from "./SearchBar"


class AuthorList extends Component {
  state = {

    authors: this.props.authors
  }

  filter = query => {
    const filteredAuthors = this.props.authors.filter(author =>
      `${author.first_name} ${author.last_name}`
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    this.setState({ authors: filteredAuthors });

  };


  render() {
    const authorCards = this.state.authors.map(author => (
      <AuthorCard
        key={author.first_name + author.last_name}
        author={author}
        selectAuthor={this.props.selectAuthor}
      />

    ));

    return (
      <div className="authors">
        <h3>Authors</h3>
        <SearchBar filter={this.filter} />
        <div className="row">{authorCards}</div>
      </div>

    );
  }
}

export default AuthorList;
