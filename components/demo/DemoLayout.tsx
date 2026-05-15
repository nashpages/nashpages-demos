import type { DemoConfig } from "@/lib/types";
import { paletteToCssVars } from "@/lib/utils";
import { SmoothScroll } from "@/components/SmoothScroll";
import { DemoNav } from "./DemoNav";
import { DemoHero } from "./DemoHero";
import { DemoSobre } from "./DemoSobre";
import { DemoForbes } from "./DemoForbes";
import { DemoTratamentos } from "./DemoTratamentos";
import { DemoTecnologia } from "./DemoTecnologia";
import { DemoAtendimento } from "./DemoAtendimento";
import { DemoContato } from "./DemoContato";
import { DemoFooter } from "./DemoFooter";

type Props = {
  config: DemoConfig;
};

export function DemoLayout({ config }: Props) {
  return (
    <div style={paletteToCssVars(config.palette)}>
      <SmoothScroll />
      <DemoNav nav={config.nav} logoText={config.logoText} />
      <main>
        <DemoHero hero={config.hero} />
        <DemoSobre sobre={config.sobre} />
        {config.forbes && <DemoForbes forbes={config.forbes} />}
        <DemoTratamentos tratamentos={config.tratamentos} />
        <DemoTecnologia tecnologia={config.tecnologia} />
        <DemoAtendimento atendimento={config.atendimento} />
        <DemoContato contato={config.contato} />
      </main>
      <DemoFooter footer={config.footer} logoText={config.logoText} />
    </div>
  );
}
