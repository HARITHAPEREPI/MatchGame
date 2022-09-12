import './index.css'

const TabItem = props => {
  const {tabItemDetails, updateActiveTabId, isActive} = props
  const {displayText, tabId} = tabItemDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActive
    ? 'tab-item-button active'
    : 'tab-item-button'

  return (
    <li className="tab-items-list">
      <button
        type="button"
        className={activeTabClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
