import PropTypes from "prop-types";
import style from "./message.module.css";

const Message = (props) => {
    const {author} = props;
    const {content} = props;
    return(
        <div className={style.element}>
            <p className={style.author}>Auteurice: {author}</p>
            <p className={style["content-message"]}>{content} </p>
        </div>
    )
}

Message.defaultProps = {
    author: "Inconnu•e"
}
Message.propTypes = {
    author: PropTypes.string,
    content: PropTypes.string.isRequired
}
export default Message;