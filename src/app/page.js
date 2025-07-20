// app/page.js
'use client';

export default function HomePage() {
  return (
    <section className='flex flex-col items-center justify-center text-center py-16 px-4 sm:px-6 lg:px-8'>
      <h1 className='text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900'>
        Level Up Your Workout
      </h1>
      <p className='mt-4 text-lg text-gray-600 max-w-xl'>
        Discover high-performance gymwear crafted for style, comfort, and
        movement. Whether you're pushing limits or finding your flow — we've got
        you covered.
      </p>
      <div className='mt-6'>
        <a
          href='/products'
          className='inline-block bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition'
        >
          Shop Collection
        </a>
      </div>
    </section>
  );
}
