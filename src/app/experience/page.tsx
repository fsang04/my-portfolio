type Project = {
  name: string
  bullets: string[]
  stack?: string[]
}

type Experience = {
  company: string
  role: string
  start: string
  end: string
  bullets?: string[]
  projects?: Project[]
  stack?: string[]
}

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

const experiences = [
  {
    company: 'University-of-Michigan-ROAHM-Lab',
    role: 'Student Researcher',
    start: 'Oct 2025',
    end: 'present',
    projects: [
      {
        name: 'DEFT',
        bullets: [
          "Optimized **PyTorch** training pipeline for simulating branched deformable linear objects (**BDLOs**) through systematic hyperparameter grid search and gradient checking",
          "Accelerated BDLO simulation convergence by 5x by increasing simulation timestep while maintaining numerical stability by implementing frame-skipping and physics sub-stepping",
          "Developed custom **inverse kinematics solver** using training results to automate thread insertion demonstration",
          "Executed real-time **wire thread insertion** demonstration on a Kinova robotic arm using **ROS2** and Kinova web API",
          "Paper submitted to IJRR pending review"
        ],
        stack: ['pytorch', 'numba', 'ROS 2', 'Ubuntu 20.04', 'conda', 'Qualisys motion capture'],
      },
      {
        name: 'diffADMM',
        bullets: [
          "Prototyped **ADMM implicit-Euler**, **Gauss-Seidel implicit**, and **explicit Euler** solvers for differentiable **cloth simulation** in PyTorch to benchmark convergence and gradient correctness across methods",
          "Implemented forward and backward passes with **IPOPT**-based cloth trajectory optimization over learnable position and force control inputs",
          "Designed and coded a **GPU-parallel differentiable cloth simulator** using ADMM on NVIDIA GPUs via the **Kokkos** backend",
          "Constructed stretching incidence matrix and discrete curvature operator for ADMM dual updates using parallelized computation on Kokkos GPU kernels",
          "Parallelized all per-constraint local projections and dual updates across batch, vertex, constraint, and spatial dimensions"
        ],
        stack: ['python', 'PyTorch', 'C++', 'Kokkos', 'matplotlib'],
      },
    ],
    bullets: [], // to avoid error 
    stack: []
  },

  {
    company: 'Quanta-Computer',
    role: 'Software Developer Intern',
    start: 'Jun 2024',
    end: 'Aug 2024',
    bullets: [
      "Integrated **YOLOv4** deep learning model with **darknet\_ros** library in a custom **ROS** node on the **NVIDIA DriveWorks** platform to enable an AGV to navigate through an obstacle maze by utilizing color recognition techniques for real-time decision-making",
      "Revamped and optimized **NVIDIA V3NA**-based AGV by reinstalling its image and debugging legacy installation dependencies to enhance the system's reliability and performance",
      "Collaborated daily with other interns and colleagues, driving the integration process by addressing issues related to color class recognition, refining model performance, and resolving hardware challenges"
    ],
    stack: ['ROS', 'Ubuntu 18.04', 'NVIDIA DriveWorks SDK', 'YOLO', 'OpenCV'],
  },
  // {
  //   company: 'old-company',
  //   role: 'Intern',
  //   start: '2022',
  //   end: '2023',
  //   bullets: [
  //     'Ut enim ad minim veniam quis nostrud exercitation.',
  //   ],
  //   stack: ['python', 'postgresql'],
  // },
]

export default function ExperiencePage() {
  return (
    <div className="flex flex-col gap-8 font-mono pt-8 w-2/3">
      {experiences.map((e) => (
        <div key={e.company} className="flex flex-col gap-1">
          <p className="text-white/80 text-m">
            <span className="text-white/50">{'>'}</span>{' '}
            <span className="text-white/100">{e.company}</span>{' '}
            <span className="text-white/80">--role "{e.role}" --{e.start}-{e.end}</span>
          </p>
          <div className="flex flex-col gap-1 pl-4 mt-1">
            {e.bullets && e.bullets.map((b, i) => (
              <div key={i} className="flex gap-2 text-white/70 text-xs leading-relaxed">
                <span className="shrink-0 text-white/50">-</span>
                <span><Bold text={b} /></span>
              </div>
            ))}
          </div>

          {e.projects && e.projects.length > 0 && (
            <div className="flex flex-col gap-2 pl-4 mt-2 border-l border-white/20">
              {e.projects.map((p) => (
                <div key={p.name} className="flex flex-col gap-0.5">
                  <p className="text-white/60 text-sm">
                    <span className="text-white/40 mr-2">↳</span>
                    <span className="text-white/100">{p.name}</span>
                  </p>
                  <div className="flex flex-col gap-1 pl-4 mt-0.5">
                    {p.bullets.map((b, i) => (
                      <div key={i} className="flex gap-2 text-white/70 text-xs leading-relaxed">
                        <span className="shrink-0 text-white/50">-</span>
                        <span><Bold text={b} /></span>
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-2 flex-wrap pl-4 mt-1">
                    {p.stack.map((s) => (
                      <span key={s} className="text-white/60 text-sm">#{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {e.stack && (
            <div className="flex gap-2 flex-wrap pl-4 mt-1">
              {e.stack.map((s) => (
                <span key={s} className="text-white/60 text-sm">#{s}</span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}