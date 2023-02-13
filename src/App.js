// import "./App.css";
import { useState } from "react";
const Movies = [
  { name: "In Bruges", year: "2008", category: "Film", availability: false },
  { name: "Trainspotting", year: "1996", category: "Film", availability: true },
  { name: "Fight Club", year: "1999", category: "Film", availability: true },
  {
    name: "We Were Soldiers",
    year: "2002",
    category: "Film",
    availability: true,
  },
  {
    name: "The Lincoln Lawyer",
    year: "2011",
    category: "Film",
    availability: true,
  },
  { name: "Forrest Gump", year: "1994", category: "Film", availability: true },
  {
    name: "Hamburger Hill",
    year: "1987",
    category: "Film",
    availability: true,
  },
  {
    name: "There will be blood",
    year: "2007",
    category: "Film",
    availability: true,
  },
  {
    name: "No Country for Old Men",
    year: "2007",
    category: "Film",
    availability: true,
  },
  { name: "Submarine", year: "2011", category: "Film", availability: true },
  {
    name: "The Thin Red Line",
    year: "1998",
    category: "Film",
    availability: true,
  },
  { name: "Amelie", year: "2001", category: "Film", availability: true },
  { name: "Blade Runner", year: "1982", category: "Film", availability: true },
  {
    name: "Blade Runner 2049",
    year: "2017",
    category: "Film",
    availability: true,
  },
];
export default function App() {
  return (
    <div className="App">
      <MovieSearchCard movies={Movies} />
    </div>
  );
}

function MovieSearchCard(props) {
  const [searchText, setSearchText] = useState("");
  return (
    <div className="search-result">
      <SearchBar searchText={searchText} onSearchTextChange={setSearchText} />
      <SearchResults movies={props.movies} searchText={searchText} />
    </div>
  );
}

function SearchBar(props) {
  return (
    <form>
      <label>
        <h3>Movies</h3>
        <input
          type="text"
          placeholder="Search a Film..."
          value={props.searchText}
          onChange={(e) => props.onSearchTextChange(e.target.value)}
        />
      </label>
    </form>
  );
}

function SearchResults(props) {
  const rows = [];
  const movies = props.movies;
  const searchText = props.searchText.trim();

  if (searchText.length !== 0) {
    movies.forEach((movie) => {
      //* display the array of items by default and filter them as user types
      if (movie.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1) {
        rows.push(<SearchResult movie={movie} key={movie.name + movie.year} />);
      }

      // if (movie.name.toLowerCase() === searchText.trim().toLowerCase()) {
      //   rows.push(<SearchResult movie={movie} key={movie.name + movie.year} />);
      // }
    });
  }

  // movies.forEach((movie) => {
  //   for (let i = 0; i < searchText.length; i++) {
  //     if (movie.name[i].toLowerCase() === searchText[i]) {
  //       rows.push(<SearchResult movie={movie} key={movie.name + movie.year} />);
  //       console.log(movie);
  //     }
  //   }
  // });

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
}

function SearchResult(props) {
  const movie = props.movie;
  const name = movie.availability ? (
    <span style={{ color: "green" }}>{movie.name}</span>
  ) : (
    <span style={{ color: "red" }}>{movie.name}</span>
  );

  return (
    <>
      <tr>
        <td>
          {name} ({movie.year})
        </td>
      </tr>
      <tr>
        <td>{movie.category}</td>
      </tr>
      <tr>
        <td>
          {movie.availability
            ? "Movie is available to view"
            : "Sorry. The movie is not in our database"}
        </td>
      </tr>
    </>
  );
}
