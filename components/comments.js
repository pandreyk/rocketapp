import styles from '../styles/Comments.module.css'

const Comments = ({comments}) => {
  return (
    <div>
      {comments.map(comment => (
        <div className={styles.commentsContainer} key={comment.id}>
          <p className="small"><label>{comment.email}</label> | {comment.name}</p>
          <p>{comment.body}</p>
          <hr/>
        </div>
      ))}
    </div>
  )
}

export default Comments