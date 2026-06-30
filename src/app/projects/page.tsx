// const projects = [
//   {
//     name: 'project-alpha',
//     year: '2024',
//     desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.',
//     stack: ['react', 'typescript', 'three.js'],
//     github: '#',
//     live: '#',
//   },
//   {
//     name: 'project-beta',
//     year: '2023',
//     desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.',
//     stack: ['next.js', 'tailwind', 'postgresql'],
//     github: '#',
//     live: '#',
//   },
//   {
//     name: 'project-gamma',
//     year: '2023',
//     desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
//     stack: ['node.js', 'spline'],
//     github: '#',
//     live: null,
//   },
// ]

// export default function ProjectsPage() {
//   return (
//     <div className="flex flex-col gap-6 font-mono">
//       {projects.map((p) => (
//         <div key={p.name} className="flex flex-col gap-1">
//           <p className="text-white/60 text-xs">
//             <span className="text-white/30">{'>'}</span>{' '}
//             <span className="text-white">{p.name}</span>{' '}
//             <span className="text-white/30">--year {p.year}</span>
//           </p>
//           <p className="text-white/50 text-xs pl-4 leading-relaxed">{p.desc}</p>
//           <p className="text-white/30 text-xs pl-4">
//             stack: {p.stack.join(', ')}
//           </p>
//           <div className="flex gap-3 pl-4 mt-1">
//             <a href={p.github} className="text-white/40 text-xs hover:text-white transition-colors">[ github ]</a>
//             {p.live && <a href={p.live} className="text-white/40 text-xs hover:text-white transition-colors">[ live ]</a>}
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }

/* 
=============================================
*/

// 'use client'
// import { useState } from 'react'

// const projects = [
//   { id: '01', name: 'project-alpha', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', stack: ['react', 'typescript'] },
//   { id: '02', name: 'project-beta', desc: 'Sed do eiusmod tempor incididunt ut labore et dolore.', stack: ['next.js', 'tailwind'] },
//   { id: '03', name: 'project-gamma', desc: 'Ut enim ad minim veniam quis nostrud exercitation.', stack: ['three.js', 'spline'] },
//   { id: '04', name: 'project-delta', desc: 'Duis aute irure dolor in reprehenderit in voluptate.', stack: ['node.js', 'postgresql'] },
// ]

// export default function ProjectsPage() {
//   const [hovered, setHovered] = useState(null)

//   return (
//     <div className="flex flex-col gap-1 font-mono">
//       {projects.map((p) => (
//         <div
//           key={p.id}
//           onMouseEnter={() => setHovered(p.id)}
//           onMouseLeave={() => setHovered(null)}
//           className="flex flex-col gap-1 py-3 border-b border-white/10 cursor-default"
//         >
//           <div className="flex items-baseline gap-4">
//             <span className="text-white/30 text-xs">{p.id}</span>
//             <span className="text-white text-sm">{p.name}</span>
//           </div>
//           {hovered === p.id && (
//             <div className="flex flex-col gap-1 pl-8 transition-all">
//               <p className="text-white/50 text-xs leading-relaxed">{p.desc}</p>
//               <div className="flex gap-2 mt-1">
//                 {p.stack.map((s) => (
//                   <span key={s} className="text-white/30 text-xs border border-white/20 px-2 py-0.5">{s}</span>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   )
// }

/* 
=============================================
*/

'use client'
import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'

function Bold({ text }: { text: string }) { // for bolded keywords in bullet points
  const parts = text.split(/\*\*(.+?)\*\*/g)
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1
          ? <span key={i} className="text-white font-semibold">{part}</span>
          : part
      )}
    </>
  )
}

const projects = [
  {
    name: 'RoboCup Soccer Agent Control',
    desc: 'Multi-robot soccer system with FSM-based passing strategy, Theta* pathfinding, and RL-trained locomotion policies for simulated humanoid agents.',
    fullDesc: [ 'Developed a multi-robot soccer passing system for simulated humanoid robots in RoboCup.',
    "Designed a Finite State Machine (FSM) to coordinate passing and receiving roles dynamically based on real-time ball proximity and teammate awareness. Implemented an anytime Theta* pathfinding algorithm on a 10cm grid world with obstacle inflation, producing shorter paths than standard A* while remaining computationally minimal.",
    "Trained separate RL locomotion policies (get-up, walking, ball-aware locomotion) in IsaacLab using PPO via the rsl-rl framework. Integrated all components into a unified pipeline using the booster_gym framework." ],
    stack: ['Python', 'IsaacLab', 'rsl-rl', 'PPO', 'MuJoCo'],
    year: '2026',
    github: 'https://github.com/rob450-soccer',
    live: null,
    images: ['/projects/robocup/promotional.png', '/projects/robocup/alpha_design.png'],
    videos: ['/projects/robocup/passvideo.mp4']
  },
  {
    name: '3D-SLIP for BDX Droid with 5-DoF Legs',
    desc: 'Model-based control pipeline for an inverted-knee biped performing dynamic long-jump motions using SLIP dynamics and trajectory optimization.',
    fullDesc: [ "Implemented a control pipeline for the Open Duck Mini v2, an open-source recreation of Disney Research\'s BDX Droid, to perform dynamic long-jump motions. Pipeline uses **3D Spring-Loaded Inverted Pendulum** (SLIP) dynamics, offline trajectory optimization via **trapezoidal collocation**, and **Whole-Body Control** (WBC) within MuJoCo with control commands published via LCM protocl.", 
      "Uses a high-level 3D-SLIP deadbeat controller and a low-level **Prioritized Task Space Control** (PTSC) controller, based on the framework established by Wensing and Orin (2013) for high-speed running gait generation: **offline gait library optimization** passes nominal state-control pairs to a discrete deadbeat controller, which forward-simulates SLIP dynamics to pass desired touchdown information to the continuous layer. The continuous layer uses WBC formulated as a weighted QP, which is solved via **CasADi's OSQP** backend. A single control step of the SLIP model is defined with event detection across four flight and stance phases, solved with **MATLAB's ode45** solver.",
      // "Implemented PD and Whole-Body Control (WBC) for 2D planar motion, and Prioritized Task-Space Control (PTSC) for 3D motion. Comparative analysis with a benchmark biped validated control logic — performance gaps attributed to low-fidelity physical parameters from automated CAD-to-MJCF conversion.",
      "Evaluated performance of the pipeline on a simple bipedal pointfoot model in comparison to BDX Droid performance; the pointfoot demonstrated realistic dynamic responses at touchdown, suggesting further tuning of task-space controller weights." ],
    stack: ['MuJoCo', 'MATLAB', 'Python', 'LCM', 'CasADi', 'OnShape'],
    year: '2025',
    github: null,
    live: 'https://sites.google.com/umich.edu/slipbdx/home',
    images: ['/projects/bdx-droid/droid.png', '/projects/bdx-droid/control-loop.png'],
    videos: ['/projects/bdx-droid/bipedvis.mp4'],
  },
  { name: 'project-beta', desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna.', fullDesc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', stack: ['next.js', 'tailwind'], year: '2023', github: '#', live: null },
  { name: 'project-gamma', desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco.', fullDesc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident sunt in culpa.', stack: ['three.js', 'spline'], year: '2023', github: '#', live: '#' },
  { name: 'project-delta', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit.', fullDesc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident deserunt mollit.', stack: ['node.js', 'postgresql'], year: '2022', github: '#', live: null },
]

export default function ProjectsPage() {
  const [selected, setSelected] = useState(null)

  if (selected !== null) {
    const p = projects[selected]
    return (
      <div className="flex flex-col gap-4 font-mono h-full pt-8">
        <button
          onClick={() => setSelected(null)}
          className="flex items-center gap-1 text-white/50 hover:text-white text-xs transition-colors"
        >
          <ChevronLeft size={12} />
          back
        </button>
        <div className="flex gap-6">
          {/* text column — 2/3 width */}
          <div className="flex flex-col gap-4 w-2/3">
            <div className="flex items-baseline gap-3">
              <h2 className="text-white text-xl">{p.name}</h2>
              {(p.github || p.live) && (
                <>
                  <span className="text-white/20 text-xs">|</span>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-xs transition-colors">
                      [ github ]
                    </a>
                  )}
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-xs transition-colors">
                      [ website ]
                    </a>
                  )}
                </>
              )}
              <span className="text-white/40 text-lg ml-auto">{p.year}</span>
            </div>

            {p.fullDesc.map((para, i) => (
              <p key={i} className="text-white/70 text-xs leading-relaxed">
                <Bold text={para} />
              </p>
            ))}
            <div className="flex gap-1 flex-wrap">
              {p.stack.map((s) => (
                <span key={s} className="text-white/45 text-xs border border-white/15 px-2 py-0.5">{s}</span>
              ))}
            </div>
          </div>

          {/* media column — 1/3 width, for images/files */}
          <div className="w-1/3 flex flex-col gap-3">
            {p.images?.map((src, i) => (
              <img key={i} src={src} className="w-full rounded border border-white/10 object-cover" />
            ))}
            {p.videos?.map((src, i) => (
              <video key={i} src={src} className="w-full rounded border border-white/10 max-h-64 object-cover" controls muted loop />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 gap-3 font-mono pt-8">
      {projects.map((p, i) => (
        <div
          key={p.name}
          onClick={() => setSelected(i)}
          className="border border-white/10 p-4 flex flex-col gap-2 hover:border-white/30 transition-colors cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <span className="text-white text-xs">{p.name}</span>
            <span className="text-white/40 text-xs">{p.year}</span>
          </div>
          <p className="text-white/60 text-xs leading-relaxed">{p.desc}</p>
          <div className="flex gap-1 flex-wrap mt-auto pt-2">
            {p.stack.map((s) => (
              <span key={s} className="text-white/45 text-xs border border-white/15 px-2 py-0.5">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}