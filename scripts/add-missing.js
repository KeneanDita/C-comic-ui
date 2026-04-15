const fs = require("fs");

const filePath = "app/components/page.tsx";
let content = fs.readFileSync(filePath, "utf8");

const componentsToAdd = [
  {
    name: "Token Usage Indicator",
    category: "AI & LLM",
    description: "Visual meter tracking prompt/completion tokens.",
    preview: `
      <div className="w-full max-w-sm bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic-lg)] p-6 flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <div>
            <h4 className="font-black text-xl uppercase tracking-tight">Token Usage</h4>
            <p className="text-xs font-bold text-gray-500">Current Session</p>
          </div>
          <div className="text-right">
            <span className="font-black text-2xl">4.2k</span>
            <span className="text-sm font-bold text-gray-500">/8k</span>
          </div>
        </div>
        <Progress value={52} className="h-4 border-[2px] border-black dark:border-border bg-gray-100" />
        <div className="flex gap-4 text-xs font-bold mt-2">
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-blue-500 border border-black"></div> Prompt: 1.2k</div>
          <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-yellow-400 border border-black"></div> Response: 3.0k</div>
        </div>
      </div>
    `,
    code: `import { Progress } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <Progress value={52} />\n  );\n}`,
  },
  {
    name: "Timeline / Activity Feed",
    category: "Complex Data",
    description: "Chronological sequence of events or actions.",
    preview: `
      <div className="w-full max-w-md bg-white dark:bg-card border-[3px] border-black dark:border-border rounded-[var(--radius-comic)] shadow-[var(--shadow-comic)] p-6">
        <h4 className="font-black text-2xl uppercase tracking-tight mb-6 flex items-center gap-2">
          <Activity className="h-6 w-6" /> Mission Log
        </h4>
        <div className="flex flex-col gap-6 relative">
          <div className="absolute left-[15px] top-4 bottom-4 w-[3px] bg-black dark:bg-border"></div>
          
          <div className="flex gap-4 relative z-10">
            <div className="w-8 h-8 rounded-full bg-green-400 border-[3px] border-black dark:border-border flex items-center justify-center shrink-0 shadow-[var(--shadow-comic-sm)]">
              <CheckCircle2 className="h-4 w-4 text-black" />
            </div>
            <div>
              <div className="font-black text-sm uppercase">Villain Defeated</div>
              <div className="text-xs font-bold text-gray-500">2 hours ago by Cap</div>
            </div>
          </div>
          
          <div className="flex gap-4 relative z-10">
            <div className="w-8 h-8 rounded-full bg-blue-400 border-[3px] border-black dark:border-border flex items-center justify-center shrink-0 shadow-[var(--shadow-comic-sm)]">
              <MessageSquare className="h-4 w-4 text-black" />
            </div>
            <div>
              <div className="font-black text-sm uppercase">HQ Contacted</div>
              <div className="text-xs font-bold text-gray-500">4 hours ago</div>
              <div className="mt-2 text-sm font-bold bg-blue-50 p-2 rounded-[var(--radius-comic)] border-[2px] border-black dark:border-border">"We need backup at sector 4!"</div>
            </div>
          </div>

          <div className="flex gap-4 relative z-10">
            <div className="w-8 h-8 rounded-full bg-yellow-400 border-[3px] border-black dark:border-border flex items-center justify-center shrink-0 shadow-[var(--shadow-comic-sm)] animate-pulse">
              <Compass className="h-4 w-4 text-black" />
            </div>
            <div>
              <div className="font-black text-sm uppercase">Mission Started</div>
              <div className="text-xs font-bold text-gray-500">Yesterday</div>
            </div>
          </div>
        </div>
      </div>
    `,
    code: `import { Activity, CheckCircle2 } from "lucide-react";\n\nexport default function App() {\n  return (\n    // HTML structure with connecting lines\n    <div>...</div>\n  );\n}`,
  },
  {
    name: "Rich Card (Media)",
    category: "Data Display",
    description: "Cards with full-cover images and hero actions.",
    preview: `
      <div className="w-full max-w-sm rounded-[var(--radius-comic)] border-[3px] border-black dark:border-border shadow-[var(--shadow-comic-lg)] overflow-hidden bg-white dark:bg-card group hover:-translate-y-1 transition-transform cursor-pointer">
        <div className="h-40 bg-zinc-200 relative border-b-[3px] border-black dark:border-border overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 opacity-80 group-hover:scale-110 transition-transform duration-500"></div>
          <div className="absolute top-3 right-3 bg-yellow-400 font-black uppercase text-[10px] px-2 py-1 rounded-[var(--radius-comic)] border-[2px] border-black flex items-center gap-1 shadow-sm">
            <Star className="h-3 w-3" /> Featured
          </div>
        </div>
        <div className="p-6 relative">
          <div className="absolute -top-10 left-6 w-16 h-16 rounded-[var(--radius-comic)] bg-white dark:bg-card border-[3px] border-black shadow-[var(--shadow-comic-sm)] flex items-center justify-center overflow-hidden">
            <Rocket className="h-8 w-8 text-blue-500" />
          </div>
          <div className="mt-8">
            <h3 className="font-black text-2xl uppercase tracking-tight leading-none mb-2">Space Exploration</h3>
            <p className="text-sm font-bold text-gray-600 mb-6">Discover the vast unknowns of the universe with our new rocket program. Buckle up!</p>
            <Button className="w-full font-black uppercase border-[3px] border-black shadow-[var(--shadow-comic-sm)] hover:bg-yellow-400 hover:text-black">
              Launch Sequence
            </Button>
          </div>
        </div>
      </div>
    `,
    code: `import { Button } from "c-comic-ui";\n\nexport default function App() {\n  return (\n    <div>...</div>\n  );\n}`,
  },
];

let generatedCode = "";
for (const comp of componentsToAdd) {
  if (content.includes('name: "' + comp.name + '"')) continue;

  generatedCode += `,
  {
    name: "${comp.name}",
    category: "${comp.category}",
    description: "${comp.description}",
    preview: (
${comp.preview}
    ),
    code: \`${comp.code.replace(/`/g, "\\`")}\`
  }`;
}

if (generatedCode) {
  content = content.replace(
    /(})\s*](\s*export default function ComponentsPage)/,
    "$1" + generatedCode + "\n]\n$2",
  );
  fs.writeFileSync(filePath, content, "utf8");
}
