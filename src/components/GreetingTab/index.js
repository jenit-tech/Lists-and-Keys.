import './index.css'

const GreetingTab = props => {
  const {languageDetails, activeTab, changeGreetingTab} = props
  const {id, buttonText, imageUrl, imageAltText} = languageDetails

  const onClickTabItem = () => {
    changeGreetingTab(id, imageUrl, imageAltText)
  }

  const activeButton = activeTab ? 'active-button' : ''

  return (
    <li className="">
      <button type="button" className={`button ${activeButton}`} onClick={onClickTabItem}>
        {buttonText}
      </button>
    </li>
  )
}

export default GreetingTab
