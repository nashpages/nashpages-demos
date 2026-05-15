import type { DemoConfig } from "@/lib/types";
import { paletteToCssVars } from "@/lib/utils";
import { DemoNav } from "./DemoNav";
import { DemoHero } from "./DemoHero";
import { DemoAbout } from "./DemoAbout";
import { DemoEspecialidades } from "./DemoEspecialidades";
import { DemoDiferenciais } from "./DemoDiferenciais";
import { DemoContato } from "./DemoContato";
import { DemoFooter } from "./DemoFooter";

export function DemoLayout({ config }: { config: DemoConfig }) {
  return (
    <div style={paletteToCssVars(config.palette)} className="min-h-screen">
      <DemoNav config={config} />
      <main>
        <DemoHero config={config} />
        <DemoAbout config={config} />
        <DemoEspecialidades config={config} />
        <DemoDiferenciais config={config} />
        <DemoContato config={config} />
      </main>
      <DemoFooter config={config} />
    </div>
  );
}
