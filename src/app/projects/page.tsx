const projects = [
  {
    name: 'project-alpha',
    year: '2024',
    desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.',
    stack: ['react', 'typescript', 'three.js'],
    github: '#',
    live: '#',
  },
  {
    name: 'project-beta',
    year: '2023',
    desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris.',
    stack: ['next.js', 'tailwind', 'postgresql'],
    github: '#',
    live: '#',
  },
  {
    name: 'project-gamma',
    year: '2023',
    desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.',
    stack: ['node.js', 'spline'],
    github: '#',
    live: null,
  },
]

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-6 font-mono">
      {projects.map((p) => (
        <div key={p.name} className="flex flex-col gap-1">
          <p className="text-white/60 text-xs">
            <span className="text-white/30">{'>'}</span>{' '}
            <span className="text-white">{p.name}</span>{' '}
            <span className="text-white/30">--year {p.year}</span>
          </p>
          <p className="text-white/50 text-xs pl-4 leading-relaxed">{p.desc}</p>
          <p className="text-white/30 text-xs pl-4">
            stack: {p.stack.join(', ')}
          </p>
          <div className="flex gap-3 pl-4 mt-1">
            <a href={p.github} className="text-white/40 text-xs hover:text-white transition-colors">[ github ]</a>
            {p.live && <a href={p.live} className="text-white/40 text-xs hover:text-white transition-colors">[ live ]</a>}
          </div>
        </div>
      ))}
    </div>
  )
}

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

// 'use client'
// import { useState } from 'react'
// import { ChevronLeft } from 'lucide-react'

// const projects = [
//   { name: 'project-alpha', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.', fullDesc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', stack: ['react', 'typescript'], year: '2024', github: '#', live: '#' },
//   { name: 'project-beta', desc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna.', fullDesc: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.', stack: ['next.js', 'tailwind'], year: '2023', github: '#', live: null },
//   { name: 'project-gamma', desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco.', fullDesc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident sunt in culpa.', stack: ['three.js', 'spline'], year: '2023', github: '#', live: '#' },
//   { name: 'project-delta', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit.', fullDesc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident deserunt mollit.', stack: ['node.js', 'postgresql'], year: '2022', github: '#', live: null },
// ]

// export default function ProjectsPage() {
//   const [selected, setSelected] = useState(null)

//   if (selected !== null) {
//     const p = projects[selected]
//     return (
//       <div className="flex flex-col gap-4 font-mono h-full pt-8">
//         <button
//           onClick={() => setSelected(null)}
//           className="flex items-center gap-1 text-white/30 hover:text-white text-xs transition-colors"
//         >
//           <ChevronLeft size={12} />
//           back
//         </button>
//         <div className="flex items-baseline justify-between">
//           <h2 className="text-white text-xl">{p.name}</h2>
//           <span className="text-white/20 text-xs">{p.year}</span>
//         </div>
//         <p className="text-white/50 text-xs leading-relaxed">{p.fullDesc}</p>
//         <div className="flex gap-1 flex-wrap">
//           {p.stack.map((s) => (
//             <span key={s} className="text-white/25 text-xs">#{s}</span>
//           ))}
//         </div>
//         <div className="flex gap-4 mt-auto">
//           <a href={p.github} className="text-white/40 text-xs hover:text-white transition-colors">[ github ]</a>
//           {p.live && <a href={p.live} className="text-white/40 text-xs hover:text-white transition-colors">[ live ]</a>}
//         </div>
//       </div>
//     )
//   }

//   return (
//     <div className="grid grid-cols-2 gap-3 font-mono pt-8">
//       {projects.map((p, i) => (
//         <div
//           key={p.name}
//           onClick={() => setSelected(i)}
//           className="border border-white/10 p-4 flex flex-col gap-2 hover:border-white/30 transition-colors cursor-pointer"
//         >
//           <div className="flex justify-between items-start">
//             <span className="text-white text-xs">{p.name}</span>
//             <span className="text-white/20 text-xs">{p.year}</span>
//           </div>
//           <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
//           <div className="flex gap-1 flex-wrap mt-auto pt-2">
//             {p.stack.map((s) => (
//               <span key={s} className="text-white/25 text-xs">#{s}</span>
//             ))}
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
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const projects = [
//   { name: 'project-alpha', year: '2024', desc: 'Lorem ipsum dolor sit amet consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam.', stack: ['react', 'typescript', 'three.js'], github: '#', live: '#' },
//   { name: 'project-beta', year: '2023', desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor.', stack: ['next.js', 'tailwind', 'postgresql'], github: '#', live: null },
//   { name: 'project-gamma', year: '2023', desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat.', stack: ['node.js', 'spline'], github: '#', live: '#' },
// ]

// export default function ProjectsPage() {
//   const [index, setIndex] = useState(0)
//   const p = projects[index]

//   return (
//     <div className="flex flex-col h-full font-mono">
//       {/* counter */}
//       <p className="text-white/20 text-xs mb-6">{String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</p>

//       {/* main content */}
//       <div className="flex flex-col gap-4 flex-1">
//         <div className="flex items-baseline justify-between">
//           <h2 className="text-white text-2xl">{p.name}</h2>
//           <span className="text-white/20 text-xs">{p.year}</span>
//         </div>
//         <p className="text-white/50 text-sm leading-relaxed">{p.desc}</p>
//         <div className="flex gap-2 flex-wrap">
//           {p.stack.map((s) => (
//             <span key={s} className="text-white/30 text-xs border border-white/15 px-2 py-0.5">{s}</span>
//           ))}
//         </div>
//         <div className="flex gap-4 mt-auto">
//           <a href={p.github} className="text-white/40 text-xs hover:text-white transition-colors">[ github ]</a>
//           {p.live && <a href={p.live} className="text-white/40 text-xs hover:text-white transition-colors">[ live ]</a>}
//         </div>
//       </div>

//       {/* navigation */}
//       <div className="flex justify-between mt-8">
//         <button
//           onClick={() => setIndex(i => Math.max(0, i - 1))}
//           disabled={index === 0}
//           className="text-white/30 hover:text-white disabled:opacity-20 transition-colors"
//         >
//           <ChevronLeft size={16} />
//         </button>
//         <button
//           onClick={() => setIndex(i => Math.min(projects.length - 1, i + 1))}
//           disabled={index === projects.length - 1}
//           className="text-white/30 hover:text-white disabled:opacity-20 transition-colors"
//         >
//           <ChevronRight size={16} />
//         </button>
//       </div>
//     </div>
//   )
// }