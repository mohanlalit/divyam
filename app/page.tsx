import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Lalit Mohan
      </h1>
      <p className="mb-4">
        {`I lead customer success for brands across North India and Bangladesh at Capillary Technologies, exploring ways to enhance customer loyalty and engagement.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
