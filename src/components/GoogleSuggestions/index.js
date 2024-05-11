// // Write your code here

// import {Component} from 'react'

// import SuggestionTerm from '../SuggestionItem'

// class GoogleSuggestions extends Component {
//   state = {
//     searchInput: '',
//   }

//   updateSearchInput = value => {
//     this.setState({searchInput: value})
//   }

//   onChangingSearchInput = event => {
//     this.setState({searchInput: event.target.value})
//   }

//   render() {
//     const {searchInput} = this.state
//     const {suggestionsList} = this.props
//     const searchResult = suggestionsList.filter(eachSuggestion =>
//       eachSuggestion.suggestion
//         .toLowerCase()
//         .includes(searchInput.toLowerCase()),
//     )

//     return (
//       <div className="app-container">
//         <div className="google-suggestions-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
//             alt="google logo"
//             className="google-logo"
//           />
//           <div className="search-input-suggestions-container">
//             <div className="search-input-container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
//                 alt="search icon"
//                 className="search-icon"
//               />
//               <input
//                 className="search-input"
//                 type="search"
//                 placeholder="search google"
//                 onChange={this.onChangingSearchInput}
//                 value={searchInput}
//               />
//             </div>
//             <ul className="suggestion-list">
//               {searchResult.map(eachSuggestion => (
//                 <SuggestionTerm
//                   key={eachSuggestion.id}
//                   suggestionDetails={eachSuggestion}
//                   updateSearchInput={this.updateSearchInput}
//                 />
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default GoogleSuggestions

// import {Component} from 'react'

// import SuggestionTerm from '../SuggestionItem'

// import './index.css'

// class GoogleSuggestions extends Component {
//   state = {
//     searchInput: '',
//   }

//   updateSearchInput = suggestion => {
//     this.setState({searchInput: suggestion})
//   }

//   onChangeSearchInput = event => {
//     this.setState({searchInput: event.target.value})
//   }

//   render() {
//     const {searchInput} = this.state
//     const {suggestionsList} = this.props
//     const searchResult = suggestionsList.filter(eachSuggestion =>
//       eachSuggestion.suggestion
//         .toLowerCase()
//         .includes(searchInput.toLowerCase()),
//     )
//     return (
//       <div className="app-container">
//         <div className="google-suggestions-container">
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
//             alt="google logo"
//             className="google-logo"
//           />
//         </div>
//         <div className="alignment">
//           <div className="search-input-suggestions-container">
//             <div className="search-input-container">
//               <img
//                 src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
//                 alt="search icon"
//                 className="search-icon"
//               />
//               <input
//                 className="search-input"
//                 type="search"
//                 placeholder="search google"
//                 onChange={this.onChangeSearchInput}
//                 value={searchInput}
//               />
//             </div>

//             <ul className="suggestion-list">
//               {searchResult.map(eachSuggestion => (
//                 <SuggestionTerm
//                   key={eachSuggestion.id}
//                   suggestionDetails={eachSuggestion}
//                   updateSearchInput={this.updateSearchInput}
//                 />
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

import {useState} from 'react'
import './index.css'
import SuggestionTerm from '../SuggestionItem'

const GoogleSuggestions = props => {
  const [searchInput, setSearchInput] = useState('')

  const {suggestionsList} = props
  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }
  const searchResult = suggestionsList.filter(each =>
    each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
  )

  const updateSearchInput = suggestion => {
    setSearchInput(suggestion)
  }
  return (
    <div className="app-container">
      <div className="google-suggestions-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="google-logo"
        />
      </div>
      <div className="alignment">
        <div className="search-input-suggestions-container">
          <div className="search-input-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="search-icon"
            />
            <input
              className="search-input"
              type="search"
              placeholder="search google"
              onChange={onChangeSearchInput}
              value={searchInput}
            />
          </div>

          <ul className="suggestion-list">
            {searchResult.map(eachSuggestion => (
              <SuggestionTerm
                key={eachSuggestion.id}
                suggestionDetails={eachSuggestion}
                updateSearchInput={updateSearchInput}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default GoogleSuggestions
