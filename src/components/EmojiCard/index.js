import './index.css'

const EmojiCard = props => {
  const {emojiCardDetails, clickEmoji} = props
  const {thumbnailUrl, id} = emojiCardDetails

  const onClickEmoji = () => {
    clickEmoji(id)
  }

  return (
    <li className="emoji-item">
      <button type="button" className="emoji-button" onClick={onClickEmoji}>
        <img src={thumbnailUrl} alt="thumbnail" className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard
