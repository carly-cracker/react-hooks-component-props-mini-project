import React from 'react'
import Article from "./Article";

const ArticleList = ({posts}) => {
  return (
    <div>
        <main>
        {posts.map((post) => (
        <Article 
          key={post.id} 
          title={post.title} 
          date={post.date} 
          preview={post.preview} 
          minutes={post.minutes}
        />
      ))}
        </main>
    </div>
  )
}

export default ArticleList