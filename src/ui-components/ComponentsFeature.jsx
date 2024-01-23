const features = [
    {
      name: 'Programs',
      description: 'The leather cover and machined steel disc binding stand up to daily use for years to come.',
    },
    {
      name: 'Courses',
      description: 'Buy it once and refill as often as you need. Subscribe and save on routine refills.',
    },
    {
      name: 'Competencies',
      description:
        'The comfortable disc binding allows you to quickly rearrange pages or combine lined, graph, and blank refills.',
    },
    { name: 'Lessons', description: 'Responsibly and sustainably made real close to wherever you are, somehow.' },
    { name: 'Units', description: 'Responsibly and sustainably made real close to wherever you are, somehow.' },
    { name: 'XBlocks', description: 'Responsibly and sustainably made real close to wherever you are, somehow.' },
  ]
  
  export default function ComponentsFeature() {
    return (
      <div className="not-content mt-0">
        <section aria-labelledby="features-heading" className="relative">  

            <div className="lg:col-start-2">
              <h2 id="features-heading" className="font-medium text-gray-500">
                An Elevated Curriculum Design System
              </h2>
              <p className="mt-4 text-4xl font-bold tracking-tight text-gray-900">Learning Experience Components</p>
              <dl className="mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2">
                {features.map((feature) => (
                  <div key={feature.name} className="border-white border-2 hover:border-gray-200 rounded-xl p-2">
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    <dd className="mt-2 text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>

        </section>
      </div>
    )
  }
  