import './App.css'
import BlogCard from './components/BlogCard'
import BlogImage from './assets/images/spacejoy-YqFz7UMm8qE-unsplash.jpg';

function App() {
  return (
    <div className="flex justify-center pt-20 px-[17.5px]">
      <BlogCard
        imgSrc={BlogImage}
        imgAlt="A cozy living room featuring a gray couch, a decorative rug, and a stylish coffee table."
        pillText="Interior"
        title='Top 5 Living Room Inspirations'
        body='Curated vibrants colors for your living, make it pop & calm in the same time.'
        linkTitle='Read more'
        linkHref='#'
      />
    </div>
  )
}

export default App
