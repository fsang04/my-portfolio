'use client'

const skills = [
  { category: 'languages', items: ['Python', 'C/C++', 'Java', 'R'] },
  { category: 'frameworks', items: ['ROS/ROS2', 'Ubuntu', 'MATLAB', 'PyTorch', 'RSL-RL', 'Kokkos'] },
  { category: 'simulation', items: ['MuJoCo', 'IsaacSim/IsaacLab', 'PyBullet']},
  { category: 'tools', items: ['VSCode', 'git', 'conda', 'Docker'] },
]

export default function ResumePage() {
  return (
    <div className="flex h-full font-mono pt-8 gap-8">
      {/* left — skills */}
      <div className="flex flex-col gap-6 w-1/2">
        {skills.map((s) => (
          <div key={s.category} className="flex flex-col gap-2">
            <p className="text-white/30 text-xs">{s.category}</p>
            <div className="flex flex-wrap gap-3">
              {s.items.map((item) => (
                <span key={item} className="text-white text-lg">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* right — resume pdf */}
      <div className="w-1/2 flex-1">
        <iframe
          src="/resume.pdf"
          className="w-full h-full rounded"
          style={{ minHeight: '70vh' }}
        />
      </div>
    </div>
  )
}