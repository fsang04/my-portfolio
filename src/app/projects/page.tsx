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
    fullDesc: [ 
      'Capstone project: developed a multi-robot soccer passing system for the **RoboCup Humanoid Simulation League** in **MuJoCo**. Robots were **Booster T1** humanoids with 23-DoF. Simulation control loop used a combination of **FSM-based passing** strategy, **Theta** pathfinding, and **RL-trained locomotion policies**.',
      "Trained separate walking and getting-up skills in **NVIDIA's IsaacLab** across N=4096 parallel environments. Used **PPO** via the **rsl-rl** framework. Each policy was formulated as an MDP with proprioceptive observations (joint positions, velocities, IMU) and task-specific rewards: ball position, ball velocity, and goal-relative ball position to give the agent spatial awareness of the kick target. **Joint position targets** were passed to a **PD controller at 50Hz.",
      'Reward shaping was a core challenge. Kicking is inherently sparse, so reward terms were designed to decompose the motion into a natural sequence: align_with_ball rewarded correct approach positioning, ball_vel_toward_goal and ball_progress rewarded the kick itself, while penalty terms discouraged degenerate solutions like planting the kicking foot or jumping. The get-up policy used adaptive regularization that loosened joint torque/acceleration penalties early in training (when the robot is near the ground) and tightened them as the robot learned to rise, preventing exploitation of low-effort poses. Both kicking and get-up struggled to converge past local optima — kicking agents frequently exploited early ball-contact rewards without learning proper approach behavior, and get-up policies stalled with the torso partially lifted. As a result, the trained policies were not deployed to the robot codebase, and locomotion fell back to the existing BahiaRT walk skill.',
      "Trained separate RL locomotion policies (get-up, walking, ball-aware locomotion) in IsaacLab using PPO via the rsl-rl framework. Integrated all components into a unified pipeline using the booster_gym framework." 
    ],
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
    fullDesc: [ 
      "Implemented a control pipeline for the Open Duck Mini v2, an open-source recreation of Disney Research\'s BDX Droid, to perform dynamic long-jump motions. Pipeline uses **3D Spring-Loaded Inverted Pendulum** (SLIP) dynamics, offline trajectory optimization via **trapezoidal collocation**, and **Whole-Body Control** (WBC) within MuJoCo with control commands published via LCM protocl.", 
      "Uses a high-level 3D-SLIP deadbeat controller and a low-level **Prioritized Task Space Control** (PTSC) controller, based on the framework established by Wensing and Orin (2013) for high-speed running gait generation: **offline gait library optimization** passes nominal state-control pairs to a discrete deadbeat controller, which forward-simulates SLIP dynamics to pass desired touchdown information to the continuous layer. The continuous layer uses WBC formulated as a weighted QP, which is solved via **CasADi's OSQP** backend. A single control step of the SLIP model is defined with event detection across four flight and stance phases, solved with **MATLAB's ode45** solver.",
      // "Implemented PD and Whole-Body Control (WBC) for 2D planar motion, and Prioritized Task-Space Control (PTSC) for 3D motion. Comparative analysis with a benchmark biped validated control logic — performance gaps attributed to low-fidelity physical parameters from automated CAD-to-MJCF conversion.",
      "Evaluated performance of the pipeline on a simple bipedal pointfoot model in comparison to BDX Droid performance; the pointfoot demonstrated realistic dynamic responses at touchdown, suggesting further tuning of task-space controller weights." 
    ],
    stack: ['MuJoCo', 'MATLAB', 'Python', 'LCM', 'CasADi', 'OnShape'],
    year: '2025',
    github: null,
    live: 'https://sites.google.com/umich.edu/slipbdx/home',
    images: ['/projects/bdx-droid/droid.png', '/projects/bdx-droid/control-loop.png'],
    videos: ['/projects/bdx-droid/bipedvis.mp4'],
  },
  {
    name: 'Budget-Aware Domain Adaptation for Object Detection',
    desc: 'Influence function-based pipeline for fine-tuning pretrained object detectors on new domains under strict compute, memory, and data budget constraints.',
    fullDesc: [
      'We took **YOLOv26n** pretrained on **COCO** and adapted it to the **ACDC** dataset with four adverse weather conditions (night, fog, rain, snow) using a **budget-aware fine-tuning** pipeline designed for constrained compute and data settings, particularly on edge robotic platforms.',
      'Used **influence functions** to score and select the top k=100 **highest-impact training samples** from a target domain candidate pool, then fine-tuned only the **detection head** of YOLOv26n while keeping the backbone frozen to minimize compute. Influence scores are computed via **Conjugate Gradient descent** using the **Fisher-Vector Product** (FVP) proposed by Koh & Liang (2020) to approximate the inverse Hessian efficiently.',
      'Benchmarked against **random sampling**, **K-centers diversity sampling**, and **gradient similarity** on the **ACDC** dataset across four adverse weather domains (night, fog, rain, snow). Our pipeline achieved an average mAP50 of 0.275, outperforming all baselines by up to 2.6% with the same 100-sample budget. Also **deployed on a Raspberry Pi 5-based UMich MBot** with no GPU as proof of feasibility.',
    ],
    stack: ['Python', 'PyTorch', 'YOLOv26n', 'CUDA 11.8', 'Ultralytics', 'FiftyOne', 'Raspberry Pi'],
    year: '2026',
    github: null,
    live: null,
    images: ['/projects/budget-aware/comparison_bboxes.png', '/projects/budget-aware/influence-function.png', '/projects/budget-aware/actual-mbot.png',],
  },
  {
    name: 'WHIMSY',
    desc: 'HRI design and study examining how interactive vs. observational swarm robotics labs affect student engagement and emotional experience in introductory engineering courses.',
    fullDesc: [
      'We used the AUSS FIREfly platform — **swarm robots** that synchronize their LED flashes via **infrared communication** - to design and deploy an **interactive Arduino lab** for an **introductory robotics laboratory**, and investigated how it shaped student enjoyment and engagement.',
      'First-year engineering students programmed individual FIREfly robots in **Arduino C++** from scratch in a guided 90 minute lab session. Students built up the synchronization behavior with **two checkpoints**: implementing a basic integrate-and-fire counter that caused their robot to flash at regular intervals, then adding IR-based neighbor detection so each robot could detect and respond to nearby flashes by advancing its own counter. By the end, students could watch their robots **self-synchronize** into a swarm.',
      'During a demonstration portion, students were split into two conditions: the **interactive** group could directly manipulate the swarm using an IR remote, while the **observational** group watched the swarm synchronize autonomously.',
      'Utilized multi-modal data collection: pre/post Likert surveys, semi-structured interviews, drawing-based self-reflections, behavioral observation logs, and metrics on duration-based interaction. Preliminary results showed higher engagement and mood improvement across the interactive group.',
      'Paper accepted to **IEEE FIE 2026** pending reviews. An initial version of the study was published in the 2025 Special Issue: FIE WIP journal.',
    ],
    stack: ['human-robot interaction', 'Arduino', 'IR communication', 'FIE 2026',],
    year: '2025',
    github: 'https://github.com/rishad-h/fie-2026-firefly/tree/main/lesson_plan',
    live: null,
  },
  {
    name: 'PR2 Robot Localization',
    desc: 'Simulated localization of the PR2 robot in PyBullet using Kalman and particle filters on noisy sensor data and comparing performance across unpredictable paths.',
    fullDesc: [
      'Implemented and compared two localization algorithms — a Kalman filter and a particle filter — for estimating the PR2 robot\'s position within a PyBullet simulation environment. Both filters estimated state from simulated noisy sensor readings as the robot traversed predefined paths, with performance evaluated using mean absolute error (MAE) against the known ground truth trajectory.',
      'The Kalman filter used a linear Gaussian motion and sensor model, performing a predict step (propagating state and covariance forward) followed by a correction step using the Kalman gain to weight the measurement against the prior. The particle filter represented the robot\'s belief as 500 weighted particles, propagating each particle forward with process noise, reweighting by Gaussian likelihood of the sensor measurement, and resampling to concentrate particles around high-probability states.',
      'Two path scenarios were designed to stress-test each approach. On a structured zigzag path, the Kalman filter outperformed with a mean error of 0.059 vs. 0.127, benefiting from its linear motion assumptions. On a highly unpredictable path with randomized segment directions, the particle filter outperformed — demonstrating that non-parametric belief representations handle multimodal and non-Gaussian uncertainty better than a single Gaussian estimate.',
    ],
    stack: ['Python', 'PyBullet', 'NumPy', 'matplotlib'],
    year: '2024',
    github: null,
    live: null,
    images: ['projects/pr2/flowchart-1.png', 'projects/pr2/kf.jpg']
  },
]

export default function ProjectsPage() {
  const [selected, setSelected] = useState<number | null>(null)

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