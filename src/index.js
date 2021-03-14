import React from "react"
import ReactDOM from "react-dom"
import faker from "faker"
import CommentDetail from "./CommentDetail"

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        content="Nice blog post"
        avatar={faker.random.image()}
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        content="I like the subject"
        avatar={faker.random.image()}
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 5:00PM"
        content="I like the writing"
        avatar={faker.random.image()}
      />
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
