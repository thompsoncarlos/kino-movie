import Container from "@/components/template/Container";
import Flex from "@/components/template/Flex";
import Grid from "@/components/template/Grid";
import Wrap from "@/components/template/Wrap";
import Image from "next/image";
import Carrossel from "@/components/template/Carrossel";

export default function Home() {
  return (
    <div className="w-96">
      <Carrossel>
        <p>Texto 1</p>
        <p>Texto 2</p>
        <p>Texto 3</p>
      </Carrossel>
    </div>
  );
}
