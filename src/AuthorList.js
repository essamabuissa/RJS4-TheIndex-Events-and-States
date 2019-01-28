import React from "react";

// Components
import AuthorCard from "./AuthorCard";
import SearchBar from "./SearchBar";

const AuthorList = props => {
  const authorCards = props.authors.map(author => (
    <AuthorCard
      key={author.first_name + author.last_name}
      author={author}
      selectAuthor={props.selectAuthor}
    />
  ));

  return (
    <div className="authors">
      <h3>Authors</h3>
      <SearchBar filterAuthors={props.filterAuthors} />
      <div className="row">{authorCards}</div>
    </div>
  );
};

export default AuthorList;