export default function AboutPage() {
  return (
    <div className="flex gap-10 pt-12 pb-4 min-h-0 mx-8">

      {/* photo  */}
      <div className="shrink-0 w-56 h-72 rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-900/60 via-purple-900/40 to-slate-900/60 border border-white/10">
        <img
          // src=""
          alt="Felicia Sang"
          className="w-full h-full object-cover"
          onError={e => { (e.target as HTMLImageElement).style.display = 'none' }}
        />
      </div>

      {/* Right: text */}
      <div className="flex flex-col gap-5 min-w-0">
        <h1 className="text-3xl font-bold text-white tracking-tight">About Me</h1>
        <p className="text-white/65 text-l leading-relaxed font-mono">
          Hello! I'm Felicia.
        </p>
        <p className="text-white/65 text-l leading-relaxed font-mono">
          I recently graduated with a bachelor's degree in Robotics from the University 
          of Michigan College of Engineering. I love the creativity and freedom of robotics
          as an interdisciplinary field, and I've carried this appreciation with me through
          some of my favorite projects in humanoid/legged control and deformable object 
          manipulation -- particularly the dynamic optimization of the two. 
        </p>
        <p className="text-white/65 text-l leading-relaxed font-mono">
          Today, I am most interested in scalability of high-dimensional,
          dynamic robotic systems to human-shared environments, and continuing to advance 
          the capabilities of dynamics-aware planning and trajectory optimization for robots
          operating in complex, unpredictable settings. 
        </p>
        <p className="text-white/65 text-l leading-relaxed font-mono">
          Outside of the lab, I love to capture moments from my travels (check out some 
          my photos here) and play card games with my friends. 
        </p>
      </div>

    </div>
  )
}
