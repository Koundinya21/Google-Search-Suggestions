// // Write your code here
// import './index.css'

// const SuggestionItem = props => {
//   const {suggestionDetails, updateSearchInput} = props
//   const {suggestions} = suggestionDetails

//   const onClickSuggestion = () => {
//     updateSearchInput(suggestions)
//   }

//   return (
//     <li className="suggestion-item">
//       <p className="suggestion-text">{suggestions}</p>
//       <button type="button" className="arrow-btn" onClick={onClickSuggestion}>
//         <img
//           src="https://assets.ccbp.in/frontend/rect-js/diagonal-arrow-left-up.png"
//           alt="arrow"
//           className="arrow"
//         />
//       </button>
//     </li>
//   )
// }

// export default SuggestionItem
import './index.css'

// const SuggestionItem = props => {
//   const {suggestionDetails, updateSearchInput} = props
//   const {suggestion} = suggestionDetails

//   const onClickSuggestion = () => {
//     updateSearchInput(suggestion)
//   }

//   return (
//     <li className="suggestion-item">
//       <p className="suggestion-text">{suggestion}</p>
//       <button type="button" className="arrow-btn" onClick={onClickSuggestion}>
//         <img
//           src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
//           alt="arrow"
//           className="arrow"
//         />
//       </button>
//     </li>
//   )
// }

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchInput} = props
  const {suggestion} = suggestionDetails
  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion-text">{suggestion}</p>
      <button type="button" className="arrow-btn" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
