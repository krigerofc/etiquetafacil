import ConfigLabel from "@/app/components/Dashboard/(products)/Label/ConfiguraçãoEtiqueta";
import PainelEtiquetasRecentes from "@/app/components/Dashboard/(products)/Label/EtiquetasRecentes";
import PreviewLabel from "@/app/components/Dashboard/(products)/Label/PreviewLabel";
import SelectProduct from "@/app/components/Dashboard/(products)/Label/selectLabel";
import NavDash from "@/app/components/Dashboard/NavDash/navdash";
import LoadingScreen from "@/app/components/default/LoadingScreen/Loading";

import { Providers } from "@/app/providers";

export default function Label(){
  return(
  <Providers>
    <NavDash/>
    <div className="">
      <ConfigLabel/>
      <PainelEtiquetasRecentes/>
      <SelectProduct/>
      <PreviewLabel/>
    </div>
    <LoadingScreen/>
  </Providers>
  );
}